let filterEvenNumbers = (numbers) => {
    const evenNumbers = numbers.filter((num) =>{
       return num%2 === 0
    })
    return evenNumbers
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(filterEvenNumbers(numbersArray))