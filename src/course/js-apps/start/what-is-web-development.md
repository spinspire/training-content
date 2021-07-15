---
title: "Background: What is Web Development?"
author: Jitesh Doshi
category: start
weight: 12
---

- Web Developers write web sites and web applications that are accessed by the user in a web browser (frontend) but a critical portion of the application runs on a web server (backend).
- The frontend is a set of HTML, CSS, JavaScript files and other assets (such as images) that are downloaded from the web server and rendered on the client browser.
- The job of the frontend is to present a User Interface (UI) to the end user, allow the user to interact with the web page (such as clicking and typing input), send HTTP requests to the server, receive and parse responses, and present to the user the result it received from the server.
- The backend is a program that runs and stays on the server. It's primary job is to respond to HTTP requests from the client.
- Backends are written in programming languages such as PHP, Python, Ruby, C#, Java, Go, JavaScript (on NodeJS platform), etc. These languages have a wealth of libraries and frameworks that make it easier to receive HTTP requests, parse them, and respond to them. These are called backend web frameworks.
- The frontend is almost always written in JavaScript (or something that eventually compiles to it) because that is the only programming language that runs directly on the browser. There are plenty of frontend web frameworks that make it easier to do all things typical to a web frontend.

## DOM & DHTML

- The HTML structure of a web page is represented in memory by DOM (Document Object Model) -- an in-memory tree structure with Nodes, Elements, Attributes, and Events (click, mouse move, keyboard input etc.)
- You can view a representation of the DOM in the "Elements" panel of your browser dev tools. In the dev tools console panel, $0 represents the DOM element currently being inspected. For example, visit a simple page, inspect some element and then type $0.innerText or $0.innerHTML in the console panel.
- JavaScript code can query DOM to see what's on the page as well as manipulate it to modify what's on the page. This technique of DOM manipulation is called DHTML (Dynamic HTML).
- Another important part of DHTML is event handling, where JavaScript attaches callback functions to DOM events (e.g. button click, form submit, key down, key up, etc.) such that that piece of JavaScript runs every time that event occurs (e.g. send data to the server when "submit" button is clicked).

## AJAX, JSON, Traditional vs. Single Page Apps (SPA)

- Traditional web applications used to present a page, submit a form which would result in a request for a new page, and cause a full refresh of the browser to fetch and present each new page (and most websites still use this approach).
- Modern web applications instead do only partial refresh of the page by fetching data in the background and modifying only certain parts of the page that need to change in response to the new data.
- Partial refresh has many advantages over full refresh:
- The state of JavaScript is completely reset every time a page loads fully. Which means that partial refresh keeps JavaScript state while full refresh loses it, which makes it easier to write user facing applications with partial refresh.
- Partial refresh does not require reloading of CSS files, images, and other assets embedded in the page, resulting in better performance and lower communication overhead.
- AJAX is a, now anachronistic, acronym for Asynchronous JavaScript and XML. XML has fallen out of favor since it was coined, and has now been mostly replaced by JSON (JavaScript Object Notation).
- AJAX is the feature of the web browser that allows JavaScript to **programmatically make HTTP requests** to a server. This is in contrast to most of the HTTP requests made by the browser because they originate outside of JavaScript, and are triggered by a user clicking on a hyperlink or entering a web address.
- AJAX requests are **asynchronous** in nature. Which means that the next line of JavaScript code executes even before the AJAX response has been received.
- So think AJAX = "programmatically and asynchronously fetching data from the server").
- Although AJAX can fetch HTML, CSS, images and any other content from the server, most apps use AJAX to fetch **data** from the server. This is because data is typically much smaller than content, and the client can decide to render the data to the user the way it sees fit, on the client. This is called **Client Side Rendering** (CSR), as opposed to Server Side Rendering (SSR) where the backend builds HTML content on the server and streams it to the client.
- Though there are several choices for data format for transferring data (e.g. XML), the dominant choice is **JSON** (JavaScript Object Notation). JSON simply adopts the notation JavaScript uses to represent objects. But this notation is so simple that almost any programming language can also use it. This makes for a very portable data format that can be produced and consumed by any programming language. Below is an example:
```json
{
   "count": 2,
   "todos": [
       {
           "id": 1,
           "title": "learn web development",
           "completed": false
       },
       {
           "id": 2,
           "title": "enroll in a training program",
           "completed": true
       }
   ]
}
```

- Some modern applications take the partial refresh all the way and fully load the initial page only once and then all subsequent changes are partial refreshes triggered by user actions and AJAX requests. These apps load only a single page with full refresh and are thus called **Single Page Applications** (SPA).
- Just like traditional web applications and web sites, SPA's also have **routes** (e.g. /todos/1). But since these are CSR routes instead of SSR, they need a router that loads and executes a different piece of code (component) when the user visits different routes. For example: /customer vs /user/profile are two different routes that should be rendered by two different components, and it is the **router** that loads and executes these components based on the current route. Thus **client-side routing** is an important part of SPA's.
