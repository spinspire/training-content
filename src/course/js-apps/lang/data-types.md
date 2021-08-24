---
title: Data Types
author: Christian Crawford
category: language
weight: -90
references:
  "Javascript data types": https://real-kevbot.medium.com/javascript-primitive-data-types-63993054314f
---

Javascript is a loosly typed language and, like many languages, contains primitive and non-primitive types.

### Primitives
  In JavaScript primitives are defined as "data that is not on object and has no methods". The values themselves cannot have methods and are therefore immutable. They can only be altered by re-assignment.
  - String
    - A collection of characters contained within quotation marks (single or double).
    ```javascript
    const name = 'John';
    ```
  - Number 
    - Can be an integer or float
    ```javascript
    const age = 25;
    ```
  - Boolean
    - True or false
    ```javascript
    let isOpen = true;
    ```
  - Undefined
    - The default value for variables before they’re assigned a value
    ```javascript
    let x; // x is of type undefined at this point.
    
    x = 5; // x no longer has a type of undefined, instead it's now a number.
    ```
  - Null
    ```javascript
    let x = null;
    ```
  - Symbol (ES6)
    - Symbol is a built-in object whose constructor returns a symbol primitive — also called a `Symbol value` or just a `Symbol` that’s guaranteed to be unique
    - Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object
    ```javascript
    let sym1 = Symbol()
    let sym2 = Symbol('foo')
    ```
  - BigInt (ES2020)
    - Used to represent whole numbers with a value larger than 2^53 - 1 (~ 9 quadrillion)
    - Can be created by either appending a "n" to the end of the integer literal, or by using the BigInt() constructor
    ```javascript
    const previouslyMaxInteger = 9007199254740991n
    const anotherHuge = BigInt(9007199254740991)
    ```
    - BigInt values cannot be used with the built-in Math object 
    - They also cannot be mixed with a `Number` value in operations.
    ```javascript
    let num = 123;
    let bigInt = BigInt(9007199254740992);
    // This is not allowed, and will result in an error.
    let newValue = num + bigInt;
    // You must convert all values into BigInt types.
    let newValue = BigInt(num) + bigInt;
    ```

### Non-Primitives
  - Array
    - A collection data that is numerically indexed
    - They can contain items of any data type
    ```javascript
    let fruits = ['apple', 'orange'];
    let mixedArr = ['red', 7, false];
    ```
    - When addressing arrays you must do so using the numerical index
    ```javascript
    let fruits = ['apple', 'orange'];
    // This will print 'apple'.
    console.log(fruits[0]);
    // This will print 'orange'.
    console.log(fruits[1]);
    ```
  - Object
    - A collection of keys-value pairs referred to as properies
    - The data is stored in an unordered fashion, unlike arrays
    - The keys **must always** be a String
    - The values can be of any data type including other objects or functions
    ```javascript
    let animals = {
      'mammals': ['elephant', 'bear', 'whale'],
      'reptiles': ['alligator', 'lizard', 'turtle']
      'birds': ['ostrich', 'flamingo', 'pigeon']
    };
    ```

Arrays and Objects will be discussed in more detail in another lesson (link tbd).