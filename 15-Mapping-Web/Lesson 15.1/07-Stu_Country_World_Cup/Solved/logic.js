// Create a map object.
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "Brazil",
    location: [-14.2350, -51.9253],
    points: 227
  },
  {
    name: "Germany",
    location: [51.1657, 10.4515],
    points: 218
  },
  {
    name: "Italy",
    location: [41.8719, 12.5675],
    points: 156
  },
  {
    name: "Argentina",
    location: [-38.4161, -63.6167],
    points: 140
  },
  {
    name: "Spain",
    location: [40.4637, -3.7492],
    points: 99
  },
  {
    name: "England",
    location: [52.355, 1.1743],
    points: 98
  },
  {
    name: "France",
    location: [46.2276, 2.2137],
    points: 96
  },
  {
    name: "Netherlands",
    location: [52.1326, 5.2913],
    points: 93
  },
  {
    name: "Uruguay",
    location: [-32.4228, -55.7658],
    points: 72
  },
  {
    name: "Sweden",
    location: [60.1282, 18.6435],
    points: 61
  }
];

function colorPicker(points) {
  if (points > 200) {
    return "yellow";
  } else if (points > 100) {
    return "blue";
  } else if (points > 90) {
    return "green";
  } else {
    return "red";
  };
}

// Loop through the countries array.
for (let i=0; i<countries.length; i++) {
    // Add circles to the map.
    L.circle(countries[i].location, {
        // Conditionals for country points
        color: colorPicker(countries[i].points),

        // Adjust the radius.
        radius: countries[i].points * 1000
    }).bindPopup(`<h1> ${countries[i].name} </h1> <hr> <h2>Points: ${countries[i].points}</h2>`).addTo(myMap);
}