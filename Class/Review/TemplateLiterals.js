const firstName = "Niki"
const age = 19;

let createBirthdayGreeting = (a, b) => {
    const numbers = {
        1 : "st",
        2 : "nd",
        3 : "rd"
    }
        if (b in numbers){
            console.log(`Happy ${b}${numbers[b]} Birtthday, ${a}! Wishing you a fantastic day filled with joy and laughter.`)}
        else{
            console.log(`Happy ${b}th Birtthday, ${a}! Wishing you a fantastic day filled with joy and laughter.`)
    }
    
}

createBirthdayGreeting(firstName, age)


const recipient = 'John'
const product = 'Smartphone'
const price = 499.99

let createEmailTemplate = (c, d, e) => {
    console.log(`Hi ${c}, we have a special offer for you! Get the new ${d} for just $${d}. Limited time offer!`)
}

createEmailTemplate(recipient, product, price)