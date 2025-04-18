'use client';
import * as maplibregl from 'maplibre-gl';
import syncMaps from '@mapbox/mapbox-gl-sync-move';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

// Define props interface
interface MapProps {
    lightMapUrl: string;
    darkMapUrl: string;
}

// Update component signature to accept props
export default function Map({ lightMapUrl, darkMapUrl }: MapProps) {
    const { theme } = useTheme();

    const lightMapInstance = useRef<maplibregl.Map | null>(null);
    const darkMapInstance = useRef<maplibregl.Map | null>(null);

    // Define resizeMaps function outside of the useEffect
    const resizeMaps = () => {
        if (lightMapInstance.current) {
            lightMapInstance.current.resize();
        }
        if (darkMapInstance.current) {
            darkMapInstance.current.resize();
        }
    };

    // Call resize when theme changes
    useEffect(() => {
        if (lightMapInstance.current && darkMapInstance.current) {
            // Initial resize
            resizeMaps();
            
            const transitionDuration = 500;
            setTimeout(resizeMaps, transitionDuration + 50);
        }
    }, [theme]);

    useEffect(() => {
        // Make sure to handle potential undefined URLs if passed incorrectly
        if (!lightMapUrl || !darkMapUrl) {
            console.error("Map URLs are missing!");
            return; // Prevent map initialization without URLs
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

            // Track animation state
            let isPaused = false;
            let pauseStartTime = 0;
            let animationStartTime = performance.now(); // Track when animation started
            const pauseDuration = 3000; // 3 seconds in milliseconds
            const animationDuration = 2000; // 2 seconds for the animation

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
                    
                    // Reset animation to ensure it starts from the beginning
                    animationStartTime = performance.now();
                    isPaused = false;
                },

                // called once before every frame where the icon will be used
                render() {
                    const now = performance.now();
                    let t = 0;
                    
                    // Check if we're in a pause state
                    if (isPaused) {
                        // Check if the pause duration has elapsed
                        if (now - pauseStartTime >= pauseDuration) {
                            // Resume animation - set new start time
                            isPaused = false;
                            animationStartTime = now;
                            t = 0; // Start from beginning
                        } else {
                            // Still in pause, keep t at 1 (fully expanded state)
                            t = 1;
                        }
                    } else {
                        // Calculate animation progress based on time since animation started
                        const elapsed = now - animationStartTime;
                        t = Math.min(elapsed / animationDuration, 1);
                        
                        // Check if we just completed a cycle
                        if (t >= 1) {
                            isPaused = true;
                            pauseStartTime = now;
                            t = 1; // Ensure we're at the final state
                        }
                    }

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
                    if (lightMapInstance.current) {
                        lightMapInstance.current.triggerRepaint();
                    }
                    if (darkMapInstance.current) {
                        darkMapInstance.current.triggerRepaint();
                    }

                    // return `true` to let the map know that the image was updated
                    return true;
                }
            };

            // Only perform operations after the style is fully loaded
            lightMapInstance.current.on('style.load', () => {
                if (!lightMapInstance.current) return;
                
                // Now it's safe to add images, sources, layers
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

                // Force resize after a slight delay to ensure all styles are applied
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

                // Force resize after a slight delay
                setTimeout(resizeMaps, 100);
            });

            syncMaps(lightMapInstance.current, darkMapInstance.current);

            // Clean up on unmount
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