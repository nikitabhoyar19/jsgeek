/*
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
    state (the lexical environment).
    In other words, a closure gives you access to an outer function's scope from an inner function.
    In Javascript, closures are created every time a function is created, at function creation time.
*/

// whatever data passed in javascript it passes reference.

function x() {
    var variable = 10;
    function y() {
        console.log(variable);
    }
    variable = 100;
    return y;
}
var z = x();
z();
// console.log(z);
// console.log(z());

function makeaddress(x) {
    return function(y) {
        return x + y;
    }
}
var add5 = makeaddress(5);
var add10 = makeaddress(10);

console.log(add5(2)); // 7
