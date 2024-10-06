### Date() Object

In JavaScript, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.

For example, you can use the Date() constructor with the new operator to create a new Date object that returns a string with the current date and time:

Example Code

        const currentDate = new Date();
        console.log(currentDate);

// Output:
// Mon Aug 23 2021 15:31:00 GMT-0400 (Eastern Daylight )


----------------------------------------------------------
### method .getDate()

The Date object has a number of methods that allow you to get the date and time in different formats.

One of those is the .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date. For example:

Example Code

        const date = new Date();
        const dayOfTheMonth = date.getDate();
        console.log(dayOfTheMonth); // 20

----------------------------------------------------------
### method .getMonth()

The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.

Example Code

        const date = new Date();
        const month = date.getMonth() + 1;

----------------------------------------------------------
### method .getFullYear()

The .getFullYear() method returns a number which represents the year for the provided date.

        const date = new Date();
        const year = date.getFullYear();

----------------------------------------------------------
### method .getHours()

The .getHours() method returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.

        const date = new Date();
        const hours = date.getHours();

----------------------------------------------------------
### method .getMinutes()

The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.

        const date = new Date();
        const minutes = date.getMinutes();

----------------------------------------------------------
### "change" event

In JavaScript, the change event is used to detect when the value of an HTML element has changed:

Example Code

        element.addEventListener("change", () => {
    
});

----------------------------------------------------------
### switch

A switch statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic.

For example, here's how to compare the expression dayOfWeek against possible values:

Example Code

        switch (dayOfWeek) {
          case 1:
            console.log("It's Monday!");
            break;
          case 2:
            console.log("It's Tuesday!");
            break;
          // ...cases for other workdays
          default:
            console.log("It's the weekend!");
        }

----------------------------------------------------------
### split()

The split() method is used to divide a string into substrings based on a specified separator. It then returns these substrings as elements of an array.

Here is an example of taking the words "Hello World" and returning an array of one element:

Example Code

        const greeting = "Hello World";
        greeting.split(); // ["Hello World"]

Here other form:

        const greeting = "Hello World".split();
        console.log(greeting);

----------------------------------------------------------
