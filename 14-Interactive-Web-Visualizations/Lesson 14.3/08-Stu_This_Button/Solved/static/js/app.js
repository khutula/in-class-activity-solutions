// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars").text(Math.floor(Math.random() * 9) + 1);

// Select the counter h3 element
var counter = d3.select(".counter");
var storeInfo = [];

// Select the buttons and use D3 `.on` to attach a click handler
d3.selectAll("button").on("click", function() {

  // Create a variable for the button selected
  let buttonSelected = d3.select(this);

  // Create a varaible to hold the increment or decrement
  let change = parseInt(buttonSelected.attr("value"));

  // Create a variable to hold the current counter value
  var counterVal= parseInt(counter.text());

  // Update the counter value
  counterVal += change;

  // Set the counter h3 text to the new count
  counter.text(counterVal);

  //BONUS
  if (change === -1) {
    voteType = "downvote"
  } else {
    voteType = "upvote"
  };
  storeInfo.push([voteType, counterVal]);
  console.log(storeInfo);
});