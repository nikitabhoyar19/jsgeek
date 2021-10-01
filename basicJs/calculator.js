function updateScreen(value) {
    let tempScreen = document.getElementById("result").innerHTML += value;
    // let tempScreen = document.getElementById("result").innerHTML = let tempScreen = document.getElementById("result").innerHTML + value;
    console.log(tempScreen);
}

function solve() {
    let exp= document.getElementById("result").innerHTML;
    // console.log(exp);
    console.log(document.getElementById("result").innerHTML = eval(exp));
}

function reset() {
    document.getElementById("result").innerHTML = "";
}

function erase() {
    let exp= document.getElementById("result").innerHTML;
    let result = exp.substring(0, exp.length - 1);
    document.getElementById("result").innerHTML = result;
}

