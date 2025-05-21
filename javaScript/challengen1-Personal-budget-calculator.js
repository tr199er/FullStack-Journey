// day3 challenge
//Personal budget calculator
const myName = "Akanni Malik";
let myMonthlyIncome = 30000;
let myMonthlyExpenses = 60000;
let toSave = true;

console.log(`Hello, ${myName}!`);
console.log(
  `Your remaining balance is: ${myMonthlyIncome - myMonthlyExpenses}`
);
console.log(`10% of your income is: ${(myMonthlyIncome / 100) * 10}`);
console.log(
  `Is your balance positive? ${myMonthlyIncome - myMonthlyExpenses > 0}`
);
console.log(
  `Can you save? ${toSave && myMonthlyIncome - myMonthlyExpenses > 0}`
);

if (toSave && myMonthlyIncome - myMonthlyExpenses > 0) {
  console.log(`You can save ${(myMonthlyIncome / 100) * 10} this month!`);
} else {
  console.log(`Warning: Reduce your expenses to start saving!`);
}
