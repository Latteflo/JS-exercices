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

let firstDice= Math.floor(Math.random() * 6) + 1
let secondDice= Math.floor(Math.random() * 6) + 1
let thirdDice= Math.floor(Math.random() * 6) + 1

function checkValuesOfDices(firstDice, secondDice, thirdDice){
    if ( firstDice === secondDice && secondDice === thirdDice){
        return "All Three Identical"
    }else if( firstDice === secondDice || secondDice === thirdDice || thirdDice === firstDice){
        return "Two identical"
    }else{
        return "None Identical"
    }
}

console.log(checkValuesOfDices())

//IV - day’s number
//Write an algorithm which given the number of a day returns its name.

function nameOfDay (daysOfWeek){
    let days  = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"]

    if (daysOfWeek >= 1 && daysOfWeek <= 7){
        return days[daysOfWeek-1]
    }else{
        return "Invalid number. There is no such day in a week"
    }

}

console.log(nameOfDay(3))


//V - print shop
//A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there.
//Write an algorithm which given a number of copies and calculates the price

