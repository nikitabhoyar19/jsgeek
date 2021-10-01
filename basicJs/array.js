// array vgere baki sab pass by value rehte

let arr1=[4,5,6];
let arr2=[7,8,9];
let arr3=[1,2,3];

// concat
let arr4=arr1.concat(arr2,arr3);
console.log(arr4);

let emptyArray = [];
emptyArray.length=5;
console.log(emptyArray);

console.log(arr1); // [4, 5, 6]

// convert into string
let stringArray= arr1.toString();
console.log(stringArray);  // 4, 5, 6


// split method: wen we want to differentiate the items
// this is te function of string
let useSplit1= stringArray.split(",");
console.log(useSplit1);  // [ '4', '5', '6' ]

let useSplit2= "How are You";
console.log(useSplit2.split(" "));

// isArray function of array which is boolean
console.log(Array.isArray(useSplit2)); // false
console.log(Array.isArray(arr1)); // true
