let ratings = ['G', 'PG', 'PG-13', 'R']

// Create a function to calculate the average of a metric by rating
function average(filmArray) {
    let GArray = [];
    let PGArray = [];
    let PG13Array = [];
    let RArray = [];

    for (let i = 0; i < filmArray.length; i++) {

        film = filmArray[i];

        if (film.rating === "G") {
            GArray.push(film.length);
        } else if (film.rating === "PG") {
            PGArray.push(film.length);
        } else if (film.rating === "PG-13") {
            PG13Array.push(film.length);
        } else if (film.rating === "R") {
            RArray.push(film.length);
        }
    }

    let averages = [];

    averages.push(averageCalc(GArray));
    averages.push(averageCalc(PGArray));
    averages.push(averageCalc(PG13Array));
    averages.push(averageCalc(RArray));

    return averages;
}
    
function averageCalc(ratingArray) {

    let sum = 0;

    for (let i = 0; i < ratingArray.length; i++) {
        sum += ratingArray[i];
    }

    let mean = sum / ratingArray.length;

    return mean;
}

// Invoke the metric average function
avgLen = average(films);

// Create a function to plot the average metric by rating results
function createTrace(xArray, yArray) {
    let trace = {
        x: xArray,
        y: yArray,
        type: "bar"
    };

    var layout = {
        title: "Average Movie Length by Rating"
    };

    Plotly.newPlot("plot", [trace], layout);
}

// Invoke the plot creating function
createTrace(ratings, avgLen);