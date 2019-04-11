// Map tiles setting
var Map_opacity = 1;
var Map_attribution = '';

// CartoDB url
/*
var Map_cartoDB_url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
*/
// Mapbox url
var Map_mapbox_url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
// Mapbox access token
var Map_mapbox_accessToken = 'pk.eyJ1Ijoic2phbW9ubmEiLCJhIjoiY2o4YXcxczVlMDhyMDJxbnlhMTcycWpjZCJ9.3HTi8RSFUAM9dv7FtK3eag';

// Google url
var Map_google_url = 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}';

// Leaflet map tile layers
export var Map_tile_layers = {

    // Mapbox tiles
    mapbox_light: L.tileLayer( Map_mapbox_url, {
        id: 'mapbox.light',
        opacity: Map_opacity,
        accessToken: Map_mapbox_accessToken,
        attribution: Map_attribution
    }),

    mapbox_dark: L.tileLayer( Map_mapbox_url, {
        id: 'mapbox.dark',
        opacity: Map_opacity,
        accessToken: Map_mapbox_accessToken,
        attribution: Map_attribution
    }),

    mapbox_streets: L.tileLayer( Map_mapbox_url, {
        id: 'mapbox.streets',
        opacity: Map_opacity,
        accessToken: Map_mapbox_accessToken,
        attribution: Map_attribution
    }),

    // CartoDB tiles
    /*
    carto_nolabel: L.tileLayer( Map_cartoDB_url, {
        subdomains: 'abcd',
        opacity: Map_opacity,
        attribution: Map_attribution
    }),*/

    // Google tiles
    google_satelite: L.tileLayer( Map_google_url, {
        attribution: Map_attribution
    })
};