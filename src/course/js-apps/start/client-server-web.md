---
title: "Background: Client-Server computing and the Web"
author: Jitesh Doshi
category: start
weight: 11
references:
  "MDN: HTML": https://developer.mozilla.org/en-US/docs/Web/HTML
  "MDN: CSS": https://developer.mozilla.org/en-US/docs/Web/CSS
  "MDN: JavaScript": https://developer.mozilla.org/en-US/docs/Web/JavaScript
  "MDN: HTTP protocol": https://developer.mozilla.org/en-US/docs/Web/HTTP
  "Firefox Browser: Developer Tools": https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools
---

Client-server computing is a model of software design in which you write two separate programs - a client and a server. They typically run on different machines and communicate with each other over a network to accomplish the system's purpose.

[TODO: DIAGRAM]

| Client      | Server |
| ----------- | ----------- |
| A client is a software program that retrieves data from and sends data to a server. | Server is an always running (or long lived) process that waits for connections, data, or requests from multiple clients and sends data back to them. |
| Examples: a web browser, a mobile application, video player | Examples: a web server, database server, file server, video server |
| Clients typically have a friendly user interface (UI). Thus programming them requires UI or frontend expertise. | Servers run in the background without a UI and communicate with other servers (such as database, file). Thus programming them requires backend expertise (communication protocols, SQL, data processing, etc.) |
| Client programs are started by end users on their personal device (laptop, smartphone, etc.) and are thus short lived. | Servers are long running or always running on a faceless machine in a data center.|

## Web client: The browser

- A web browser is a program that lets you browse the web. Which means it acts as a user-friendly client to various servers on the web.
- The three most important client-side technologies used by the web browser are:
- HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.
- CSS is a language of style rules that we use to apply styling (formatting) to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.
- JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and programmatically respond to user actions such as clicking.
- Most popular web browsers are Chrome, Chromium, Firefox, IE Edge, Safari, etc.
- They provide very powerful Developer Tools that allow you to look under the hood of any web page and see how it was built. Press F12 , Control-Shift-I, or Command-Option-I to see them in a browser window now.
- A web page is an HTML file (default is "index.html") that the user can view. It contains text, embedded assets (images, CSS, JS etc.) that are incorporated directly into the page, and hyperlinks to assets that the user must click to visit (other web pages) or download (such as PDF files).

## Web server

- A web server waits for a browser (or other web clients) to connect and send requests to send or receive data (such as form submissions) or static files (such as HTML/CSS/JS/image/PDF/etc).
- Examples: nginx, Apache, etc.
- The client and the server use the HTTP protocol (Hypertext transfer protocol) to communicate with each other. Client connects, sends a request, server responds (you can see the request-response pairs in your browser Dev Tools).
- A typical client browser sends several requests per page view, and several page views.
- A single web server process is designed to communicate with a very large number of client browsers.
- All these clients are usually communicating with the same web server instance simultaneously.
- The web server DOES NOT get confused between them, because it DOES NOT even try to remember them. It does not keep track of the state of conversations with them (that's the job of the client, not server). This is why we say that web servers are [stateless](https://en.wikipedia.org/wiki/Stateless_protocol). This is what makes web servers so scalable.
- The simplest thing a web server can serve is a static file. It simply reads the file from a local disk and streams the bytes of the file contents to the client.
- For example, a browser might request /images/profile.jpg and the server reads that file relative to it's document root (the directory that is the base of all static resources), say /web/images/profile.jpg (here /web is the docroot and /images/profile.jpg is the request path).
- But programmers can also provide dynamic endpoints - routes or paths that when requested, server runs programs to process the request and generate responses.
- The most primitive way to implement dynamic endpoints is the CGI (common gateway interface), where a standalone program is started for each incoming request, and the input parameters are passed as environment variables, while the output of the program becomes the HTTP response.
- A website is a collection of pages under a single domain. For example, spinspire.com is a website/domain with many pages.
- A single web server does not typically serve only a single web site. It has several domain-docroot combinations known as virtual servers. For example, you can run a single instance of nginx and have these two virtual servers in its configuration:
  ```nginx
  server {
    server_name spinspire.com www.spinspire.com;
    root /var/www/spinspire.com/html;
    ...
  }
  server {
    server_name learn.spinspire.com;
    root /var/www/learn/html;
    ...
  }
  ```

## HTTP - the communication protocol

- The client and the server use the HTTP protocol (Hypertext transfer protocol) to communicate with each other. It is a plain-text protocol and is fairly easy to read and understand.
- Client connects, sends a request. It need not close the connection immediately, as it will likely send more requests -- some for the same page, and some for subsequent pages.
- Server returns a response on the same connection (you can see the request-response pairs in your browser Dev Tools).
- The request is always for a URL (Uniform Resource Locator) -- the address you enter into your browser's address bar. Example:

  `https://www.spinspire.com/learn?course=webdev&cohort=fall-2021#footer`

- Explanation of the example above (see this from MDN)
  - `https:` the scheme or protocol
  - `www.spinspire.com`: domain name
  - `/learn`: URI path
  - `?course=webdev&cohort=fall-2021`: query string
  - `#footer`: fragment, a location within the page
- The query string contains one or more parameter name/value pairs, prefixed with `?` separated by `&`. The parameter values are "URL-encoded"
- HTTP request starts by specifying the HTTP protocol version
  - the path + query string (e.g. `/learn?course=webdev&cohort=fall-2021`)
  - the request method (`GET`, `POST`, etc)
  - Sends several headers (e.g. `User-Agent: Mozilla` the name of the browser making this request)
  - Finally, if the request has a body (`GET` doesn't, `POST` does), then that is sent as a stream of bytes.
- HTTP response consists of:
  - Status code: indicates success, failure, and reason for success/failure. Example: `200 success`, `404 not found`, `301 permanent redirect`, `302 temporary redirect`, `500 internal server error`, `401 authentication required`, `403 unauthorized`, etc.
  - Response headers (which are very similar to request headers), such as `Content-Type: text/html`
  - Response body: A stream of bytes.