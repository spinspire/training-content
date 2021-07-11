---
title: Document Object Model (DOM)
author: Christian Crawford
tags: dhtml
weight: -1
references:
  "MDN: Intro to DOM": https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
  "Wikipedia: Docuemnt Object Model": https://en.wikipedia.org/wiki/Document_Object_Model
---

The DOM is a hierarchical representation of the HTML (and XML) of a page. It is represented as a tree with branches that end in nodes. These nodes can be manipulated to change the style, structure, and content of the document.

The DOM was designed to be independent of any one language, although it's most often used by JavaScript. The DOM API was created so that there would be a common, consistent way to interacting with it.

## Common DOM API Interfaces
This list below is not exhaustive, and other common interfaces will be discussed in later DOM related lessions.
  ### document.querySelector(*selector*)
  Finds and returns the first element that matches the given selector
  ```javascript
  // Returns the first H1 tag with the "page-title" id.
  document.querySelector('h1#page-title');
  ```
### document.querySelectorAll(*selector*)
  Finds and returns all elements matching the given selector.
  ```javascript
  // Returns all elements with a "table-row" class inside of an element 
  // tagged with the "table" class 
  document.querySelectorAll('.table .table-row');
  ```
### document.createElement(*tag name*, *[options]*)
  Creates a new HTML element based on the provided parameters
  ```javascript
  // Creates and returns a new 'ul' element.
  const list = document.createElement('ul');
  ```
### document.getElementById(*id*)
  Finds and returns the element with the given id.
  ```javascript
  // Returns the element with the 'user-profile-menu' id.
  document.getElementById('user-profile-menu');
  ```
### document.getElementsByClassName(*class*)
  Finds and returns all element with the given class.
  ```javascript
  // Returns the element(s) with the 'even' class.
  document.getElementsMyClassName('even');
  ```
### document.getElementsByTagName(*tag name*)
  Finds and returns all elements matching the given tag name.
  ```javascript
  // Returns all elements of type 'li'
  document.getElementsByTagName('li');
  ```