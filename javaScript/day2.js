//JAVASCRIPT OBJECT AND THE DOM

//OBJECT
const person = {
  name: "Akanni Malik",
  age: 25,
  isCoder: true,
  bestFoods: ["beans", "cake", "plantain"],
};

console.log(person.age);
console.log(person["isCoder"]);

person.job = "developer";
person.age = 24;

console.log(person);

const calculator = {
  add: (a, b) => a + b,
};

console.log(calculator.add(2, 4));

//THE DOM
const data = {
  items: ["apple", "Orange", "Grape"],
};
const ul = document.querySelector("#casing");
ul.innerHTML = data.items.map((data) => `<li>${data}</li>`).join("");

console.log(ul);

//EXERCISE 1
function countChars(str) {
  const letterCount = {};
}
console.log(countChars("aabbc")); // {a: 2, b: 2, c: 1}
