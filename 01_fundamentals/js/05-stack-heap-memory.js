//primitive -> stack (we get a copy)
//non-primitive -> heap (we get original ref)

let x = 4
let y = x;

y = 5
console.log(`x = ${x}, y = ${y}`)   //x doesn't change

let user = {
    id : 123,
    email: "abc@gmail.com"
}

let user2 = user;
user2.email = "xyz@google.com"

console.table([user.email, user2.email]);   //user get changed as well
