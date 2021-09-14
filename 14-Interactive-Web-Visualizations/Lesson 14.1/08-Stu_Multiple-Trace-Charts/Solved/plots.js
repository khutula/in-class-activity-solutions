console.log(data);

// Initialized arrays
let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// YOUR CODE HERE
// For loop to populate arrays
for (let i = 0; i < data.length; i++) {
    names.push(data[i].pair);
    greekNames.push(data[i].greekName);
    romanNames.push(data[i].romanName);
    greekSearchResults.push(data[i].greekSearchResults);
    romanSearchResults.push(data[i].romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
    x: names,
    y: greekSearchResults,
    type: "scatter"
};

// Trace 2 for the Roman Data
let trace2 = {
    x: names,
    y: romanSearchResults,
    type: "scatter"
};

// Create data array
let pdata = [trace1, trace2];

// Apply a title to the layout
var layout = {
    title: "Greek vs Roman Gods Search Results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", pdata, layout);