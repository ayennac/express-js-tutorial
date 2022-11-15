const { readFile,writeFile } = require('fs')


//these are call back functions
//This is useful because it can run everything while it's getting data from somewhere else, maybe reading a file. 
//If we do it synchronously and we have something that takes a while to load, 
//then everything else will stop and wait for it to get the data back. 


readFile('./content/first.txt', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    writeFile('./content/async.txt', result,(err, result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log(err)
    })
})