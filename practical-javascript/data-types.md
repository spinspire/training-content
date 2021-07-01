# Data Types

Javascript is a loosly types language and, like many languages, contains primitive and non-primitive types.

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
    - A collection data that is numerically indexed.
    ```javascript
    let fruit = ['apple', 'orange'];
    ```
  - Object
    - A collection of properties which are made up of keys and values.
    - The keys **must always** be a String.
    - The values can be of any data type including other objects or functions.
    ```javascript
    let animals = {
      'mammals': ['elephant', 'bear', 'whale'],
      'reptiles': ['alligator', 'lizard', 'turtle']
      'birds': ['ostrich', 'flamingo', 'pigeon']
    };
    ```

**References:**
- [Javascript data types](https://real-kevbot.medium.com/javascript-primitive-data-types-63993054314f)