const { log } = require("console");
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

log("outside at top")
async function copyAndAppend() {
    try{
        const data = await readFilePromise('./c.txt');
        const status = await writeFilePromise('./d.txt', data + " Writing more using async await")
        log(status)
    } catch(err) {
        log(err);
    }
    log("inside async")
}

log("outside at bottom")

copyAndAppend()