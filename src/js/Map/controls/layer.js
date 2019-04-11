import { Map_tile_layers } from '../tile';

/**
 * Add map control layers
 * @param {*} map 
 * @param {*} position
 */
export function Map_add_layer_control(map, position)
{
    // Base layers
    var base_layers = {
        'Google': Map_tile_layers.google_satelite,
        'Light': Map_tile_layers.mapbox_light,
        'Dark': Map_tile_layers.mapbox_dark,
        'Streets':  Map_tile_layers.mapbox_streets,
        //'CartoDB':  Map_tile_layers.carto_nolabel
    };

    // Overlay layers
    var overlay_layers = {};

    // Add two layer control to the map
    return L.control.layers(
        base_layers,
        overlay_layers,
        {
            position: position
        }
    ).addTo(map);

}

/**
 * Add new tile layer to baselayer control (radio)
 * @param {*} control 
 * @param {*} tile_layer 
 * @param {*} name 
 */
export function Map_add_base_layer(control, tile_layer, name)
{
    return control.addBaseLayer(tile_layer, name);
}

/**
 * Add layer to overlaylayer control (checkbox)
 * @param {*} control 
 * @param {*} shape_layer 
 * @param {*} name 
 */
export function Map_add_overlay_layer(control, shape_layer, name)
{
    return control.addOverlay(shape_layer, name);
}