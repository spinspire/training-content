---
title: Data Types
author: Christian Crawford
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
    - The default value for variables before they’re assigned a value.
    ```javascript
    let x; // x is of type undefined at this point.
    
    x = 5; // x no longer has a type of undefined, instead it's now a number.
    ```
  - Null
  - Symbol (ES6)
  - BigInt (ES2020)

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