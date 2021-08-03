---
title: Strings and Template Literals
author: Joshua Leisure
category: es6
references: 
"String methods": https://www.w3schools.com/js/js_string_methods.asp
"Template literals": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
weight: 0
---
## Strings and String Methods

- For review, a string is a way of storing and changing text in programming languages. To indicate to javascript that some text is a string, use single or double quotes.
- One method of strings we'll discuss in `.length`. This will count the amount of characters within a string (including spaces).
  - If you would like to only count characters, regular expressions will let you search for patterns in strings, see https://www.w3schools.com/js/js_regexp.asp for more details. 
  
```javascript
let animal = "cats and dogs";
animal.length;
console.log(animal.length); // 13
```

- A second method we will cover is `slice()`. This will grab a part of the string and return it as a new string. 
- It takes two paramaters, one being the starting point, the other being the ending point.
  - If no ending point is mentioned, it will grab everything to the right of the starting point.
```javascript
let animal = "cats, dogs, birds";
let favAnimal = animal.slice(6, 10);
console.log(favAnimal);
// Will display dogs
```
- A third method we will cover is `replace()`. This will replace a value in a string, with another value, returning a new string. This will only replace the first value and is case sensitive (see `regex`). 
```javascript 
let text = "SpinSpire is great!";
let newText = text.replace("great", "amazing");
console.log(newText);
// SpinSpire is amazing!
```
- A fourth method we will cover is `toUpperCase()` and `toLowerCase()`, either coverting everything to upper or lowercase.
```javascript
let text = "SpinSpire";
let textTwo = text.toUpperCase();
console.log(textTwo);
// SPINSPIRE
let textThree = "SpinSpire";
let textFour = textThree.toLowerCase();
console.log(textFour);
// spinspire
```
- A fifth method we will cover is  `concat()`. This will join two strings together. This can be used instead of the `+` operator. 
```javascript
let textOne = "SpinSpire";
let textTwo = "example";
let textThree = textOne.concat(" ", textTwo);
console.log(textThree);
// SpineSpire example
```

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
- Use backticks (`) around the string. This will allow double and single quotes inside backticks.
- No longer have to use concatenation with a "+" or concat to combine strings.
- ${} is used for inserting properties of objects (variables) into strings, a process called interpolation.