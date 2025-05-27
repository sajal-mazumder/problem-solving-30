

// 1. Writing a program to print numbers from 1 to 10
// for (let number = 1; number <= 10; number++) {
//     console.log(number);
// }

 function add(a, b) {
            return a + b;
        }

        function showSum() {
            // Get values from input fields
            const n1 = parseFloat(document.getElementById('num1').value);
            const n2 = parseFloat(document.getElementById('num2').value);

            // Calculate the sum
            const sum = add(n1, n2);

            // Show result in the DOM
            document.getElementById('result').textContent = "The sum is: " + sum;
        }

// // 2. Writing a function that returns the sum of two numbers.

// function add(a, b) {
//     return a + b
// }

// let sum = add(22, 21)
// console.log(sum);

     const outputDiv = document.getElementById("output");

        for (let number = 1; number <= 10; number++) {
            // Create a paragraph element for each number
            const p = document.createElement("p");
            p.textContent = number;

            // Append it to the output div
            outputDiv.appendChild(p);
        }


  