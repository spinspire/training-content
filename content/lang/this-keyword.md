---
title: '"this" keyword'
author: Brett Causey
---

## What is the `this` keyword in JavaScript?

- The javascript this keyword refers to an object it belongs to.
- "this" by itself refers to the global object and inside of a function "this" is undefined.
- Inside of event handlers and functions the this keyword refers to what ever element received the event.
- A functions "this" keyword behaves defferent in JS than in other programming languages.
- Introduced in ES2015 you can now call the bind() method to set the value of this inside a function regardless how its being called.
- However be noted that "arrow" functions dont provide their own "this" binding

## An example of how "this" works:

```javascript
const testObj = {
  item: "hamburger",
  count: 20,
  inventory: function () {
    return `we have ${this.count} ${this.item}'s`;
  },
};
console.log(testObj.inventory());
// output: we have 20 hamburgers
```

- You can use "this" inside your functions scope to acccess different properties inside your object.

- Inside of an object this refers to the owner of the method.
- In the example above the owner of the inventory method is the "testObj"

## "this" used globally or outside of function scope.

- When used by itself outside of a function the "this" keyword refers to the global object.
- Inside of the browser when you use "this" keyword it refers to the [object window] this also works the same whther the browser is in strict mode or not.
- to verify this you could inside your console execute the following command: `console.log(this === window).
- This command should return true.

## Strict mode

- JS strict mode does not allow default binding. An example below:

```javascript
"use strict";
function testFunction() {
  return this;
}
// if you run this function the return will
// be undefined
```

- When used alone this will also refer to the global js object

### Explicit Functions

#### Bind

- bind(), apply(), and call()
- t.bind(someobject) will create a new function with the same body and scope as "t", however the new function will be bound to the first argument of the bind regardless of how the function is being used.
- be noted that if the "this" argument is passed to call, bind, or apply when an arrow function is invoked it will be ignored.
- Bind required atleast one argument to be passed to the function and it uses that to create the new object to be binded too.

```javascript
this.x = 9; // 'this' refers to global 'window'
const module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81
```

#### Apply()

- Apply calls a function that takes arguments that are an array or array like objects.
- Takes two arguments the "this" argument and an optional array arguments.
- These specify the object this gets applied to and the array like objects that can call the function
- While call and apply may look similar the key differences is that call accepts a list of multiple arguments while apply accepts only a single array of arguments.
- Using apply you can write a method once and then inherit in new and existing objects
- You can use apply to append an array to another. If you pass an array to push it actually adds that array as a single element thus creating an array inside of an array. This is actually where apply shines.

```javascript
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); //Output: ["a", "b", 0, 1, 2]
```

- Using apply in the correct way will allow you to use built in functions that youd otherwise be looping through over the array values.
- Keep in mind that by using apply you may run the risk of exceeding the JS engines argument length. This is the cause of applying functions with too many arguments.
- This will only apply with very very large arrays that are provided as arguments.

#### Call

- Takes a "this" obj argument and any number of arguments.
- Allows a function/object method to be assigned and or called to a different object.
- Call always provides a new value for this for the method it is assigned to.
- This allows you to write a method once an inherit in another object. Without having to do any re writes.
- You can use call to chain constructos for an object. and can also invoke anonymous functions.

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

const cheese = new Food("feta", 5);
const fun = new Toy("robot", 40);
```

- As you can see here this allows for lots of reusablity inside of your objects.

## Closing

- The "this" keyword is important becauase it is the high level overview of how to access objects
- However it is rarely used in Javascript because functions (in non-strict mode) can access the global object through "this". Preventing access to the global object is one of the key purposes of any sandboxing system.
