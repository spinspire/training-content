---
title: Destructuring and Template Literals
author: Jitesh Doshi Joshua Leisure
category: ES6
References: 
"Destructuring": https://www.w3docs.com/learn-javascript/destructuring-assignment.html
"Template literals": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
weight: 2
---

## Destructuring 
- Provides a clean way to assign values from an object, basically turning something complex into something simpler.
- As you can see in the example, ES5 uses '.' notation.
```javascript
const user = { name: 'SpinSpire', age: "100"};

// ES5
const name = user.name;
const age = user.age;
console.log(name) = // SpinSpire

// ES6
const { name, age } = user; 
console.log(name) = // SpinSpire
```
- So, instead of using the "." notation to access object properties, we access it using " {} ".
## Nested Destructuring 
- In some situations, there will be arrays or objects in other arrays or objects (nested).
```javascript
const food = {
    type: 'fruit',
    description: {
        color: 'blue',
        name: 'blueberry',
    } 
}
const {description: {name}} = food;
console.log(name); // prints blueberry
```
- Similiar format to when there is just one object but with an extra layer of "{}"
## Template Literals 
- Just how destructuring created more concise and easier to read code, so does template literals.
- Perfect for creating dynamic strings.
```javascript
const food = {
    name: "blueberry",
    color: "blue"
};

const foodDescription = `This ${food.name} is ${food.color}.`;
console.log(foodDescription);
// This blueberry is blue.
```
*Note:* Some syntax changes
- Use backticks (`) around the string.
- No longer have to use concatenation with a "+" to combine strings.
- ${} is used for inserting properties of objects into strings.