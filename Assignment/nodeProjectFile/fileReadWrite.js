const fs = require ('fs')
const path = require ('path')
const content = 'Hello, World! This is the Brian\'s file'

const inputFilePath = path.join(__dirname, 'files', 'input.txt');
const outputFilePath = path.join(__dirname, 'files', 'output.txt');

fs.readFile(inputFilePath, 'utf8', (err, data) =>{
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Contents of the input file:\n ${data}`);
})

fs.writeFile(outputFilePath, content, 'utf8', (err)=>{
    if(err) {
        console.error(err);
        return;
    }

    console.log('Data has been written to the output file.')

})