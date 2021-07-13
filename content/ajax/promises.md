---
title: Promise API
author: Jitesh Doshi
category: ajax
weight: 1
references:
  "MDN: Promise API": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
---

Promise API is what `async`/`await` language features are built on top of. A Promise is an object that represents an asynchronous result that will either `resolve` to a value or `reject` with an error.

Let's use the `setTimeout` function to simlate a request that will `resolve` or `reject` in future.

```javascript
// define a function/lambda that returns a Promise
const willThisBeEven = (num, delay_ms) => new Promise(function(resolve, reject) { // the Promise's callback receives `resolve` and `reject` callbacks
  // define a function that uses the supplied `resolve` and `reject` appropriately
  const asyncfunc = function() {
    if(num < 0) {
      reject("No negatives please!"); // failure: reject promise with error
    }
    // `mod` operator (%) returns remainder of division by 2
    if(num % 2 === 0) {
      resolve("EVEN!"); // success: resolve promise with a value
    } else {
      resolve("ODD!");  // success: resolve promise with a value
    }
  };
  // call the defined function in future (asynchronously) after `delay_ms` milliseconds
  setTimeout(asyncfunc, delay_ms);
});

willThisBeEven(5, 3000).then(console.log).catch(console.error); // ODD!
willThisBeEven(6, 6000).then(console.log).catch(console.error); // EVEN!
willThisBeEven(-5, 9000).then(console.log).catch(console.error); // Error: No negatives please!
```

Copy-paste the above code into your browser's `Developer Tools`>`Console` and you'll see that three messages print after 3, 6, and 9 seconds respectively.

The basic steps to create a Promise are:

1. Instantiate a promise with `new Promise(function callback(resolve, reject) {...})` and a callback function
2. The callback will be called by Promise AIP and will be supplied with `resolve` and `reject` functions.
3. The callback performs some asynchronous activity and calls the supplied `resolve` or `reject` at appropriate time depending on if it wants to return success or failure.
4. Now the promise can be combined with `then`/`catch` or `async`/`await` (see below)

So, in short, Promise API allows you to define non-blocking functions that take some time, and can be chained with `then` to handle the return value when the `resolve` or with `catch` to handle the error when they `reject`. This gets even better and easier when you use the [`async`/`await` language features](async-await), as shown below:

```javascript
(async function() {
  try {
    console.log(await willThisBeEven(5, 3000));
  } catch(e) {
    console.error(e);
  }
})();
```