// day3 challenge
//Personal budget calculator
const myName = "Akanni Malik";
let myMonthlyIncome = 80000;
let myMonthlyExpenses = 60000;
let toSave = true;
let balance = myMonthlyIncome - myMonthlyExpenses;

console.log(`Hello, ${myName}!`);
console.log(`Your remaining balance is: ${balance}`);
console.log(`10% of your income is: ${myMonthlyIncome * 0.1}`);
console.log(`Is your balance positive? ${balance > 0}`);
console.log(`Can you save? ${toSave && balance > 0}`);

if (toSave && balance > 0) {
  console.log(`You can save ${myMonthlyIncome * 0.1} this month!`);
} else {
  console.log(`Warning: Reduce your expenses to start saving!`);
}
