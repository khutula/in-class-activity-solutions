// Open the inspector to see the data
console.log(movies);

// Starting a rating count
let ratingSum = 0;

// Arrays to hold movies by decade
movies1960s = [];
movies1970s = [];
movies1980s = [];
movies1990s = [];
movies2000s = [];

// For loop to go through all movies
for (let i = 0; i < movies.length; i++) {

  // Variable to hold current movie in loop
  movie = movies[i].title;

  // Increment sum variable by amount of rating
  ratingSum += movies[i].rating;

  // Conditional statement to determine array assignment
  if (movies[i].year >= 1960 && movies[i].year < 1970) {
    movies1960s.push(movie);
  } else if (movies[i].year >= 1970 && movies[i].year < 1980) {
    movies1970s.push(movie);
  } else if (movies[i].year >= 1980 && movies[i].year < 1990) {
    movies1980s.push(movie);
  } else if (movies[i].year >= 1990 && movies[i].year < 2000) {
    movies1990s.push(movie);
  } else if (movies[i].year >= 2000) {
    movies2000s.push(movie);
  }
}

// Find the average rating
let avg = ratingSum / movies.length;

// Print results
console.log("---------");
console.log(`${movies1960s.length} of the top ten movies are from the 1960s.`);
console.log(`${movies1970s.length} of the top ten movies are from the 1970s.`);
console.log(`${movies1980s.length} of the top ten movies are from the 1980s.`);
console.log(`${movies1990s.length} of the top ten movies are from the 1990s.`);
console.log(`${movies2000s.length} of the top ten movies are from the 2000s.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
