// Question 1

console.log("Even numbers from 1 to 100:");

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// Question 2

function calculate(num1, num2, operation) {

    switch (operation) {
        case "add":
            return num1 + num2;

        case "subtract":
            return num1 - num2;

        case "multiply":
            return num1 * num2;

        case "divide":
            return num1 / num2;

        default:
            return "Invalid operation";
    }
}

console.log(calculate(10, 5, "add"));


// Question 3

function findTax(salary) {

    switch (true) {
        case salary > 0 && salary <= 500000:
            return salary * 0;

        case salary > 500000 && salary <= 1000000:
            return salary * 0.10;

        case salary > 1000000 && salary <= 1500000:
            return salary * 0.20;

        case salary > 1500000:
            return salary * 0.30;

        default:
            return "Invalid salary";
    }
}

console.log("Tax amount:", findTax(800000));


// Question 4

function sumOfProducts(n1, n2) {

    let sum = 0;

    while (n1 > 0 || n2 > 0) {

        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum = sum + digit1 * digit2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

console.log("Sum of products:", sumOfProducts(6, 34));