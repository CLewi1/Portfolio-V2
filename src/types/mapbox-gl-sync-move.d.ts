declare module '@mapbox/mapbox-gl-sync-move' {
    import { Map } from 'mapbox-gl';
    function syncMaps(...maps: Map[]): void;
    export default syncMaps;
  }