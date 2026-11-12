console.log("Hello, World!");

let firstName = "Francisco";
let lastName = "Perez";
let age = 31;
let profession = "Product Manager";
let isApproved = true;

let interestRate = 0.05
interestRate = 1;
console.log(interestRate);

console.log(`My name is ${firstName} ${lastName}, I am ${age} years old, and I work as a ${profession}.`);

let person = {
    firstName: "Francisco",
    lastName: "Perez",
    age: 31,
    profession: "Product Manager",
    isApproved: true
};

let fruits = ["Apple", "Banana", "Orange"];
fruits[3] = "Grapes";

function sum(a, b) {
    return a + b;
}

let v = 10;
let a = 5;
let b = 10;
let result = sum(a, b);
console.log(`The sum of ${a} and ${b} is ${result}.`);

// window.alert("This is an alert message!"); //

let username;

username = window.prompt("Please enter your username:");
console.log(`The username entered is: ${username}`);

document.getElementById("submitButton").onclick = function() {
    username = document.getElementById("usernameInput").value;
    document.getElementById("myH2").innerText = `Welcome, ${username}!`;
}

document.getElementById("myButton").onclick = function() {
    window.alert("Olá Turma!");
}