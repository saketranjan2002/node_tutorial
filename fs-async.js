const { readFile, writeFile } = require('fs')
console.log("start");
readFile("./content/sub-folder/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result
    readFile("./content/sub-folder/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile("./content/sub-folder/file-async.txt", `here is the result :${first} , ${second} `, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log("done with this task");
        })



    })
})
console.log("starting the new task");


//Alteratives are promises,async,await
