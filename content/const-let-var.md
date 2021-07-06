# Variable Declarations

## What are variable declarations?

- A variable declaration gives a name and a data type for the variable.
- these declarations may also have a specific value placed inside of it.
- A variable can not be used in a program unless it has aleady been declared.

## Types of Variables in Javascript are:

- "let"
- "const"
- "var"

## Var

- It was a variable declaration before ES6 and is now mainly unused however you still may see older repositories using it. So it is important to understand what it is.
- Scope essentially means where variables can be used after declaring them.
- var can either be function/locally scoped or globally.
- Var declaration is global when it is declared outside a function.
- When var is declared inside a function it is locally scoped for use only in that function.

### Here is an example of var:

    ```javascript
        var hello = "hello"
        function helloFunction(){
            var hi = "hello"
            console.log(hi, hello); //this can be done because var hello is global and is declared outside the function
        }
        console.log(hi,hello);
            /*
            * error: hi is not defined
            * the reason for this is because hi is only
            * locally defined in the helloFunction
            */
    ```

### var can be re-declared and updated

    ```javascript
        var hi = "hi"
        var hi = "hello hi"
        hi = "say hello"

    ```

### The problem with var

- At this point you have to be thinking what's the downside of var? I'll show you in the example below!

  ```javascript
  var hi = "hi";
  var timesIveSaidHello = 5;
  if (timesIveSaidHello > 3) {
    var hi = "I'm saying hello now";
  }
  console.log(hi); //"im saying hello now"
  ```

- The problem here is that var "timesIveSaidHello" is true because its greater than 3
- That means hi is redefined it becomes a problem when you dont realize that var hi has already been defined before.
- Especially if you have used the var "hi" in other parts of your code you will maybe get surprise output.
- This is why let, and const are necessary

## Let

- It is now the go to variable declaration, it improves on var in many way.
- One of those ways is by solving the problem with var we discussed above.
- Let is block scoped, so if let is defined in a block or within a set of curly braces it is only available within that block unlike var.
- Below is an example:

```javascript
let myItem = "banana";
let numberOfItems = 2;
if (numberOfItems > 1) {
  let myItem = "I have more than one item";
  console.log(myItem);
  // Output: "I have more than one item"
}
console.log(myItem);
//Output: myItem is not defined
```

- Here you can see that myItem is outside of its block and therefore is undefined
- This shows that let is block scoped.

### let can be updated

- Just like var, let can be updated within its scope but it can not be declared again within it's scope

  ```javascript
  // this will work
  let banana = "banana";
  banana = "new banana";
  // this will not work
  let banana = "banana";
  let banana = "new banana";
  ```

- However if the same let variable is declared in different scopes then there will be no errors.

```javascript
let banana = "banana";
if (true) {
  let banana = "new banana";
  console.log(banana); // output: new banana
}
console.log(banana); // output: banana
```

- The reason there is no error here is because both instances are treated differently because of the scope they are in

- This solve the issues with var because you can only declare the same variable within one scope once and only once.

## Const

- Variables that are declared with const maintain constant values.
- const just like let can only be accessed within the block scope they are declared in.
- unlike let const can not be redeclared or updated eeven within the same scope.
- this means that the value of const never changes within its scope.
- if we declare a variable using const we can not do either one of these examples below.

```javascript
const hello = "hello";
hello = "now sau hello";
/*
 * cannot assign new value to a constant variable
 */
const hello = "say Hi";
const hello = "say Hello instead";
/*
 * Error variable hello has already been declared
 */
```

- this means that any and every const declaration must have an initialized value at the time of declaration

- However when it comes to objects const behaves differently.
- if we declare a const object we can change the object itself but we can update the properties inside the object.

## Hoisting of let, const, and var

- Hoisting is a javascript mechanism where variables and functions are all moved to the top of there scope before code execution
- just the same as let, const declarations are hoisted to the top but are not initialized
- unlike let and const var is initialized as undefined, so if you try to use a let variable before declaration you'll get a reference error
- an example of hoisting would be this:

  ```javascript
  console.log(greeter);
  var greeter = "say hello";
  /*
   * javascript interprets the above code to this
   */
  var greeter;
  console.log(greeter); // greeter is undefined
  greeter = "say hello";
  ```

## In summary

- Understanding variable declarations is extrmemely important in any type of programming.
- Understanding how and when to use these variable within the scope of your project will make designing an application much easier
- Also with utilizing the variable declarations of let and const they allow you to keep your code "dry".
- This means that you arent repaeting yourself with the same variables within your projects and can keep code clean and less confusing overall.
- The most important thing to remmeber is to keep your code simple, by using const over let you can make sure that a single variable represents a single value of data, which you can accomplish with using const over let.
