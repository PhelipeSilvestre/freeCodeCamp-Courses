# Documentation


### parseIt() function

A good way to check and normalize numbers in JavaScript is to use the built-in parseInt() function, which converts a string into an integer or whole number. parseInt() takes at least one argument, a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number. 

Example Code

    parseInt(2.2); // 2
    parseInt("2e+3"); // 2
    parseInt("e") // NaN


-----------------------------------------------------------------

### isNaN() function

You can use the isNaN() function. This function takes in a string or number as an argument, and returns true if it evaluates to NaN. For example:

Example Code

    isNaN("test"); // true
    isNaN(2); // false
    isNaN("3.5"); // false


-----------------------------------------------------------------

### call stack

In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner. If you imagine a stack of books, the last book you add to the stack is the first book you can take off the stack. Or an array where you can only .push() and .pop() elements.

The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns, it is removed from the top / end of the stack.


-----------------------------------------------------------------

### Recursive function

A recursive function is a function that calls itself over and over. But you have to be careful because you can easily create an infinite loop. That's where the base case comes in. The base case is when the function stops calling itself, and it is a good idea to write it first.

Recursive functions also have a recursive case, which is where the function calls itself.

When writing the recursive case, you need to remember two things:

What is the base case?
What is the least amount of work you need to do to get closer to the base case?


exemple:

    const countdown = (number) => {
        console.log(number);
        
        if (number === 0) {
            return;
        } else {
            countdown(number - 1);
        }
    };

    countdown(3);

-----------------------------------------------------------------

### setTimeOut function

The setTimeout function takes two arguments: a callback function and a number representing the time in milliseconds to wait before executing the callback function.

For example, if you wanted to log "Hello, world!" to the console after 3 seconds, you would write:

Example Code

    setTimeout(() => {
        console.log("Hello, world!");
    }, 3000);

-----------------------------------------------------------------

