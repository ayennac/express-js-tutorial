//Different ways to export to different modules in Node

//Set up a property called items in the module object
module.exports.items = ['item1', 'item2']

const person = {
    name:'bob',
}

//Set up another property called sinle person
module.exports.singlePerson = person;