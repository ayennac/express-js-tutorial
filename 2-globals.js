
//Globals - you will always have access to the variables 

//__dirname - path to current directory
//__filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
    console.log('hello world')
}, 1000)