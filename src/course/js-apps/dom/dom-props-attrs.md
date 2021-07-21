---
title: Attributes and Properties 
author: Christian Crawford
category: dhtml
references:
  "W3 Schools: DOM Element Object": "https://www.w3schools.com/jsref/dom_obj_all.asp"
---

Elements (nodes) of the DOM often have attributes and properties associated with them. Both values serve similar purposes and often have identical or at least similar names.  The browser parses the HTML of the page and generates the DOM. Attributes will automatically be converted to their corrisponding property (if one exists).

**Note**: Not every attribute has a corresponding propery and vice-versa.

## Attribute
When you write HTML you can add attributes to the tags themselves.
```html
<input class="form-control" id="firstName" name="fName" type="text" size="55">
```
In the example above, there are five attributes on the input tag: *class, id, name, type, and size*

- There is a list of pre-existing attributes, however an attribute can be named anything that you want. The browser will always be able to parse and manipulate it.
- Attributes can be retrieved and set using the getAttribute() and setAttribute() methods in JavaScript.
## Property
The DOM is just a JavaScript object so properties behave the same as with any object. They can be simple primitive values (number, string, boolean, etc) or objects and methods.
```javascript
// Sets (or overrides) the value of the id on the body tag.
document.body.id = 'body-tag';
document.body.foo = function() {
  alert('bar');
}
// Opens an alert popup with 'bar' as the text.
document.body.foo();
```
<br>

### Common properties
1. `innerText`
    ```javascript
    const elem = document.querySelector('h1#page-title');
    console.log(elem.innerText); // prints "Hello World".
    elem.innerText = 'New Title';
    console.log(elem.innerText); // prints "New Title".
    ```
- You can fetch and alter the text value of any element through the `innerText` property
2. `classList`
    ```javascript
    const listElem = document.querySelector('ul.main-menu');
    listElem.childNodes.forEach((item, idx) => {
      if(idx % 2 === 0) {
        item.classList.add('even');
      } else {
        item.classList.add('odd');
      }
    });
    ```
- The `classList` property contains a list of the classes of the element
  - Classes can be added and removed using their respecting methods (add and remove).
3. `style`
    ```javascript
    document.querySelectorAll('p').forEach(elem => {
      elem.style.color = 'red'; // set the text color to red
      elem.style.padding = '12px'; // add 12px of padding
      elem.style.fontWeight = 'bold'; // bold the text
    })
    ```
- Every element has a style property which contains all possible css properties
- Individual properties can be accessed and set by addressing the property in the `style` object
  - Property names are camel case (ex: margin-bottom --> marginBottom)
4. `parentNode` and `children`
    ```html
    <body>
      <script>
        const elem = document.querySelector('#main-menu > li');
        // returns the parent of the specified element.
        const parentElem = elem.parentNode;
        // returns all immediate children of the specified element.
        const childrenNodes = document.body.children
      </script>
      ...
      <ul id="main-menu">
        <li><a href="#one">One</a></li>
        <li><a href="#two">Two</a></li>
        <li><a href="#three">Three</a></li>
        <li><a href="#four">Four</a></li>
      </ul>
      ...
    </body>
    ```
<br>

## Differences
1. Attribute values are always strings, whereas properties have varied types. 
2. Property names are case-sensitive, whereas attribute names are not.