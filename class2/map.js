// map(): when we want do something with whole array there we use map 


// function to add grace marks to every student
let passing_marks = 33
let marks = [23,24,22,12,18]

let num2 = 8

function addThirty(num) {
  return num + 30
}

console.log("Marks with all got grace marks "+ marks.map(addThirty));
// Marks with all got grace marks 53,54,52,42,48


function marksToPass(num) {
  return passing_marks - num
}
console.log("Marks needed to pass "+ marks.map(marksToPass));
// Marks needed to pass 10,9,11,21,15



// reduce(): when we want to store collection of something
function totalSum(total, num) {
  return total + num^2
}

console.log(marks.reduce(totalSum))  // 99