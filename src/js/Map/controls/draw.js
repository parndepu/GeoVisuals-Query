import { Map_layers } from '../layers';

/**
 * Adding leaflet draw controls
 * @param {*} map 
 * @param {*} position 
 */
export function Map_add_draw_control(map, position)
{
    // TODO: Modify this for more styles
    return map.addControl(new L.Control.Draw({

        edit: {
            featureGroup: Map_layers.draw,
            poly: {
                allowIntersection: false
            }
        },
        draw: {
            polygon: {
                allowIntersection: false,
                showArea: true
            }
        }

    }), { position: position });
}