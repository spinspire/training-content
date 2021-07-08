---
Title: Attributes and Properties 
Author: Christian Crawford
---

# Attributes and Properties (DOM)
Elements (nodes) of the DOM often have attributes and properties associated with them. Both values serve similar purposes and often have identical or at least similar names.  The browser parses the HTML of the page and generates the DOM. Attributes will automatically be converted to their corrisponding property (if one exists).

### Attribute ###
When you write HTML you can add attributes to the tags themselves.
```html
<input class="form-control" id="firstName" name="fName" type="text" size="55">
```
In the example above, there are five attributes on the input tag: *class, id, name, type, and size*

- There is a list of pre-existing attributes, however an attribute can be named anything that you want. The browser will always be able to parse and manipulate it.
- Attributes can be retrieved and set using the getAttribute() and setAttribute() methods in JavaScript.
### Property ###
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
**Note**: Not every attribute has a corresponding propery and vice-versa.

### Differences ###
1. Attribute values are always strings, whereas properties have varied types. 
2. Property names are case-sensitive, whereas attribute names are not.