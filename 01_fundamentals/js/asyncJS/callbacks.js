// Callbacks have two sides: the creator side and the user/consumer side. The creator doesn't receive the data; he only passes the data to the payload, whereas the consumer will receive and probably print the data.

//creating an async fn
function fetchUserData(userId, callback) {
    //Simulating an async operation: a slow task
    setTimeout(() => {
        if (userId <= 0) {callback(new Error(`Does Not Exist`), null)}
        else {
            const user = {userId, name: "Alice"};
            // callback(null, user)  //passed the data
            // callback(null, user)  //passed the data
        }
    }, 1000)
}


//calling the async fn as a consumer
fetchUserData(1, (err, data) => {
    err ? console.log(err) : console.log(data);
})



