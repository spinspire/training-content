---
title: Conditional Statements and Loops
author: Christian Crawford
category: language
references:
  "Javascript Loops": https://www.w3schools.com/js/js_loop_for.asp
  "Javascript Conditionals": https://www.w3schools.com/js/js_if_else.asp
---

## Conditional Statements
- When you want to execute code only under certain circumstances, you should use conditional statements.

## If statement
- When you want to conditionally execute some code you will wrap it in an if statement.

  ```javascript
    let isLoading = true;
    
    if(isLoading) {
      console.log('Currently loading...');
    }
  ```
- The console.log will only be executed if the `isLoading` variable evaluated to a truthy value.
  
## If else statement
  - Similar to the if statement except that you have an additional block (else statement) where you can execute code if the condition is not met (or the condition is false).
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

## Else if statement
- An else if statement is used to make a new condition if the first condition (if statement) is determined to be false.
- You use the else if statement in conjunction to the if (or if esle) statement. 
  
```javascript
const dogsOwned = 4;

if(dogsOwned < 4) {
  console.log('I have less than 4 dogs');
} else if (dogsOwned = 4) {
  console.log('I have 4 dogs');
} else {
  console.log('I have more than 4 dogs');
}  
```
- To summarize, what is this code saying?
- "If" the first condition (dogsOwned < 4) is true, execute this code.
- "Else if" the first condition is false and the second condition (dogsOwned = 4) is true, execute this code.
- "Else" both conditions are falsem execute this code.
  
## Switch statement
  - If you have many cases to check against, you should use a switch statement. 
  - Essentially, the value of the expression (whatever you enter for food in the example) will be compared to the value of each case. 
  - Once there is a match, the code associated with that case will be executed.
  - Lastly, the switch statement should include a `default` case, which happens when none of the other cases match.
  - Each case block should also generally include a `break` after the case to break out of the switch block.

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
  - Additionally, you can have multiple cases within a code block if they use the same code.
  
```javascript
  switch (food) {
    case soda:
    case juice:
      text = "I don't like water";
      break;
    default:
      text = "I love water";
  }
  ```
  - \***Note:** If the `break` is ommited the system will continue checking other conditions until it finds a break.

## Loops
- When you want to iterate over a collection of items or repeat until a certain condition is met.
## For loop
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
  - The loop will continue to iterate until the condition (i < 5) evaluates to `false`.
    - In this case `i < 5;` means that it will continue until `i` is greater than 5.
  - `i++;` will increment the variable `i` after each time the loop is executed.
  - **Note**: More advanced versions of the for loop exist and some will be covered in other sections.
## While loop
  - The loop will continue to be executed as long as the condition evaluates to true.
  
  ```javascript
  let isDone = false;
  let i = 0;

  while(!isDone) {
    if(i > 5) {
      isDone = true;
    } else {
      i++;
      console.log(i) 
      // Will show: 1, 2, 3, 4, 5, 6. Will stop after i > 5
    }
  }
  ```
## Do While loop
  - Similar to a while loop, but differs in that it executes the code at least once before it checks the condition to determine whether or not to iterate.
  ```javascript
  let x = 10;

  do {
    x--;
    console.log(x); 
    // Will appear as 9 cause we are decrementing it once before checking if x < 5. 
    // Since it is not, the code stops executing.
  } while(x < 5);
  ```