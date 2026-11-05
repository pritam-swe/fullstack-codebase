//creator async fn

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        if (userId <= 0 ) {
            reject(new Error("Invalid Id")) //failure
        } else {
            const user = { userId, name: "Alice" }; 
            resolve(user)   //success
        }
    })
}


//how do we call an async fn with promise
console.log(fetchUserData(110)); //returns a promise object

fetchUserData(101)
    .then((user) => {
        console.log("user found ", user.name);
    })
    .catch(err => {
        console.log("Error: ", err.message);
    })
fetchUserData(0)
    .then((user) => {
        console.log("user found ", user.name);
    })
    .catch(err => {
        console.log("Error: ", err.message);
    })