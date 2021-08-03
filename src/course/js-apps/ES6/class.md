---
title: Classes
author: Joshua Leisure
category: es6
references: 
"Constructors": https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function
"Template literals": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
weight: 4
---

## Classes
- With ES6, `class` was used create so we can make objects
- Do note though, this is just syntax, not actual classes you would see in other languages.
- An important function to mention is a constructor, or a function that creates new objects and defines their properties and behaviors.
```javascript
class movies {
    constructor(type) {
        this.type = type;
    }
}
const comedy = new movies("comedy");
console.log(comedy.type); 
// 'Will display comedy'
```