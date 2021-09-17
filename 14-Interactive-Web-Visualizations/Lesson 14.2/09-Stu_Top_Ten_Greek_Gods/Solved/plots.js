// Sort the data by Greek search results descending
data.sort(function compareFunction(first, second) {return second.greekSearchResults - first.greekSearchResults;});

console.log(data);

// Slice the first 10 objects for plotting
let sliced = data.slice(0,10);

console.log(sliced);

// Reverse the array to accommodate Plotly's defaults
let sliceReverse = sliced.reverse();

console.log(sliceReverse);

// Trace for the Greek Data

let trace = {
    x: sliceReverse.map(god => god.greekSearchResults),
    y: sliceReverse.map(god => god.greekName),
    type: "bar",
    orientation: "h"
};

// Data array
dataArray = [trace];

// Apply a title to the layout
var layout = {
    title: "Greek Gods Search Results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", dataArray, layout);