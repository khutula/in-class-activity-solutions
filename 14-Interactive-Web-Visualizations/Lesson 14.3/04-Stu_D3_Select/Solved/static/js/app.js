// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var table = d3.select("table")

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "grades table table-striped")

// Use D3 to select the table body
var tableBody = d3.select("tbody")

// Append one table row `tr` to the table body
var newEntry = tableBody.append("tr")

// Append one cell for the student name
newEntry.append("td").text(newGrade[0])

// Append one cell for the student grade
newEntry.append("td").text(newGrade[1])
