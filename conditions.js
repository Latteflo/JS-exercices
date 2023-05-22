//I - cinema tariffs
//In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given
//a boolean indicating if the person can have a reduced tariff prints the price to pay.
function reducedCinemaTicket(isReduced) {
  if(isReduced){
    return "pay 8 euro"
  }else{
    return"pay 10 euro"
  }
}

console.log(reducedCinemaTicket(false))

//II - maximum
//Write an algorithm which given 3 numbers finds the maximum.

const maxNumber = (n1,n2,n3) => {return Math.max(n1,n2,n3)}

console.log(maxNumber(5,15,30))

//III - identical dice
//Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.



//IV - day’s number
//Write an algorithm which given the number of a day returns its name.

//V - print shop
//A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there.
//Write an algorithm which given a number of copies and calculates the price
