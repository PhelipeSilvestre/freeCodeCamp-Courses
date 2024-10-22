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
