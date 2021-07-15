---
title: First Project
author: Jitesh Doshi
category: start
references:
  "MDN: HTML": https://developer.mozilla.org/en-US/docs/Web/HTML
  "MDN: CSS": https://developer.mozilla.org/en-US/docs/Web/CSS
  "MDN: JavaScript": https://developer.mozilla.org/en-US/docs/Web/JavaScript
---

Let's create a simple project using the three fundamental building blocks of web front-ends - HTML, CSS, and JavaScript.

1. Start VS Code, and "Open ..." or "Open Folder ..." to create and open a project folder such as `~/dev/learn/project-1` (where `~` represents your *home* directory).
2. At the base of your project folder, create a new file named `index.html`
3. In that `index.html` file, type <kbd>!</kbd> followed by <kbd>Tab</kbd> key. This activates Emmet and generates a basic boilerplate for an HTML page.
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <!-- cursor here -->
    </body>
    </html>
    ```
4. Edit document title to something appropriate, e.g. `<title>my first project</title>`.
5. Add a heading-1, e.g. `<h1>My first project</h1>` as the first child of `<body>`.
6. Add some interesting content within the `<body>` below the `<h1>`.
7. Now view it using the *Live Server* extension - Right-click on the file and select "Open with Live Server".
8. Since you're using Live Server, you can make changes to the file and they will be shown in the browser as soon as you save.
9.  As the last child of `<head>`, add a stylesheet to the page (tip: use Emmet shortcut `link:css`<kbd>Tab</kbd>):
    ```html
    <link rel="stylesheet" href="style.css">
    ```
10. Create another file named `style.css` and put the following in it (tip: just following the link to the file in VS Code will help you create that file with the correct name and path).  
    ```css
    /* global settings */
    :root {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      /* css variables */
      --my-contrast-bg-color: lightgray;
      --my-shadow-color: black;
    }
    /* slightly contrasting background color */
    html {
      background-color: var(--my-contrast-bg-color);
    }
    body {
      background-color: white; /* slightly contrasting background color */
      max-width: 60rem; /* limited width */
      margin-left: auto; /* centers it */
      margin-right: auto; /* centers it */
      padding: 2rem; /* better spacing */
      box-shadow: 0 0 1rem var(--my-shadow-color); /* pop it! */
    }
    ```
    This should give a nice *pop* to your page.
11. Finally, add a JavaScript file named `app.js` to the page, as the last child of `<body>`.
    ```html
    <script src="app.js"></script>
    ```
12. Now create this `app.js` file (using the tip above) and put the following in it:
    ```javascript
    const element = document.querySelector("h1");
    console.log("The first H1 of this page contains: " + element.innerText);
    ```
13. So the final state of your `index.html` should resemble this:
    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>my first project</title>
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <h1>My First Project</h1>
      <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah</p>
      <script src="app.js"></script>
    </body>

    </html>
    ```
14. Take a look at your browser's `Developer Tools`>`Console` and you should see the above message with the correct contents of your `h1` tag. Change the contents of `h1` and see if the changes show both in the browser viewport as well as `Developer Tools`>`Console`.

Congratulations! You have created your first web project.

Please note that both CSS and JavaScript can be embedded inside the HTML file using `<style>` tag for CSS, and `<script>` tag without `src` attribute for JavaScript. But *most* of the time it is appropriate to put them in a their own files.