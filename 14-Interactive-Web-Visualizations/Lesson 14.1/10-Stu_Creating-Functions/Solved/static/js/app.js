var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Mean is the average of all the values.
function statisticalAnalysis(inputArray) {

    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i]
    }
    let avg = sum / inputArray.length;
    console.log(`The Mean of the data is: ${avg}`);

// Variance can be found by subtracting the mean from each number in the data set,
// squaring the result, and
// then averaging the square differences.
    let varSum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        varSum += Math.pow(inputArray[i] - avg, 2);
    }

    let dVar = varSum / inputArray.length;
    console.log(`The Variance of the data is: ${dVar}`)


// Standard deviation is the square root of the variance
    let stdDev = Math.sqrt(dVar);
    console.log(`The Standard Deviation of the data is: ${stdDev}`);
}


// Print to the cosole the Movie Statistical Analysis
console.log("Movie Score Data");
statisticalAnalysis(movieScore);

// Print to the cosole the Rainfall Statistical Analysis
monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23]
console.log("Rainfall Data");
statisticalAnalysis(monthlyAvgRainFall);

// Print to the cosole the Running Statistical Analysis
mileRunTimes = [5.06, 4.54, 5.56, 4.40, 7.10]
console.log("Running Data");
statisticalAnalysis(mileRunTimes);