console.log(data);

// Trace for the Greek Data
let trace = {
    x: data.map(god => god.greekName),
    y: data.map(god => god.greekSearchResults),
    type: "bar"
};

// Data trace array
let traceData = [trace];

// Apply the group barmode to the layout
var layout = {
    title: "Greek gods search results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout)