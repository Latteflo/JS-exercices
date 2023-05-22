
//I - calculate
//Write an algorithm which calculates:

//the sum of two chosen number

function sum(a,b){
    console.log( a + b)
}
sum(5,6)

//the division of two chosen number

function division(a,b){
    console.log( a / b)
}
division(5,6)

//the modulo of two inputed numbers

function modulo(a,b){
    console.log( a % b)
}
modulo(5,6)

//II - concatenate sentence
//Write an algorithm which concatenates two phrases together.

function concat(string1, string2){
    console.log ( string1 + " " + string2)
}
concat("Hello","World")

//III - VAT
//Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.

function vatPrice(vatPercentage, price){
    console.log (price * (vatPercentage / 100) + price)
}

vatPrice(21,60)

//IV - surface of a circle
//Write an algorithm which receives the radius of a circle and calculate its surface.

function circleArea(radius, pi){
console.log( pi * radius * 2)
}
circleArea(7.6, 3.14)

//V - conversion of time to seconds
//Write an algorithm which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight.

function timeConv(h,m,s){
    console.log(h + m*60 +s *60 *60)
}
timeConv(2,20,6)

