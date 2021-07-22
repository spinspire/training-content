---
title: (WIP) Closures
author: Chaise Matev
category: language
weight: 10
---

## What is a closure?
- A function that has access to an outer function's scope
- A function that exists outside of the scope it was defined in, that is holding access to a variable from that scope

### Common use case for closures
1. Giving a function access to data without exposing that data to the rest of your code, creating partially applied functions.
2. Increasing code reusability by providing custom function generators.

### Examples
```javascript
function outer() {
  let x = 3
  return function inner(y) {
    return x*y
  }
}

let multiplyByThree = outer();

console.log(multiplyByThree(2));
```
<br>

```javascript
function foo() {
  let a = 2;

  function bar() {
    console.log(a);
  }

  return bar;
}

let baz = foo();
baz();
```
- bar() is executed, but in this case, it's executed outside of its declared lexical scope.<br>
- By virtue of where it was declared, bar() has a lexical scope closure over that inner scope of foo(), which keeps that scope alive for bar() to reference at a later time.<br>
- bar() still has a reference to that scope, and that reference is called closure.
```javascript
function wait(message) {
  setTimeout(function timer() {
    alert(message);
  }, 1000);
}

wait("Hello, closure!");
```
<br>

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
```