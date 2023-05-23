//I - print numbers
//Write an algorithms which receives an integers n and prints:

//the numbers from 1 to n

function printNr(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

//printNr(8)

//the numbers from 1 to n in descending order

function printNrDescending(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i)
  }
}

//  printNrDescending(8)

//the numbers from -n to n

function printNrNegative(n) {
  for (let i = -n; i <= n; i++) {
    console.log(i)
  }
}

//printNrNegative(3)

//the odd numbers from 1 to n

function printOddNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }
}

//printOddNumbers(9)

//II - print random number of integers
//Write an algorithm which receives an random integer and prints from 0 to it.

function numberOfIntegers() {
  let sum = Math.floor(Math.random() * 10) + 1
  for (let i = 0; i <= sum; i++) {
    console.log(i)
  }
}
//numberOfIntegers()

//III - throw dices
//Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.

function throwDice() {
  let draw = []
  for (let i = 0; i <= 6; i++) {
    let result = Math.floor(Math.random() * 6) + 1
    draw.push(result)
  }
  return draw
}

function check(array, value) {
  let int = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      int++
    }
  }
  return int
}

let tabOfDice = throwDice()
let rec = check(tabOfDice, 2)

//console.log(tabOfDice)
//console.log(rec)

//IV - even numbers
//Write an algorithm which prints all the even numbers from 0 to a given number.

function evenNumbers(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

//evenNumbers(6)

//V - perfect number
//Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).

function perfectNumber(n) {
  let temp = 0
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      temp += i
    }
  }
  if (temp === n && temp !== 0) {
    return "Yeeeeyyy!!! You found the perfect number!"
  } else {
    return "Buuhuuu, try again!!!"
  }
}

console.log(perfectNumber(6))
