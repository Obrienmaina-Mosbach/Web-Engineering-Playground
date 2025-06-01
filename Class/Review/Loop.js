//Loops

let sumOfSquareNumbers = (a) => {
    let total = 0;
    for (let i of a){
        let squareNumber = i * i ;
        total += squareNumber;        
    }
    return total;
}

const numbers = [7, 9, 6, 5, 3]
console.log(sumOfSquareNumbers(numbers))