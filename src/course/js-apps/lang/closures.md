---
title: Closures
author: Chaise Matev Joshua Leisure
category: language
references: 
"Closures": https://www.w3schools.com/js/js_function_closures.asp
"Closure Examples": https://dev.to/soumyadey/understanding-lexical-scope-closures-in-javascript-229b
---

## What is a closure?
- Like previously discussed, JS variables can either be local or global scoped.
- For review, a local variable can only be used within the function/code block where it is defined. Global variables though, can be used and modified by scripts throughout the program.
- Now, scopes can be nested as well, meaning, the variables of the outer scope can be accessed within the inner scope through closures. 
  
```javascript
function food() {
  // outer scope
  let favoriteFood = "Tacos";
  function drink() {
    // inner scope
    console.log(favoriteFood); // => Tacos
  }
  drink();
}
food();
```
- As the example shows, we see the inner scope accessing the outser scopes value of "tacos". This is a closure.
- Therefore, a closure is a function that has access to an outer function's scope.
  The 'outer' scope of a function which is defined inside a closure is called the lexical scope.
- It is also a function that exists outside of the scope it was defined in, that is holding access to a variable from that scope.

## Common use case for closures
1. Giving a function access to data without exposing that data to the rest of your code, creating partially applied functions.
- Partially applied functions' set some values of a function's arguements to a certain value, for example, if we have function for your favorite food that has two arguements, a and b, we might fix "a" to always display "I love" whatever "b" is.
  - So it gives access to "a" but doesn't expose the rest of the data.
2. Increasing code reusability by providing custom function generators.

## Examples
```javascript
function outer() {
  let x = 3
  return function inner(y) {
    return x*y
  }
}

let multiplyByThree = outer();

console.log(multiplyByThree(2));
//displays 6
```
- `Let` multiplyByThree = outer() will be executed as `return` x*y.

```javascript
function number() {
  let a = 4;

  function numberExample() {
    console.log(a);
  }

  return numberExample;
}

let id = number();
id();
```
- numberExample() is executed, but in this case, it's executed outside of its declared lexical scope.
- By virtue of where it was declared, numberExample() has a lexical scope closure over that inner scope of foo(), which keeps that scope alive for numberExample() to reference at a later time.
- numberExample() still has a reference to that scope, therefore, it's a closure.
```javascript
function wait(message) {
  setTimeout(function timer() {
    alert(message);
  }, 1000);
}

wait("This is a closure example!");
```
- In this example, we take an inner function (timer) and pass it to setTimeout(). Since timer() has a closure over the scope of wait(), it uses the variable message still.
```javascript
const balance = (function() {
  let privateBalance = 0;

  return {
    increment: function(value) {
      privateBalance += value;
      return privateBalance;
    },
    decrement: function(value) {
      privateBalance -= value;
      return privateBalance;
    },
    show: function() {
      return privateBalance;
    }
  }
})()

console.log(balance.show()); // 0
console.log(balance.increment(500)); // 500
console.log(balance.decrement(200)); // 300
console.log(balance.show()); // 300 *notice it isn't 0*
```