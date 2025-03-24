let myName = "Malik";

// DAY 1 JAVASCRIPT VARIABLES, ARRAY, AND FUNCTIONS.

//VARIABLE
let mood = "happy";
mood = "tired";
const name = "Alex";
// name = "sam";
console.log(mood, name);

//ARRAYS -- Map -- Filter
const books = ["24 laws of power", "Atomic habit"];

console.log(books.length);
console.log(books[0]);
console.log(books[1]);
//Map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = numbers.map((num) => num * 2);

console.log(doubled);
//Filter
const threes = doubled.filter((doubled) => doubled % 3 == 0);
console.log(threes);
//COMBO
const pets = ["cat", "dog", "cow", "goat", "giraffe", "lion"];
const upperPet = pets.map((pets) => pets.toUpperCase());
const smallPert = pets.filter((pets) => pets.length < 4);

console.log(upperPet);
console.log(smallPert);

//Function
const shout = (text) => text.toUpperCase() + "!";
console.log(shout("hello"));

function addThree(a, b, c) {
  return a + b + c;
}
console.log(addThree(1, 2, 3));

const scores = [20, 24, 25];
const boostScore = (score) => score + 5;
const finalResult = scores.map(boostScore);

console.log(finalResult);

//EXERCISE 1
