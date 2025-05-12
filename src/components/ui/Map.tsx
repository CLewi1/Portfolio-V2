'use client';
import * as maplibregl from 'maplibre-gl';
import syncMaps from '@mapbox/mapbox-gl-sync-move';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

interface MapProps {
    lightMapUrl: string;
    darkMapUrl: string;
}

export default function Map({ lightMapUrl, darkMapUrl }: MapProps) {
    const { theme } = useTheme();

    const lightMapInstance = useRef<maplibregl.Map | null>(null);
    const darkMapInstance = useRef<maplibregl.Map | null>(null);

    const resizeMaps = () => {
        if (lightMapInstance.current) {
            lightMapInstance.current.resize();
        }
        if (darkMapInstance.current) {
            darkMapInstance.current.resize();
        }
    };

    useEffect(() => {
        if (lightMapInstance.current && darkMapInstance.current) {
            resizeMaps();
            
            const transitionDuration = 500;
            setTimeout(resizeMaps, transitionDuration + 50);
        }
    }, [theme]);

    useEffect(() => {
        if (!lightMapUrl || !darkMapUrl) {
            console.error("Map URLs are missing!");
            return; 
        }
        try {
            lightMapInstance.current = new maplibregl.Map({
                container: "lightMap", 
                style: lightMapUrl, 
                center: [-87.939621, 41.903469], 
                zoom: 1
            });
            darkMapInstance.current = new maplibregl.Map({
                container: "darkMap", 
                style: darkMapUrl, 
                center: [-87.939621, 41.903469], 
                zoom: 1
            });

            const size = 50;

            let isPaused = false;
            let pauseStartTime = 0;
            let animationStartTime = performance.now(); 
            const pauseDuration = 3000; 
            const animationDuration = 2000;

            const pulsingDot = {
                width: size,
                height: size,
                data: new Uint8ClampedArray(size * size * 4),
                context: null as CanvasRenderingContext2D | null,

                onAdd() {
                    const canvas = document.createElement('canvas');
                    canvas.width = this.width;
                    canvas.height = this.height;
                    this.context = canvas.getContext('2d');
                    
                    animationStartTime = performance.now();
                    isPaused = false;
                },

                render() {
                    const now = performance.now();
                    let t = 0;
                    
                    if (isPaused) {
                        if (now - pauseStartTime >= pauseDuration) {
                            isPaused = false;
                            animationStartTime = now;
                            t = 0; 
                        } else {
                            t = 1;
                        }
                    } else {
                        const elapsed = now - animationStartTime;
                        t = Math.min(elapsed / animationDuration, 1);
                        
                        if (t >= 1) {
                            isPaused = true;
                            pauseStartTime = now;
                            t = 1; 
                        }
                    }

                    const radius = (size / 2) * 0.3;
                    const outerRadius = (size / 2) * 0.7 * t + radius;
                    const context = this.context;

                    if (!context) return false;

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

                    this.data = new Uint8ClampedArray(context.getImageData(
                        0,
                        0,
                        this.width,
                        this.height
                    ).data);

                    if (lightMapInstance.current) {
                        lightMapInstance.current.triggerRepaint();
                    }
                    if (darkMapInstance.current) {
                        darkMapInstance.current.triggerRepaint();
                    }

                    return true;
                }
            };

            lightMapInstance.current.on('style.load', () => {
                if (!lightMapInstance.current) return;
                
                setTimeout(() => {
                    if (!lightMapInstance.current) return;
                    
                    lightMapInstance.current.zoomTo(9, {
                        duration: 5000,
                        easing: (t) => t * (2 - t)
                    });
                }, 1000);
                
                lightMapInstance.current.addImage('pulsing-dot', pulsingDot, {pixelRatio: 2});

                lightMapInstance.current.addSource('points', {
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
                lightMapInstance.current.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'pulsing-dot'
                    }
                });

                setTimeout(resizeMaps, 100);
            });

            darkMapInstance.current.on('style.load', () => {
                if (!darkMapInstance.current) return;
                
                setTimeout(() => {
                    if (!darkMapInstance.current) return;
                    
                    darkMapInstance.current.zoomTo(9, {
                        duration: 5000,
                        easing: (t) => t * (2 - t)
                    });
                }, 1000);

                darkMapInstance.current.addImage('pulsing-dot', pulsingDot, {pixelRatio: 2});

                darkMapInstance.current.addSource('points', {
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
                darkMapInstance.current.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'pulsing-dot'
                    }
                });

                setTimeout(resizeMaps, 100);
            });

            syncMaps(lightMapInstance.current, darkMapInstance.current);

            return () => {
                window.removeEventListener('resize', resizeMaps);
                lightMapInstance.current?.remove();
                darkMapInstance.current?.remove();
            };

        } catch (error) {
            console.error('Error initializing map:', error);
        }


    }, [darkMapUrl, lightMapUrl]);

    return (
        <div className="absolute size-full">
            <div
                id="lightMap"
                className={`absolute inset-0 transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                ></div>
            <div
                id="darkMap"
                className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                ></div>
        </div>
    );
}