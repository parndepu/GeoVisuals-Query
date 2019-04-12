// Leaflet
import 'leaflet/dist/leaflet.css';

// Leaflet draw
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';

// CSS files
import './css/style.css';

// JS files
import  {   Map_initialize, 
            Map_layers,
            Map_add_layer,
            Map_add_layer_control, 
            Map_add_zoom_control, 
            Map_add_overlay_layer,
            Map_add_draw_control
        }   from './js/Map';

$(window).on('load', function () {

    // Initialize leaflet map
    var leaflet_map = Map_initialize('map');
    var leaflet_zoom_control = Map_add_zoom_control(leaflet_map, 'bottomright');
    var leaflet_layer_control = Map_add_layer_control(leaflet_map, 'topright');

    // Add testing polyline
    var polyline = L.polyline([[37.0842, -94.5133], [37.0830, -94.5120]]);
    Map_add_overlay_layer(leaflet_layer_control, polyline, 'test');

    // Adding leaflet draw
    Map_add_layer(leaflet_map, Map_layers.draw);
    Map_add_draw_control(leaflet_map, 'topleft');
    Map_add_overlay_layer(leaflet_layer_control, Map_layers.draw, 'draw');

    // Calculate bounding box of line string
    var line = turf.lineString([[-74, 40], [-78, 42], [-82, 30]]);
    var bbox = turf.bbox(line);
    var bboxPolygon = turf.bboxPolygon(bbox);
    //console.log(bboxPolygon);
    // Add geojson layer to the leaflet map
    var geojson_layer = L.geoJSON().addTo(leaflet_map);

    // Add data to geojson layer
    geojson_layer.addData(line);
    geojson_layer.addData(bboxPolygon);

    // Geojson style
    var geojson_style = {
        "color": "red",
        "weight": 5,
        "opacity": 0.5
    };

    geojson_layer.setStyle(geojson_style);
    leaflet_map.flyToBounds(geojson_layer.getBounds());


    // Set up drawing events 
    // TODO: move this to map components
    leaflet_map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        Map_layers.draw.addLayer(layer);
    });

    return;

});