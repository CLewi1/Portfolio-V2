'use client';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as maplibregl from 'maplibre-gl';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function Map() {
    const { theme } = useTheme();
    const lightMapUrl = process.env.NEXT_PUBLIC_LIGHT_MAP;
    const darkMapUrl = process.env.NEXT_PUBLIC_DARK_MAP;

    const mapInstance = useRef<maplibregl.Map | null>(null);
    useEffect(() => {
        try {
            const mapStyle = theme === 'dark' ? darkMapUrl : lightMapUrl;

            mapInstance.current = new maplibregl.Map({
                container: "map", 
                style: mapStyle, 
                center: [-87.939621, 41.903469], 
                zoom: 1
            });

            // Add error handler
            mapInstance.current.on('error', (e) => {
                console.error('Map error:', e);
            });

            const size = 50;

            const pulsingDot = {
                width: size,
                height: size,
                data: new Uint8ClampedArray(size * size * 4),
                context: null as CanvasRenderingContext2D | null,

                // get rendering context for the map canvas when layer is added to the map
                onAdd() {
                    const canvas = document.createElement('canvas');
                    canvas.width = this.width;
                    canvas.height = this.height;
                    this.context = canvas.getContext('2d');
                },

                // called once before every frame where the icon will be used
                render() {
                    const duration = 2000;
                    const t = (performance.now() % duration) / duration;

                    const radius = (size / 2) * 0.3;
                    const outerRadius = (size / 2) * 0.7 * t + radius;
                    const context = this.context;

                    if (!context) return false;

                    // draw outer circle
                    context.clearRect(0, 0, this.width, this.height);
                    context.beginPath();
                    context.arc(
                        this.width / 2,
                        this.height / 2,
                        outerRadius,
                        0,
                        Math.PI * 2
                    );
                    context.fillStyle = `rgba(135, 206, 235,${1 - t})`;
                    context.fill();

                    // draw inner circle
                    context.beginPath();
                    context.arc(
                        this.width / 2,
                        this.height / 2,
                        radius,
                        0,
                        Math.PI * 2
                    );
                    context.fillStyle = 'rgba(28, 150, 197, 1)';

                    context.fill();

                    // update this image's data with data from the canvas
                    this.data = new Uint8ClampedArray(context.getImageData(
                        0,
                        0,
                        this.width,
                        this.height
                    ).data);

                    // continuously repaint the map, resulting in the smooth animation of the dot
                    if (mapInstance.current) {
                        mapInstance.current.triggerRepaint();
                    } else {
                        console.error('Map instance is null');
                    }

                    // return `true` to let the map know that the image was updated
                    return true;
                }
            };

            // Only perform operations after the style is fully loaded
            mapInstance.current.on('style.load', () => {
                if (!mapInstance.current) return;
                
                // Now it's safe to add images, sources, layers
                mapInstance.current.zoomTo(13, {
                    duration: 5000,
                    easing: (t) => t * (2 - t)
                });
                
                mapInstance.current.addImage('pulsing-dot', pulsingDot, {pixelRatio: 2});

                mapInstance.current.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-87.939621, 41.903469]
                                },
                                properties: null
                            }
                        ]
                    }
                });
                mapInstance.current.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'pulsing-dot'
                    }
                });
            });
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    }, [theme]);

    return (
        <div id="map" className='size-full overflow-none'></div>
    );
}