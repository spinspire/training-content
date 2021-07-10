---
title: JSON (JavaScript Object Notation)
author: Jitesh Doshi
tags: ajax
weight: -1
---

JSON is derived from JavaScript Object Notation, which is the notation JavaScript language uses natively to express object literals. The benefit is that the browser (the most common client) natively understands it, and almost every server-side language has built-in (or added) support to consume and produce it. Now if the client fetches it from the server over HTTP -- JSON/HTTP (pronounced JSON over HTTP) -- we have an easy and scalable way to exchange data between client and the server.

For example:

```javascript
const customer = {
  name: {
    first: "Jane",
    last: "Doe",
  },
  age: 21,
  tags: ["urban", "high value"],
  "suspected fraud": false,
}
```

The above is actual JavaScript code. The following is the JSON equivalent of it:

```json
{
  "name": {
    "first": "Jane",
    "last": "Doe"
  },
  "age": 21,
  "tags": ["urban", "high value"],
  "suspected fraud": false
}
```

Note that we:

- drop the variable declaration
- remove trailing commas
- and wrap prop names in double-quotes

All JSON is valid JavaScript, but all JavaScript is not valid JSON. Thus JSON is a subset of JavaScript, which is design to just carry data and no logic, and thus it is safe to consume JSON coming from untrusted sources.