/**
 * Add leaflet zoom control with position
 * @param {*} map 
 * @param {*} position 
 */
export function Map_add_zoom_control(map, position)
{
    return L.control.zoom({
        position: position
    }).addTo(map);
}