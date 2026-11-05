// async `initialize` creation of a new promise. 
// `await` replaces a promise’s `then` method, `await` blocks function execution
// until promise resolves, 
//returning the unpacked data directly.

async function fetchUserData(id) {
    if (id <=0) {
        throw new Error("invalid id") //reject condn promise
    }
    const user = {id, name: "alice"};
    return user;
}

console.log(fetchUserData(1))   //returns a promise


// const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London';

// async function getWeather() {
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     console.log(data.current.temp_f);
// }
// getWeather()




//last concept - promise.all


//creator promise


async function fetchUser(id) {
    if (id <=0) {
        throw new Error("Error")
    }
    return {id, name: 'alice'}
}

async function fetchProducts(item) {
    if (typeof item !== 'string') {
        throw new Error("Not valid item")
    }
    return {item, count: 5}
}

async function loadDashboard(id, item) {
    try{
        const [user, products] = await Promise.all([    //concurrent execution
            fetchUser(id),
            fetchProducts(item)    
        ])
        console.log( user.name, "is buying", products.count, products.item,"s");
    } catch(err) {
        console.log(err);
    }
}

loadDashboard(1, 'iphone')