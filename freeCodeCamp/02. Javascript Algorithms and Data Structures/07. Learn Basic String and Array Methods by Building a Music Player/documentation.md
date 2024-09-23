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
### Optional chaining (?.)

Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. For example:

Example Code

            const user = {
              name: "Quincy",
              address: {
                city: "San Francisco",
                state: "CA",
                country: "USA",
              },
            };

            // Accessing nested properties without optional chaining
            const state = user.address.state; // CA

            // Accessing a non-existent nested property with optional chaining
            const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error

---------------------------------------------------------------------------------
### Method: sort()

The sort() method converts elements of an array into strings and sorts them in place based on their values in the UTF-16 encoding.

Example Code

            const names = ["Tom", "Jessica", "Quincy", "Naomi"];
            names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]

To sort the songs in alphabetical order by title, you will need to pass in a compare callback function into your sort() method.

Here is an example of sorting a list of fruits by name.

Example Code

            const fruits = [
              { name: "Apples", price: 0.99 },
              { name: "Blueberries", price: 1.49 },
              { name: "Grapes", price: 2.99 },
            ];

            fruits.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }

              if (a.name > b.name) {
                return 1;
              }

              return 0;
            });

The sort() method accepts a compare callback function that defines the sort order.

In this example, the first condition (a.name < b.name) checks if the name of the first fruit is less than the name of the second fruit. If so, the first fruit is sorted before the second fruit.

Strings are compared lexicographically which means they are compared character by character. For example, "Apples" is less than "Bananas" because "A" comes before "B" in the alphabet.

The reason why this example is returning numbers is because the sort() method is expecting a number to be returned. If you return a negative number, the first item is sorted before the second item.

Example Code

            const fruits = [
              { name: "Apples", price: 0.99 },
              { name: "Blueberries", price: 1.49 },
              { name: "Grapes", price: 2.99 },
            ];

            fruits.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }

              if (a.name > b.name) {
                return 1;
              }

              return 0;
            });

The second condition in this example checks if a.name > b.name. If so, the function returns 1, which sorts the first fruit after the second fruit.

Example Code

            const fruits = [
              { name: "Apples", price: 0.99 },
              { name: "Blueberries", price: 1.49 },
              { name: "Grapes", price: 2.99 },
            ];

            fruits.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }

              if (a.name > b.name) {
                return 1;
              }

              return 0;
            });

In the example, if a.name is equal to b.name, then the function returns 0. This means that nothing changes and the order of a and b remains the same.

Example Code

            const fruits = [
              { name: "Apples", price: 0.99 },
              { name: "Blueberries", price: 1.49 },
              { name: "Grapes", price: 2.99 },
            ];

            fruits.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }

              if (a.name > b.name) {
                return 1;
              }

              return 0;
            });
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
### Property: classList

The classList property in JavaScript is used to manipulate the classes of an HTML element. It returns a collection of class tokens (i.e., class names) for the element, allowing you to easily add, remove, toggle, or check for classes.

Here are some common methods used with classList:

1 - element.classList.add('class-name'): Adds one or more classes to the element.

            element.classList.add('new-class');

2 - element.classList.remove('class-name'): Removes one or more classes from the element.

            element.classList.remove('old-class');

3 - element.classList.toggle('class-name'): Toggles a class on the element. If the class is present, it removes it; if it's not present, it adds it.

            element.classList.toggle('active');

4 - element.classList.contains('class-name'): Checks if the element has a specific class, returning true or false.

            if (element.classList.contains('active')) {
                // Do something
            }

5- element.classList.replace('old-class', 'new-class'): Replaces an existing class with a new one.

            element.classList.replace('old-class', 'new-class');

These methods make it easier to work with CSS classes in JavaScript, enhancing the interactivity and styling of your web pages.


---------------------------------------------------------------------------------
### Array Method: indexOf()

To get the index, you can use the indexOf() method. The indexOf() array method returns the first index at which a given element can be found in the array, or -1 if the element is not present.

Example Code

            const animals = ["dog", "cat", "horse"];
            animals.indexOf("cat") // 1


---------------------------------------------------------------------------------

### Method forEach()

The forEach method is used to loop through an array and perform a function on each element of the array. For example, suppose you have an array of numbers and you want to log each number to the console.

Example Code

            const numbers = [1, 2, 3, 4, 5];

            // Using forEach to iterate through the array            
            numbers.forEach((number) => {
              console.log(number); // 1, 2, 3, 4, 5
            });

---------------------------------------------------------------------------------
















