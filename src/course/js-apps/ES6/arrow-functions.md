---
title: Arrow Functions/Lambda Expressions
author: Jitesh Doshi Joshua Leisure
category: es6
References: 
"Arrow Functions": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
weight: 1
---

## Lambda Expressions/ Arrow Functions

- A lambda expression (aka "arrow function") is very similar to an anonymous function, and can then be invoked like any function (but there are subtle differences).
  - So, why use arrow function notation? Because it removes the noise from code, making it easier to read and overall less code.
- Here's what a lambda expression looks like:

```javascript
// lambda expression 
(param1, param2) => {
  // some code ...
}
```

This is SOOOOOO similar to ...

```javascript
// anonymous function
function(param1, param2) {
  // some code ...
}
```

- All we did was remove word `function` and placed a `=>` (called *fat arrow*) between the parameter list and the body. Yup, that's pretty much what we did.
- If the body of the lambda expression is just a single expression, they can be simplified a lot, like so:

```javascript
(param1, param2) => expr; // where `expr` is ANY valid expression, such as (param1+param2)
param1 => expr; // a single parameter does not need parenthesis
() => expr; // zero parameter does need parenthesis
() => { // with a body
  return expr; // equivalent to the previous example, the expression is the return value
};
```

- In all of the above cases, the value of `expr` is the return value of the lambda.
- So what about the *subtle* differences? Aside from the fact that lambda expressions can sometimes be very concise, they can have no `this` reference, while functions can. What does that mean? Some other time. Out of scope for now. Other than that, lambda expressions and anonymous functions can be used interchangeably.
- As a demonstration of the `this` difference, try out the code below. The first `apply` call will produce what you expect, second one won't.

```javascript
const f1 = function (param) {
  console.log("this", this);
  console.log("param", param);
}

const f2 = (param) => {
  console.log("this", this);
  console.log("param", param);
}

// first param to `apply` is `this`, second param is an array of callee function parameters
f1.apply("THIS for f1", ["param-value-for-f1"]);
f2.apply("THIS for f2", ["param-value-for-f2"]);
```
- But, we cannot use lamda expressions in all situations:
  - In addition to `this`, we can't use them with the `super` keyword, or methods like `call()`, `apply()`, or `bind()`.
  - Cannot be used as `constructors` either.
- *Note:* These terms may be confusing now but you will learn them with time, the important part to know though is we aren't completely getting rid of ES5 function notation because ES6 arrow functions can't completely replace the old syntax.