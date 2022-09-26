// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([35.1733, -110.1794],5);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213129, -122.3789554],
[30.18999924, -97.668663992],
[43.67771760000001, -79.62481969999999],
[40.641311,-73.778139]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: '5, 10',
  dashOffset: '0',
  weight : 4,
  opacity: 0.5
}).addTo(map);

//Street Map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);