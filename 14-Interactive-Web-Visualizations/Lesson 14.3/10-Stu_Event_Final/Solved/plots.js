// An array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// An array of music provider labels
var labels = Object.keys(data.us);

// @ADD YOUR CODE HERE
function init() {
    let data = [{
        values: us,
        labels: labels,
        type: "pie"
    }];

    Plotly.newPlot("pie", data);
}

d3.selectAll("#country").on("change", function() {
    let country = d3.select(this).property("value");
    let values = [];

    if (country === "us") {
        values = us;
    } else if (country === "uk") {
        values = uk;
    } else if (country === "canada") {
        values = canada;
    }

    Plotly.restyle("pie", "values", [values])
});

init();