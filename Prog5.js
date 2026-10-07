// i. Function Declaration
function add(a, b) {
    return a + b;
}

// ii. Function Expression (Function Definition)
const multiply = function(a, b) {
    return a * b;
};

// iii. Arrow Function
const subtract = (a, b) => a - b;

// Function to display the results
function showResults() {
    let sum = add(10, 5);
    let product = multiply(10, 5);
    let difference = subtract(10, 5);

    document.getElementById("output").innerHTML =
        "Function Declaration (Addition): " + sum + "<br>" +
        "Function Expression (Multiplication): " + product + "<br>" +
        "Arrow Function (Subtraction): " + difference;
}