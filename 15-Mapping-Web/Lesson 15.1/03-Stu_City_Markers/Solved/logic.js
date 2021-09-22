// Create a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// City markers

// Add code to create a marker for each of the following cities and to add it to the map.

// newyork;
var newyork = L.marker([40.7128, -74.006], {
    title: "New York City"
}).addTo(myMap);

// chicago;
var chicago = L.marker([41.8781, -87.6298], {
  title: "Chicago"
}).addTo(myMap);

// houston;
var houston = L.marker([29.7604, -95.3698], {
  title: "Houston"
}).addTo(myMap);

// la;
var losAngeles = L.marker([34.0522, -118.2437], {
  title: "Los Angeles"
}).addTo(myMap);

// omaha;
var omaha = L.marker([41.2565, -95.9345], {
  title: "Omaha"
}).addTo(myMap);
