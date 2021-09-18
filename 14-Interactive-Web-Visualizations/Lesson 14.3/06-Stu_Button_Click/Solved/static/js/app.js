// Randomly select an episode number for Star Wars
var episode = d3.select(".star-wars").text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
var upvoteButton = d3.select(".upvote");
var downvoteButton = d3.select(".downvote");

// Select the counter h3 element
var counter = d3.select(".counter");
var counterVal = parseInt(counter.text());

// Use D3 `.on` to attach a click handler for the upvote
upvoteButton.on("click", function() {
    counter.text(counterVal + 1);
    counterVal = parseInt(counter.text());
});

// Use d3 `.on` to attach a click handler for the downvote
downvoteButton.on("click", function() {
  counter.text(counterVal - 1);
  counterVal = parseInt(counter.text());
});