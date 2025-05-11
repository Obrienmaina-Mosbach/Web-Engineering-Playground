let url = require ('url');
let address = 'https://www.sap.com/germany/index.html'
let splitter = url.parse(address, true);

console.log(splitter.host)
console.log(splitter.pathname)
console.log(splitter.search)

let dataPoint = splitter.query
console.log(dataPoint.month)
