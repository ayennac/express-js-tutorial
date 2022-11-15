//To get just these functions from the module,
//destructure

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')

console.log(first)
//Returns: Hello this is first text file


writeFileSync('./content/result.txt', first, {flag:'a'})
//Creates a file called result.txt in the content folder
//Adding the flag 'a' appends the 
