---------------------------------------------------------------------------------
### Spred Operator

The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one. In the example below, both arr1 and arr2 have been spread into combinedArr:

Example Code

            const arr1 = [1, 2, 3];
            const arr2 = [4, 5, 6];

            const combinedArr = [...arr1, ...arr2];
            console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

---------------------------------------------------------------------------------

### Arrow function

An arrow function is an anonymous function expression and a shorter way to write functions. Anonymous means that the function does not have a name. Arrow functions are always anonymous.

Here is the basic syntax:

Example Code

            () => {}

To create a named arrow function, you can assign the function to a variable:

Example Code

            const exampleFunction = () => {
              // code goes here
            }

To call a named arrow function expression, you can reference the function by its name.

Example Code

            exampleArrowFunction();

Just like regular functions, arrow functions can accept multiple parameters.

Here is an example of a named arrow function with one parameter:

Example Code

            const greet = (name) => {
              console.log(`Hello, ${name}!`);
            };
            
If the function only has one parameter, you can omit the parentheses around the parameter list like this:

Example Code

            const greet = name => {
              console.log(`Hello, ${name}!`);
            };


Just like regular functions, arrow functions can return values.

Here is an example of an arrow function returning the result of multiplying two numbers:

Example Code

            const multiplyTwoNumbers = (num1, num2) => {
              return num1 * num2;
            }

            // Output: 12
            console.log(multiplyTwoNumbers(3, 4)); 


If the arrow function is returning a simple expression, you can omit the return keyword and the curly braces {}. This is called an implicit return.

Example Code

            const multiplyTwoNumbers = (num1, num2) => num1 * num2;
            
If your arrow function has multiple lines of code in the function body, then you need to use the return keyword and the curly braces {}.

Example Code

            const getTax = (price) => {
              const taxRate = 0.08;
              const tax = price * taxRate;
              return tax;
            };

---------------------------------------------------------------------------------
### Method: map()

The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array. For example:

Example Code
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6]

---------------------------------------------------------------------------------
### Method: join()

The join() method is used to concatenate all the elements of an array into a single string. It takes an optional parameter called a separator which is used to separate each element of the array. For example:

Example Code

            const exampleArr = ["This", "is", "a", "sentence"];
            const sentence = exampleArr.join(" "); // Separator takes a space character
            console.log(sentence); // Output: "This is a sentence"

---------------------------------------------------------------------------------
### Method: find() 

The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function. If no element satisfies the condition, the method returns undefined.

In the example below, the find() method is used to find the first number greater than 25:

Example Code

            const numbers = [10, 20, 30, 40, 50];

            // Find the first number greater than 25
            const foundNumber = numbers.find((number) => number > 25);
            console.log(foundNumber); // Output: 30

---------------------------------------------------------------------------------

