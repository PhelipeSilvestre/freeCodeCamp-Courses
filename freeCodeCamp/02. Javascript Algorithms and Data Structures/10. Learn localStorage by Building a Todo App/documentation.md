# Documentation

### method .toggle()

In earlier projects, you learned how to add and remove classes from an element with el.classList.add() and el.classList.remove(). Another method to use with the classList property is the toggle method.

The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.

Example Code

        element.classList.toggle("class-to-toggle");


-----------------------------------------------------------------

### method showModal()

A modal is an element that prevents all interaction with elements outside it until the modal has been dismissed.

The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.

Example Code

        dialogElement.showModal();

If the user clicks the Cancel button, you want to cancel the process and close the modal so the user can continue editing. The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.

Example Code

        dialogElement.close();

-----------------------------------------------------------------

### findIndex() method array

The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing callback function. If no such element is found, the method returns -1. The callback should return a truthy value to indicate a matching element has been found, and a falsy value otherwise.

Example Code

        const numbers = [3, 1, 5, 6];
        const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);

        console.log(firstNumLargerThanThree); // prints index 2

-----------------------------------------------------------------

###  unshift() array method

unshift() is an array method that is used to add one or more elements to the beginning of an array.

Example Code

        const arr = [1, 2, 3];
        arr.unshift(0);

        // [0, 1, 2, 3]
        console.log(arr); 


-----------------------------------------------------------------

### splice() array method

splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element. Here's an example:

Example Code

        const fruits = ["mango", "date", "cherry", "banana", "apple"];

        // Remove date and cherry from the array starting at index 1
        const removedFruits = fruits.splice(1, 2);

        console.log(fruits); // [ 'mango', 'banana', 'apple' ]
        console.log(removedFruits); // [ 'date', 'cherry' ]

-----------------------------------------------------------------

### localStorage

localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.

For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().

Here's how you can save an item:

Example Code

        localStorage.setItem("key", value); // value could be string, number, or an


-----------------------------------------------------------------
