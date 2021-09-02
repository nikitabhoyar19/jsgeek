// function hello() {
//     const fname = "Nikita";
//     const lname =" Bhoyar";
//     console.log("Hello " + fname);
//     console.log(`hello ${fname} ${lname}`);
// }

const marks = 90;

function hello(marks) {
    const fname = "Nikita";
    const lname = "Bhoyar";

    if (marks > 50) return "pass";
    else return "fail";
}
console.log(`Student is ${hello(marks)}`);

var nik = 9;
console.log(typeof nik);