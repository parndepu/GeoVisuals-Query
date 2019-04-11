// List of all display layer
export var Map_layers = {
    // Draw controls
    draw: L.featureGroup()
}

/**
 * Add any layer to current map
 * @param {*} map 
 * @param {*} layer 
 */
export function Map_add_layer(map, layer)
{
    return map.addLayer(layer);
}