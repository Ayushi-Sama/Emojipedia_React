import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x) => {
  return x + x;
});
console.log(newNumbers);

const newNum = numbers.filter((x) => {
  return x > 18;
});
console.log(newNum);

var newEmp = [];
numbers.forEach((x) => {
  newEmp.push(x * 2);
  // return newEmp;
});
console.log(newEmp);

const newNo = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(newNo);

const find = numbers.find((x) => {
  return x > 7;
});
console.log(find);

const find1 = numbers.findIndex((x) => {
  return x > 7;
});
console.log(find1);

// const newNum = [];
// function double(x) {
//   return newNum.push(x + x);
// }

// const newArr = numbers.forEach(double);
// console.log(numbers.forEach(double));
// function double(x) {
//   console.log(x * 2);
// }

// const num = numbers.map(double);
// console.log(num);
// // console.log(numbers.map(double));

// const newNum = [];

// function dbl(x) {
//   newNum.push(x * 2);
// }

// console.log(numbers.forEach(dbl));
