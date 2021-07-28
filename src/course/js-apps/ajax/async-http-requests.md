---
title: AJAX - Async HTTP requests from JavaScript
author: Brett Causey
category: ajax
weight: 10
---

### Prerequisites:

- Not sure

## Http Requests

- As developers we are constantly making https request to different things like servers or API's. There are several ways that you can do this but in this lesson I'm going to show you how to utilize the built in JavaScript API to make asynchronous Htttp request.
  - A Http Request is the method which we use to request resources across the web. The full name of HTTP is Hyper Text Transfer Protocol and is commonly used to structure specific request for things we may need. Because HTTP needs the transfer of data to happen across the web it uses something called TCP (Transmission Control Protocol) this is what allows machines to exchange information across networks.
- This is all you need to know to get started on using the fetch api JavaScript and with that lets begin!

### Fetch

- Fetch is an easy to use interface that we can use in JavaScript to build and send request over the web.
- For example say that we wanted to retrieve a joke from the JokeAPI you would need to make a http request.

- With the introduction of ES2017 async/await was introduced to make an easier and more streamlined approach of returning promises instead of using

  - in order to show this example of fetch we will have to place our request inside of an IIFE or immediately invoked function to make it asynchronous.
  - Fetch will generally work with one specified parameter that is the URL however if you need/like you can provide a second optional argument that defines the request headers that is sent with your requests. Here we right an IIFE or immediately invoked function expression to turn the function asynchronous and make our http request. If we don't make our requests function asynchronous then we will not be able to wait on the promise to fulfill successfully.

    ```javascript
    (async function (data = {}) {
    // Default options are marked with *
        const url = "https://v2.jokeapi.dev/joke/";
        try {
        const response = await fetch(url, {
        // the default value of method if it is not specified is GET.
        method: "POST", //Can be one of the following: *GET, POST, PUT, DELETE, etc.
        headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 1234", // this is required if the resource your requesting is restricted by its owner requiring you to be authenticated
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header which is why we call the JSON object
        }
        });
        } catch(error) {
            console.log(error) // this will allow you to see the error if the Promise fails to resolve at any point.
    const data =  await response.json(); // parses JSON response into JavaScript objects
    console.log("heres your jokes", data)

    )}();
    ```

- The above example is a more configured version of Fetch, however if you wanted to just run a fetch with all the default options enabled you would just do this:
  ```javascript
  (async function (data = {}) {
    try{
  const url =  "https://v2.jokeapi.dev/joke/";
  const response = await fetch(url);
  data =  await response.json(); // parses JSON response into JavaScript objects
  } catch {
      console.log("there was an error resolving your promise", error);
  }
  console.log("heres your jokes", data);
  }();
  ```

### In Conclusion

- To some this doesn't seem like the greatest thing ever but the previous versions of this like using a library called axios or even XMLHttpRequest this was a major improvement.
- Not only was Fetch a cleaner and simpler implementation of completing http requests it also uses Promises to deliver these requests to provide a lot more flexibility when making different types of requests and how to handle them.
- Use the Fetch method whenever you need to make request to retrieve resources form other sites/servers, use it to resolve a promise that turns into a response object, or have these methods resolve into actual data like JSON
