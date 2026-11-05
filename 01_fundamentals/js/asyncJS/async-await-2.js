// async `initialize` creation of a new promise. 
// `await` replaces a promise’s `then` method, `await` blocks function execution
// until promise resolves, 
//returning the unpacked data directly.

async function fetchUserData(id) {
    try {
        if (id <=0) {
            throw new Error("invalid id") //reject condn promise
        }
        const user = {id, name: "alice"};
        return user;
    } catch (err) {
        console.log(err);
    }
}

console.log(fetchUserData(1))


const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London';

async function getWeather() {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data.current.temp_f);
}

getWeather()