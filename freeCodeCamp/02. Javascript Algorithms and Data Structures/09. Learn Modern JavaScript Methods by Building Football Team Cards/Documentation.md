### object destructuring

The object destructuring syntax allows you to unpack values from arrays and objects:

Example Code

    const developerObj = {
      name: "Jessica Wilkins",
      isDeveloper: true
    };

    // Object destructuring
    const { name, isDeveloper } = developerObj;

---------------------------------------------------------
### default value in function parameters

Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used:

Example Code
const greeting = (name = "Anonymous") => {
  return "Hello " + name;
} 

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

---------------------------------------------------------
