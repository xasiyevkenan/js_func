//Part 1
const greet = (name, hello = "Hello") => {
  return hello + " " + name;
};

console.log(greet("Kenan")); //returns "Hello Kenan"
console.log(greet("Kenan", "Salam")); //returns "Salam Kenan"

//Part 2
const factorial = (num, result = 1) => {
  if (num <= 1) {
    return result;
  }

  result *= num;

  return factorial(num - 1, result);
};

console.log(factorial(5)); //120
console.log(factorial(3)); //6
console.log(factorial(7)); //5040
console.log(factorial(9)); //362880

//Part 3
let sum = 0;

const sumAll = (a, b, ...others) => {
  sum = a + b;
  for (let i = 0; i < others.length; i++) {
    sum += others[i];
  }

  return console.log(sum);
};

sumAll(1, 2, 3, 4, 5, 6);

//Part 4
const first = (mult, div) => {
  let square = (mult * div) ** 2;

  return square;
};

const second = (sum, dif) => {
  let mult = sum * dif;
  let div = sum / dif;

  return first(mult, div);
};

const third = (a, b) => {
  let sum = a + b;
  let dif = a - b;

  return second(sum, dif);
};

console.log(first(8, 2));
console.log(second(4, 1));
console.log(third(6, 2));
