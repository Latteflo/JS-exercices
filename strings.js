//I - concatenation
//Write a function which receives two strings and returns them as one string.

//function concatenateStrings(string1, string2) {
//    return string1 + " " + string2;
//}

//let input1 = prompt("Write a string");
//let input2 = prompt("Write another string");

//let sentence = concatenateStrings(input1, input2);

//console.log(sentence);

//II - lowercase
//Write a function which receives a character in uppercase and prints it in lowercase.

function lowercaseTransform(string){
    return string.toLowerCase()
}
let input3 = prompt ("write an uppercase character")
let lowercaseCharacter=lowercaseTransform(input3)

console.log(lowercaseCharacter)


//III - uppercase
//Write a function which receives a string in lowercase and returns an uppercase sentence.

//IV - convert name
//Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"

//V - whitespace
//Write a function which receives a sentence full of whitespace and returns it without them.