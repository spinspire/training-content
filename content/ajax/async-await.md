---
title: async/await
author: Jitesh Doshi
category: ajax
weight: 2
references:
  "MDN: Fetch API": https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
---

`async` and `await` are two JavaScript keywords that make it possible to:

1. initiate asynchronous requests (such as HTTP requests with `fetch`) prefixed with `await`
2. go back into the JavaScript event loop
3. wait for and process other asynchronous events in the order that they occur
4. and resume execution of the line *after* `await` as soon as the previous `await`ed request finishes (with either `resolve` or `reject`)

Let's take a look at an example. Define an `async` function that calls other `async` functions and `await`s on them before proceeding.

```javascript
async function getData() { // any function that uses `await` must be declared with `async` prefix
  const url = "https://someurl.com/data.json";
  try {
    const response = await fetch(url); // make async request that takes time
    /*
     * this is where control disappears into the event loop
     * and resumes below only after request above completes with `resolve`
     */
    if(response.ok) { // ok is true only for successful HTTP status codes (such as 200)
      const data = await response.json(); // another async request
      return data; // resumes only after all data from response has been collected and parsed as JSON
    } else {
      return Promise.reject(response);
    }
  } catch(e) { // resume here only after request above completes with `reject`
    // error handling
    return Promise.reject(e);
  }
}
```

Now call the function above (using Promise API)
```javascript
getData().then(console.log).catch(console.error).finally(() => console.log("DONE"));
```

Or a nicer way to do the same using async/await, and IIFE
```javascript
(async function() {
  try {
    const result = await getData();
    console.log(result);
  } catch(e) {
    console.error(e);
  } finally {
    console.log("DONE");
  }
})();
```

If something doesn't make sense above, then see the [Promise API](../promises) module also, along with the references.