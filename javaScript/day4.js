// // let fruitType = "Mangoes";
// // switch (fruitType) {
// //   case "Oranges":
// //     console.log("Oranges are $0.59 a pound.");
// //     break;
// //   case "Apples":
// //     console.log("Apples are $0.32 a pound.");
// //     break;
// //   case "Bananas":
// //     console.log("Bananas are $0.48 a pound.");
// //     break;
// //   case "Cherries":
// //     console.log("Cherries are $3.00 a pound.");
// //     break;
// //   case "Mangoes":
// //     console.log("Mangoes are $0.56 a pound.");
// //     break;
// //   case "Papayas":
// //     console.log("Papayas are $2.79 a pound.");
// //     break;
// //   default:
// //     console.log(`Sorry, we are out of ${fruitType}.`);
// // }
// // console.log("Is there anything else you'd like?");

// function getMonthName(mo) {
//   mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec).
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   if (months[mo]) {
//     return months[mo];
//   } else {
//     throw new Error("InvalidMonthNo"); // throw keyword is used here.
//   }
// }

// console.log(getMonthName(5)); // May.

// try {
//   // statements to try.
//   monthName = getMonthName(myMonth); // function could throw exception.
// } catch (e) {
//   monthName = "unknown";
//   logMyErrors(e); // pass exception object to error handler (i.e. your own function).
// }

//switch

// let favFood = "pizza";

// switch (true) {
//   case "beans" === favFood:
//     console.log(`Not my best food`);
//     break;
//   case "Rice" === favFood:
//     console.log(`Rice is my best food`);
//     break;
//   case "yam" === favFood:
//     console.log(`Not my best food`);
//     break;
//   case "pasta" === favFood:
//     console.log(`Not my best food`);
//     break;
//   case "pizza" === favFood:
//     console.log(`Not my best food`);
//     break;

//   default:
//     console.log(`I don't know this food`);
//     break;
// }

// exercise 1
let score = -7;
let validGrade = score >= 0 && score <= 100;
let result = score >= 60 ? "Result: Pass" : "Result: Fail";
console.log(`Score: ${score}`);

if (validGrade) {
  if (score >= 90) {
    console.log(`Grade: A`);
  } else if (score >= 80) {
    console.log(`Grade: B`);
  } else if (score >= 70) {
    console.log(`Grade: C`);
  } else if (score >= 60) {
    console.log(`Grade: D`);
  } else if (score < 60) {
    console.log(`Grade: F`);
  }

  console.log(`${result}`);
  console.log(`Score is valid: ${validGrade}`);
} else {
  console.log(`Error: Score must be between 0 and 100`);
}

// Purnishment Exercise 1
let number = 58;
let divThree = number % 3 === 0;

if (number > 0) {
  console.log(`Number is: Positive`);
} else if (number < 0) {
  console.log(`Number is: Negative`);
} else {
  console.log(`Number is: Zero`);
}

if (number % 2 === 0) {
  console.log(`Number is: Even`);
} else {
  console.log(`Number is: Odd`);
}

console.log(`Divisible by 3: ${divThree}`);
if (number < 0) {
  console.log(`number is negative and invalid for this exercise`);
} else {
  switch (true) {
    case number > 50:
      console.log(`Category: Large`);
      break;
    case number > 10:
      console.log(`Category: Medium`);
      break;
    case number <= 10:
      console.log(`Category: Small`);
      break;

    default:
      break;
  }
}

//purnishment exercise 2
let income = 50000;
let expenses = 30000;
let emergencyFund = 10000;
let balance = income - expenses;

console.log(`Balance: $${balance}`);
console.log(`Savings: $${income * 0.1}`);

if (balance > emergencyFund) {
  console.log(`Can cover emergency expenses: true`);
} else {
  console.log(`Can cover emergency expenses: false`);
}

if (balance - emergencyFund >= 0) {
  console.log(`Can save without going negative: true`);
} else {
  console.log(`Can save without going negative: false`);
}

let financialStatus =
  balance > emergencyFund
    ? "Financial status: Safe"
    : "Financial status: Risky";
console.log(financialStatus);
