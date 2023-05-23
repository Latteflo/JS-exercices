//I print an array
//Write an algorithm which prints everything in an array.

let everythingPrinted = [" Ana", "are", "mere", "dar", "nu", "are", "pere"]
//console.log(everythingPrinted)


//II - maximum
//Write an algorithm which receives an array of integers and prints its maximum.

let mixedNumbers=[3,5,9,7,5,4,10,6,1,8]

//console.log(Math.max(...mixedNumbers))

//III - minimum
//Write an algorithm which receives an array of integers and prints its minimum.

let mixedNumbersTwo=[3,5,9,7,5,4,10,6,1,8]

//console.log(Math.min(...mixedNumbersTwo))


//IV - minimum position
//Write an algorithm which receives an array of integers and prints the position of its minimum.

let mixedNumbersTree=[3,5,9,7,5,4,10,6,1,8]
let index = mixedNumbersTree.indexOf(Math.min(...mixedNumbersTree))

console.log(index) // prints the index not the value

//V - ordered array
//Write a algorithm which receives an array of integers and check if its ordered ascendantly.
// Print true if the array is ordered, false if it’s not.


