// 0 1 1 2 3 5
var fibo = (num) => {
    if (num < 1) {
        return 0;
    } else {
        return num - 1 + (num - 2);
    }
};
console.log(fibo(5));

let arr = [1, 2, 1, 2, 5, "hi", "haa"];
arr.sort();
console.log(arr);
var set = new Set(arr);
console.log(set);