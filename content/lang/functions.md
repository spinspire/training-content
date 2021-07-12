---
title: Functions, Lambdas, IIFE, and pass-by-value
author: Jitesh Doshi
category: language
references:
  "MDN: Function Expression": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
  "MDN: IIFE": https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  "MDN: 'apply' function reference": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
---

Like most other programming languages, JavaScript supports abstracting (potentially reusable) chunks of code into "functions". But additionally, JavaScript also support "lambda expressions". We will explain what these two mean. They are similar, and yet there are subtle differences. Stay tuned ...

## Functions

Let's start with an example:

```javascript
// function definition
function compare(num1, num2) {
  if(num1 > num2) {
    return 1;
  } else if(num1 == num2) {
    return 0;
  } else {
    return -1;
  }
}
// function calls
const n1 = 6, n2 = 5;
const c1 = compare(n1, n2); // c1 is now 1
const c2 = compare(n1, n1); // c2 is now 0
const c3 = compare(n2, n1); // c3 is now -1
```

As seen in the example above, a function ...

1.  Is a chunk of code with definite boundaries (begin and end) defined once.
2.  Potentially *called* any number of times (if called more than once, it would be considered reusable).
    * There is a clear distinction between a *function definition* and a *function call*.
    * The line of code that calls or invokes a function is called *caller* while the function itself is called *callee* in that context.
3.  Has a specific *function* or responsibilities, e.g. this one compares two numbers.
4.  Receives zero or more named *parameters*, e.g. `num1` and `num2` above.
5.  Performs some computation, i.e. the *body* of the function.
6.  At some point, the function *returns*, i.e. terminates its own execution and returns to execution contexts of the *caller*.
    * Sometimes it returns a value, e.g. 1, 0, or -1 above.
    * It could also omit returning a value, in which case, the return value is `undefined`.
    * If you want to return multiple values, all you have to do is return one of the composite types (i.e. array or object)
7.  The function call and its returned value can be used as part of an expression (e.g. `3 * compare(9, 8)`). In our example above, we assigned the returned value to `c1`, `c2`, or `c3`, which is but an *assignment expression*.
8.  In the case above, it has a name. But that's not always the case. it is possible to have functions without names (anonymous functions).
9.  The caller context passes in *actual parameter values* that get assigned to the *formal parameters* once you enter the callee context. In our example, `n1` and `n2` (with values 6 and 5) are actual parameters that are assigned to `num1` and `num2`, the formal parameters, when execution context enters the function.

## Pass-by-value v/s pass-by-reference

You can think of the formal parameters (`num1` and `num2`) as local variables in the function scope. Assigning new values to them doesn't affect the value of actual parameters (`n1` and `n2`). For example, if you added the following code somewhere in the function above, it would affect the value of `num1`, but not of `n1`.
```javascript
num1 = 999;
```

This behavior is called *pass-by-value* (as opposed to *pass-by-reference*), where only a copy of the value of the actual parameter is passed, not the parameter variable from the caller context. In the code above, if assigning a new value to `num1` affected the value of `n1`, then that would be called *pass-by-reference*. JavaScript doesn't do that. It does *pass-by-value*.

But then, there are some scenarios under which it may *look like* you're getting pass-by-reference behavior (you're not). Here's an example:

```javascript
function upgradeCustomer(customer) {
  customer.status = "premier";
}

const cust1 = {status: "standard"};
console.log("customer", cust1);
upgradeCustomer(cust1);
console.log("customer", cust1);
```

If you run the code above (by pasting it into `Developer Tools`>`Console`), it will first print a status of "standard" and then of "premier". Does that mean that assigning a new value to `customer.status` inside the function is changing the value of `cust1`? It may look like that, but technically that's not the case. It is not changing the value of `cust1`, it is only changing the value of a *property* (`status`) of the *object* that `cust1` (and later `customer`) is referencing. If instead of reassigning to `customer.status` had we reassigned to `customer` itself, it would have had no effect on `cust1` -- and that's why this is still *pass-by-value*.

