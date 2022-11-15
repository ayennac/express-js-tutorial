//Modules - Encapsulated Code (only sharing what we want to share)
//Node uses CommonJS, every file in Node is a module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

//this will perform the function in 7 mind grenade
//because the require module wraps the function in an object
// and it executes it
require('./7-mind-grenade')

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