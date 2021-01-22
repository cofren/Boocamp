// Excercise 1

let color = ["blue", "green", "red"];
 for (i = 0; i < color.length; i++) {
    
    console.log("My #" + (i+1) + " choice is " + color[i]);
}


let suffix = ["st","nd","rd"]
 for (i = 0; i < color.length; i++) {
    
    console.log("My"  + (i+1) + suffix[i] + " choice is " + color[i]);
}

// Excercise 2
console.log("Exercise 2");
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
console.log("Remove Greg");
people.splice(0,1);
console.log(people);
console.log("Jason for James");
people.splice(2,1,"Jason");
console.log(people);
console.log("Add Amit");
people.push("Amit");
console.log(people);
console.log("Exit after Jason");

for (i of people) {
    if (i == "Jason") {
    break;
    }
    console.log(i);
}
console.log("Copy and not Mary and not my Name");
console.log(people.slice(1,3));

console.log("Index of Mary");
console.log(people.indexOf("Mary"))

console.log("Index of Foo");
console.log(people.indexOf("Foo"))

console.log("Variable \"last\"");
let last = people.length;
console.log(people[last-1]);

