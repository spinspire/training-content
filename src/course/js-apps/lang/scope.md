---
title: (WIP) Scopes
author: Chaise Matev
category: language
---

## Global scope
  - Variables defined outside of a function are in the global scope
  - Global scope lives as long as your application lives
  - Variables in the global scope can be accessed from everywhere on the application

## Local scope
  - Variables defined inside a function are in local scope
  - Local Scope lives as long as your functions are called and executed.
  - Each function when invoked creates a new scope.

## Lexical scope
  - Lexical Scope means that in a nested function (function within a function), the inner functions have access to the variables and resources of their parent function.
  ```javascript
  function outer() {
    let a = 323; 

    function inner() {
      console.log(a); 
    }

    inner()
  }
  outer();
  ```