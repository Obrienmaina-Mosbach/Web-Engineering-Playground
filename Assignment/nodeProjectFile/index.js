let num = 2
let value = 3
let total = num + value;

console.log(`the total of ${num} and ${value} is ${total}`)

const firstName = 'John'
const secondName = 'Spirit'

console.log(`Hello ${firstName} ${secondName}!`);


const os = require('os')
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename).base)


