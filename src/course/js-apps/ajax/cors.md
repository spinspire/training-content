---
title: (placeholder) CORS (Cross-Origin Resource Sharing)
author: Brett Causey
category: ajax
weight: 10
---

## CORS

### What is CORS?

1. CORS is essentially a mechanism that allows a server to indicate any origins that a server can share its resources with.
2. These origins can potentially be domains, schemes, or ports.
3. This mechanism referred to above is actually an HTTP (Hyper Text Transfer Protocol) mechanism. This enables the transfer of hypermedia documents on the web.

### How does CORS work?

1. It relies on an mechanism by which browsers send a pre check or more commonly known as a "pre-flight" request that actually checks that the server will grant access to the request being made.
2. Our browser will actually send headers that indicate to the server that the cross-origin resourc sharing is allowed.
3. It is meant to restrict access to HTTP request that are initiated by scripts and not a user.
   - This means that any web app that uses an outside api like the FETCH api can only make http request from the spplications origin and not an outside script.

### Who uses CORS

- API's
- Web Browsers
- CSS shapes, textures, and Images that are requested from another source

### Other CORS Functionailty

- When the browser sends a pre-flight request CORS can specify whether or not a client needs to send credentials with request.
  - Examples of these credentials are Cookies, and Web Tokens
- When a CORS error occurs the results and the reason of that error is not available to JavaScript. The only way to determine the error is to watch the network request in the console and see the response that was sent back with the requests.

### Scenarios of Access Controls.

- Simple Request: simple request does not need CORS "pre-flight".

1. To be a simple requests it must meet all of the following criteria:

- Use one of these methods:
  - GET
  - HEAD
  - POST

2. If the header is not set automatically by the user-agent connection then it neefs to specified. Here are the potential headers that may need to be set:
   - Accept
   - Accept-Language
   - Content-Language
   - Content-type
3. For Content-type specifically you must specify one of the below options:

   - application/json
   - multipart/form-data
   - text/plain

4. No readable stream object is used in a request.

### Examples of CORS requests

    ```javascript
    let request = XMLHttpRequest();
    let method = "GET";
    let url = "https://v2.jokeapi.dev/joke/Any";

    request.open(method, url);
    request.send()
    // this should send a request to retireve a joke from the joke api
    ```

### Here is an example of a Header you may send with an requests.

- This would be needed if the jokes api required credentials.

```javascript
let url = "https://v2.jokeapi.dev/joke/Any";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer 12345`,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*", // the star here allows all origins for a CORS Request
  "Access-Control-Allow-Methods": "OPTIONS,PUT,GET",
};
fetch(url, headers); // this will make a fetch request to the api with the specified url and the specific headers.
```

## To be continued.
