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





