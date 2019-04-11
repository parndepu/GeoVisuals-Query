import { Map_tile_layers } from './tile';

// Leaflet map default option
export var Map_options = {
    center: [37.0842, -94.5133],
    zoom: 15,
    minZoom: 11,
    maxZoom: 17,
    layers: Map_tile_layers.google_satelite,
    detectRetina: true,
    zoomControl: false,
    fullscreenControl: true,
    opacity: 0.1,
    preferCanvas: true,
    trackResize: true
};