---
title: Logical Operators
author: Christian Crawford
---

In JavsScript conditions can be combined using and/or logic. 

### OR 
  - is denoted with '||'
  - At least one conditions must evaluate to true in order for the statement to be considered true.
  - If all conditions evaluate to false the statement is false.
  ```javascript
  if(name === 'john' || name === 'jane') {
    console.log('name was either john or jane');
  } 
  ```
### AND 
  - is denoted with '&&'
  - All conditions must evaluate to true in order for the statement to be true.
  - If a single condition evaluates to false the entire statement is false.
  ```javascript
  if(name === 'John' && age === 25) {
    console.log('Both conditions are true')
  } else {
    consol.log('One or more of the conditions evaluated to false')
  }
  ```
### NOT  
  - If you want to negate a condition you prefix it with '!'
  ```javascript
  if(user.role !== 'admin') {
    console.log('user does not have the admin role')
  }
  ```