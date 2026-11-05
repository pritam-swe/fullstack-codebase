function setTimeoutPromisified(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done from inside promise")  //this is still a callback tho
        }, duration);

        // reject(null)    //it will not have any failing condn
    })
}
//calling the promise fn

setTimeoutPromisified(1000)
    .then((data) => console.log(data))
    .catch(() => {})    //null anyway