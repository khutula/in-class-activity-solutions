let princesses = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];

// Create an array of just the names from the princesses array
let princess_names = princesses.map(princess => princess.name);

console.log(princess_names);

// Create an array of strings for each princess name, follow by a colon, followed by their age
let princess_strings = princesses.map(princess => `${princess.name}: ${princess.age}`);

console.log(princess_strings);