Then why are we getting the illusion of *pass-by-reference*? That's because objects (and arrays) are what we call "reference types". Meaning, variables of these types simply *point to* the object or the array in memory, they don't actually carry the entire object or array as value.

[TODO] - provide a graphic.

Certain languages (e.g. PHP and C++) do provide the option to pass-by-reference, while JavaScript doesn't. Instead it provides *reference types*. And if you do want to compute a new value for a non-reference type (e.g. number) then why not just *return* that new value from the function.

## Anonymous Functions and IIFE

JavaScript allows omitting the *name* of the function, like so:

```javascript
function() {
  // ... some code
}
```

This is called anonymous function.  The only problem is, how would you call such a function? There are a few ways:

1.  Assign the anonymous function to a variable, and then invoke or call that variable like a function.
    ```javascript
    // assign the anonymous function to a variable
    const f1 = function() {
      // ... some code
    };
    f1(); // *call* the variable as a function
    ```
2.  But in most cases, we don't have to do this (assign an anonymous function to a variable), because most of the time we are simply passing the anonymous function into the invocation of another function as a parameter, like so:
    ```javascript
    document.addEventListener(function (event) { // event callback
      // respond to event
    });
    ```
    As you can see above, there's no need to assign the anonymous function above (event callback) to a variable since it, as a value, is getting passed to `addEventListener` as a function paramter.
3.  The other way lies in the fact that the *function definition* in JavaScript is technically an *expression*. Yes, `function(){}` is actually an expression that has a value! That shouldn't really be surprising since we just assigned the value of that expression to `f1` above. So we could eliminate the `f1` variable by combining the *function definition* expression with the *function call* expression, like so:
    ```javascript
    (function() {
      // ... some code
    })(); // IIFE
    ```
    The above is called an Immediately Invoked Function Expression (IIFE), because we are defining and invoking a function in a single expression. We did have to wrap the *function definition* in parenthesis (i.e. `()`) because otherwise the last pair of `()` would try to *invoke* the function before it was *defined*. By wrapping the function definition in `()` we are forcing it to take precedence over function invocation.

    So why would anyone want to write code like that? The short answer is -- This is a better than writing a ton of code outside the IIEF (at global scope) because it does not pollute the global namespace that variables from this code. If that doesn't make any sense to you, then just wait. We'll explain when there's a need to use IIFE.

## Lambda Expressions

A lambda expression (aka "arrow function") is very similar to an anonymous function, and can then be invoked like any function (but there are subtle differences).

Here's what a lambda expression looks like:

```javascript
// lambda expression 
(param1, param2) => {
  // some code ...
}
```

This is SOOOOOO similar to ...

```javascript
// anonymous function
function(param1, param2) {
  // some code ...
}
```

All we did was remove word `function` and placed a `=>` (called *fat arrow*) between the parameter list and the body. Yup, that's pretty much what we did.

If the body of the lambda expression is just a single expression, they can be simplified a lot, like so:

```javascript
(param1, param2) => expr; // where `expr` is ANY valid expression, such as (param1+param2)
param1 => expr; // a single parameter does not need parenthesis
() => expr; // zero parameter does need parenthesis
() => { // with a body
  return expr; // equivalent to the previous example, the expression is the return value
};
```

In all of the above cases, the value of `expr` is the return value of the lambda.

So what about the *subtle* differences? Aside from the fact that lambda expressions can sometimes be very concise, they can have no `this` reference, while functions can. What does that mean? Some other time. Out of scope for now. Other than that, lambda expressions and anonymous functions can be used interchangeably.

As a demonstration of the `this` difference, try out the code below. The first `apply` call will produce what you expect, second one won't.

```javascript
const f1 = function (param) {
  console.log("this", this);
  console.log("param", param);
}

const f2 = (param) => {
  console.log("this", this);
  console.log("param", param);
}

// first param to `apply` is `this`, second param is an array of callee function parameters
f1.apply("THIS for f1", ["param-value-for-f1"]);
f2.apply("THIS for f2", ["param-value-for-f2"]);
```