//how to make a class
class User {
    // runs once whenever the instance got created
    constructor(name, role) {
        this.name = name,
        this.role = role
    }

    //method - lives in the shared reference object aka Prototype
    whoami() {
        return `I am ${this.name}, working as a ${this.role}`    
    }
}

//let's create two instances

/*
const user1 = User("Alice", "HR");
              ^
TypeError: Class constructor User cannot be invoked without 'new'
*/


const user1 = new User("Alice", "HR");  
const user2 = new User("Bob", "Dev");

console.log(typeof user1);
console.log("user1 looks like this ");

console.log(user1);

console.log(user1.whoami());
console.log(user2.whoami());

console.log(user1.whoami === user2.whoami); //What do you think the answer will be? Think, think, think.

console.log(typeof user1.whoami);   //function So the previous answer is true; `both` is a function living inside the prototype.


//how does 'this' work?

class Profile {
    constructor(name) {
        this.name = name
    }
    greet() {
        return `Hello from ${this.name}`
    }
}

const alice = new Profile("alice")

console.log(alice.greet()); // works // returns Hello from alice

const greetFnForAliceFromProfile = alice.greet;    //kind of copying the fn

console.log(greetFnForAliceFromProfile());     //Will this work? Think, think. 

/* 
/Users/pritam/fullstack-codebase/01_fundamentals/js/classes-in-js/app.js:47
        return `Hello from ${this.name}`
                                  ^
TypeError: Cannot read properties of undefined (reading 'name')
*/

/*
̉So what does this say? “Cannot read properties of undefined.” Why does it say `undefined`? Because we assigned the `Alice.grid` function to a different variable, turning it into a function. According to the left‑of‑the‑dot rule, there is nothing on the left side of the dot, there is no dot at all.

The `this` keyword then has no parent object, so in the global context `this` becomes`undefined`.Accessing `undefined.name` yields nothing, which is why a type error occurs: `undefined` has no `name` property.
*/

//There are two fixes for this:
// 1. Use the `bind` method.
// 2. Use the class’s `add` function.


const greetFnForAlice = alice.greet.bind(alice);

console.log(greetFnForAlice());     //Will this work now? Think, think.
//This will work using the `bind` method. `bind` creates a new copy of the function with the keyword `this` bound to the argument permanently.


//arrow fns

class Profile_Arrow {
    constructor(name) {
        this.name = name
    }

    greet = () => {
        return `Hello from ${this.name}`
    }
}

const user = new Profile_Arrow("Bob");
console.log(user.greet());  //works normally


const greetFnFromBob = user.greet;

console.log(greetFnFromBob()); //runs   
//This runs because arrow functions use lexical scope. An arrow function has no own `this`; it looks up to the parent object and uses the surrounding `this`. In effect, `this` is treated as a variable.

