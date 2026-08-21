
//reference type (non)
const arr = [0, 1, 'a', -2];
let obj = {
    a: 2,
    "b": 4
}

let f = function () {
    console.log("Oh F")
    return 4;
}

let icon = Symbol('$')

console.table([typeof arr, typeof obj, typeof f, typeof f(), typeof icon, icon])

//all primitive type stored in stack and non primitive type get stored in heap