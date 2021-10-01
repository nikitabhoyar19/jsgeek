// obj pass by reference hota hai

const obj = {
    1: "one",
    2: "two",
    age: 1,
    name: "nikita",
    "last-name": "bhoyar",
    // fullname: ["nikita", "bhoyar"],
    familydetails: {
        mother_name: "Sunita",
        father_name: "Moreshwar"
    }
 }
    
console.log(obj);  // { '1': 'one', '2': 'two', .... }
console.log(obj["1"]); // 1
console.log(obj.age);
console.log(obj.name);
// console.log(obj.last-name); // undefined
console.log(obj["last-name"]); // bhoyar (for ignoring dash like things)

console.log(obj["familydetails"]["mother_name"]);

// iteraion
for (let key in obj) {
    console.log(key); // it gives u all keys
}

for (let keyValue in obj) { 
    console.log(obj[keyValue]); // it gives u values of that keys
}

console.log("iteration");


// study this
// for (let key of obj) {
//     if(typeof(key) == "object") {
//         for (let newKey in key) {
//             console.log(obj.key);
//         }
//     }
// }
