//Modules - Encapsulated Code (only sharing what we want to share)
//Node uses CommonJS, every file in Node is a module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

console.log(data)
// console.log(names)
// RETURNS { john: 'john', peter: 'peter' }


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


//These functions return this:
// Hello there susan
// Hello there john
// Hello there peter