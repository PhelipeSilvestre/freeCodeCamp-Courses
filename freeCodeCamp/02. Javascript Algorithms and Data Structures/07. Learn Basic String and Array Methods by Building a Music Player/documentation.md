---------------------------------------------------------------------------------
### Step 9

The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one. In the example below, both arr1 and arr2 have been spread into combinedArr:

Example Code

            const arr1 = [1, 2, 3];
            const arr2 = [4, 5, 6];

            const combinedArr = [...arr1, ...arr2];
            console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

---------------------------------------------------------------------------------
### Step 36

The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function. If no element satisfies the condition, the method returns undefined.

In the example below, the find() method is used to find the first number greater than 25:

Example Code

            const numbers = [10, 20, 30, 40, 50];

            // Find the first number greater than 25
            const foundNumber = numbers.find((number) => number > 25);
            console.log(foundNumber); // Output: 30

---------------------------------------------------------------------------------

