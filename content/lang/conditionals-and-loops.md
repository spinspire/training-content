---
title: Conditional Statements and Loops
author: Christian Crawford
category: language
---

## Conditional Statements
When you want to execute code only under certain circumstances you should use conditional statements.
### If statement
  - When you want to conditionally execute some code you will wrap it in an if statement.
  ```javascript
    let isLoading = true;
    
    if(isLoading) {
      console.log('Currently loading...');
    }
  ```
  - The console.log will only be executed if the `isLoading` variable evaluated to a truthy value.
  <br>
### If/Else statement
  - Similar to the if statement, except that you have an additional block where you can execute code if the condition is not met.
  ```javascript
  const temperature = 85;

  if(temperature > 70) {
    // Temperature is above 70.
    console.log('The temperature is above 70.');
  } else {
    // Temperature is 70 or below.
    console.log('The temperature is below 70.');
  }
  ```
  - If the temperature is above 70 it will execute the code in the if block, otherwise it will execute the code in the else block.
  <br>
### Switch statement
  - If you have many cases to check against you should use a switch statement. 
  - Each case block should generally include a `break`*
  - The switch statement should include a `default` case which happens when none of the other cases match.
  ```javascript
  const food = 'salad';
 
  switch (food) {
    case 'crab':
      console.log('The taste of the sea 🦀');
      break;
    case 'pizza':
      console.log('A delicious 🍕 pie.');
      break;
    default:
      console.log('Enjoy your meal');
  }
  ```
  - \***Note:** If the `break` is ommited the system will continue checking other conditions until it finds a break.

## Loops
When you want to iterate over a collection of items or repeat until a certain condition is met.
### For loop
  - A for loop is composed of three parts, serparated by a semicolon (`;`).
    - iterator variable
    - condition
    - iteration modifier
  ```javascript
  for(let i = 0; i < 5; i++) {
    console.log(`The value of i is: ${i}`);
  }
  ```
  - `let i = 0;` creates and initializes the iterator variable.
  - The loop will continue to iterate until the condition evaluates to `false`.
    - In this case `i < 5;` means that it will continue until `i` is greater than 5.
  - `i++;` will increment the variable `i` after each time the loop is executed.
  - **Note**: More advanced versions of the for loop exist and some will be covered in other sections.
### While loop
  - The loop will continue to be executed as long as the condition evaluates to true.
  ```javascript
  let isDone = false;
  let i = 0;

  while(!isDone) {
    if(i > 5) {
      isDone = true;
    } else {
      i++;
    }
  }
  ```
### Do While loop
  - Similar to a while loop, but differs in that it executes the code at least once before it checks the condition to determine whether or not to iterate.
  ```javascript
  let x = 10;

  do {
    x--;
    console.log(x);
  } while(x < 5);
  ```