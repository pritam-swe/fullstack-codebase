const fs = require("fs");


function readFilePromise(filePath, format='utf-8') {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, format, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                const text = data;
                resolve(text)
            }
        })
    })
}


function writeFilePromise(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath ,content, (err, data) => {
            if(err) {reject(err)}
            else {resolve("Successfully written a new file")}
        });
        

        //nothing to reject
    })
}

// let data = "hello world from async js and promises"
// writeFilePromise('./b.txt', data)
//     .then((d) => console.log(d))
//     .catch(() => { })



//calling the fn

readFilePromise('./b.txt')
    .then((data) => {
        return writeFilePromise('./c.txt', data + " something extra");
    })
    .then((d) => console.log(d))
    .catch((err) => {
        console.log("Error Occurred: ", err);
    })

