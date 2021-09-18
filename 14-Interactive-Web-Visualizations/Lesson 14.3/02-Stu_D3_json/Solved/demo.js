// Get the Roadster endpoint
const url = "https://api.spacexdata.com/v3/roadster";

// Fetch the JSON data and console log it
const dataPromise = d3.json(url);
d3.json(url).then(function(data) {
    console.log(data);
});

// Get the capsules endpoint
const capURL = "https://api.spacexdata.com/v3/capsules";

// Fetch the JSON data and console log it
const dataPromiseCap = d3.json(url);
d3.json(capURL).then(function(data) {
    console.log(data);
});