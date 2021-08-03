---
title: Mutations, Rest Parameter, and Spread Operator
author: Joshua Leisure
category: es6
references:
"Reduce": https://www.w3schools.com/jsref/jsref_reduce.asp
"Rest Parameter":  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
"Spread Operator": https://scotch.io/bar-talk/javascripts-three-dots-spread-vs-rest-operators543
weight: 3
---

## Mutations
- Reference data types like objects, arrays, and functions assigned to variables let and const are mutable. 
  - But, primitive data types like boolean, number, string, etc... are not mutable (immutable)
- So, immutability means we want to preserve/keep our current state and mutating means the opposite. 

```javascript
const x = [1, 2, 3];
x[1] = 30;
console.log(x); //will display [1, 30, 3] cause we mutated index [1], changing 2 to 30.
```
- *Note:* Object.freeze(param) will prevent mutation.

## Rest Parameter
- With ES6 came the rest parameter for functions.
- With this, we can now create more flexible functions that can take a variable amount of arguments, which are stored in an array.

```javascript
const sum = (...args) => {
    return args.reduce((x, y) => x + y, 0); 
    // 0 is just the starter value
    // reduce creates one value from multiple args in this situation.
}
console.log(sum(5, 10, 20)); // 35
```

## Spread Operator 
- ES6 came out with the `...` notation, and can be used with rest parameters and spread operators. 
  - With rest parameters, the `...` means it will collect "the rest" of the elements into an array (that's why it has to be the last arg).
  - With spread operators, the `...` means that arrays, objects, and strings can be turned into single arguments/elements.

```javascript
const food = ["Pizza", "Sushi", "Fruit"];
const moreFood = ["Wings", "Fish", ...food];
console.log(moreFood) = 
// Wings, Fish, Pizza, Sushi, Fruit 
// If ...food was added before wings, the sentence array of strings would be in a different order.