// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//L.geoJSON(sanFranAirport).addTo(map);
//}).addTo(map);
//Street Map
let streets  = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
  accessToken: API_KEY
});

//Street Map
let satelliteStreets  = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets" : streets,
  "Satellite Streets": satelliteStreets 
};

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
let torontoHoods   = "https://raw.githubusercontent.com/raneymjohnGit/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor : "yellow",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);

// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data , {
 style: myStyle,
  onEachFeature: function(feature, layer) {    
    console.log(layer);
    layer.bindPopup("<h3> Ailine : " + feature.properties.airline + "</h3><hr>" + "<h3> Destination:" + feature.properties.dst + "</h3>");
  }}).addTo(map);
});