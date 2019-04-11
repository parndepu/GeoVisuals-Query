import { Map_options } from './option';

/**
 * Initialize leaflet map
 * @param {*} container_id 
 */
export function Map_initialize(container_id)
{
    return L.map(container_id, Map_options);
}