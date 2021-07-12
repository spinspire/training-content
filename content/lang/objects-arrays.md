---
title: Objects, Arrays, and Destructuring
author: Jitesh Doshi
category: language
references:
  "MDN: JavaScript Arrays": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  "MDN: JavaScript Objects": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
---

Aside from primitive (scalar) data types (`string`, `number`, `boolean`, etc), JavaScript also has objects and arrays. These are container type that contain other data belonging to other data types -- including other primitive as well as container types.

# Arrays

1. Arrays contain elements that are usually of the same type, but could be of mixed types. For example, an array of days of the week ...
   ```javascript
   let days_of_week = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday", // trailing comma is a good idea
   ];
   ```
2. Array elements are **ordered**, starting from index 0 (zero) and incrementing continuously to `n-1`, where `n` is the number of elements in the array. In the example above, the length of the array is 7, and the indexes of the elements are from 0 to 6.
3. The above is an example of an array literal, where elements are literally included in the program. In other cases, it is common to add elements to the array dynamically.
   ```javascript
   let squares = []; // start with an empty array
   for (const i = 0; i < 10; i++) {
     squares[i] = i * i; // fill it with squares of numbers
   }
   ```
   In the above, the length of the array starts at zero, and then expands dynamically as you add elements to it.
4. The `.length` property of an array reflects the size of the array. If you just want to append something to the end of an array, use `push` method. `push` method mutates the array it operates on, while `concat` method returns a new array with modifications.
5. Also see, `map` and `reduce` functions on arrays. In general, use `map` when you want all elements of one array transformed in some way into another array. Use `reduce` when you want to somehow compute an aggregate value from elements of an array.

The following code example shows various operations on arrays:

```javascript
let squares1 = [];
for (const i = 0; i < 10; i++) {
  squares.push(i * i); // append to array (modifies it)
}

let squares2 = [];
for (const i = 0; i < 10; i++) {
  squares2 = squares2.concat(i * i); // append to array (returns modified version)
}

let squares3 = [];
for (const i = 0; i < 10; i++) {
  squares3 = [...squares3, i * i]; // using spread operator (returns modified version)
}

let squares4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => n*n); // a new array containing squares of elements of nums

// for ... in
for (const i in squares4) {
  // use i as each index in squares4
}

// for ... of
for (const sq of squares4) {
  // use sq as each value in squares4
}
```

# Objects

A JavaScript Object is a grab-bag of properties (keys) and corresponding values (usually of different types). Here's an example:

```javascript
const customer = {
  name: {
    first: "Jane",
    last: "Doe",
  },
  age: 21,
  tags: ["urban", "high value"],
  "suspected fraud": false,
};
// accessing props of the object
console.log(customer, customer.age, customer["tags"]);

// spread operator (shallow copy with override)
const cust2 = {...customer, name: {first: "John",  last: "Smith"}};

// iterator over the object props
for(const prop in customer) {
  console.log(prop, customer[prop]);
}
for(const [prop, val] of Object.entries(customer)) {
  console.log(prop, val);
}
for(const prop of Object.keys(customer)) {
  console.log(prop, customer[prop]);
}
```

1. Values can be of any type, including nested objects.
2. Values are keyed/indexed by properties. Properties (or props for short) can be unquoted if they are regular *identifiers* (just like variable names). If they are special strings (such as "1foo" or "foo bar") then they should be in quotes.
3. Props can be accessed with the `.` (dot) or `[]` (array index) operators.
4. Useful functions: `Object.entries()`, `Object.keys()`, `Object.assign`, `Object.is` ...

# Destructuring

It is common to extract values from objects and arrays and assign them to variables in local scope. For Example:

```javascript
const name = customer.name;
const age = customer.age;
const sq0 = squares1[0];
const sq1 = squares1[1];
const sq2 = squares1[2];
```

But the same can be expressed in shorter and more readable way like this:

```javascript
const {name, age, ...without_name_and_age} = customer;
const [sq0, sq1, sq2, ...sq3to9] = squares;
```

Notice the use of spread operator to catch all values that are not already destructured.

This approach is very commonly used in destructuring props directly from function parameter objects without having to assign them to local variables.

```javascript
function foo({ name, age }) {
  // use name and age
}

foo(customer); // pass in the customer object
```