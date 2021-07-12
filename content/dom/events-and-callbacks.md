---
title: DOM events and callbacks
author: Jitesh Doshi
category: dhtml
weight: 5
references:
  "MDN: DOM events": https://developer.mozilla.org/en-US/docs/Web/Events
  "MDN: FormData API": https://developer.mozilla.org/en-US/docs/Web/API/FormData
---

The DOM in a web page generates a multitude of events (e.g. `click`, `keydown`, `load`, etc.) for web apps to respond to. The developer can write JavaScript functions (i.e. "callbacks") and attach them to DOM events such that the callback runs every time that event fires.

## Simple Event Callback

Here's a simple example:

1.  Create a button somewhere on your page with `id` of `btn1`. Make sure it is a standalone button, and *not* a part of a `form`.
2.  Add the following JavaScript code to the page. It must run *after* the button is loaded into the page.
    ```javascript
    const btn1 = document.getElementById("btn1"); // there must be a button on the page with this id
    let counter = 0; // a counter to count clicks
    btn1.addEventListener("click", function(event) { // the callback gets the DOM `event` as parameter
      const target = event.target; // the DOM element that is the "target" of the event (button that was clicked)
      counter++; // increment the counter
      const message = `You clicked ${target.id} ${counter} time${counter>1 ? 's' : ''}`;
      target.innerText = message; // update DOM
    });
    ```
3.  Test it. It should work.
4.  Now wrap the button in a `form` tag, like this:
    ```html
    <form>
      <button id="btn1">Click Me!</button>
    </form>
    ```
5.  Test it again. This time you should see something strange. The button text does change for a brief moment, but then goes back to the original ("Click Me!") soon after. Why?
6.  The reason is that since this button is a part of a `form`, right after executing your callback, it perform the button's default action, which is to *submit* the form that it is a part of. And since the form is getting submitted, the whole page refreshes, and thus the button text goes back to the original.
7.  To fix this, all you have to do is to prevent the default action of the button from running. This can be accomplished with `preventDefault` method of the fired event. Call that method on the event before returning, by adding the following line to the beginning of the callback function.
    ```javascript
    btn1.addEventListener("click", function(event) { // the callback gets the DOM `event` as parameter
      event.preventDefault(); // don't perform the default action of this event
      // ... code to respond to the event ...
    });
    ```
8.  Test it again. This time it should work as intended.

## Form Submit Example

In modern JavaScript apps, it is very common to convert a traditional `form` from submitting normally (and refreshing the whole page) to intercepting the submission, performing client-side validations, and then sending form inputs to server using [AJAX](../../ajax/async-http-requests) and handling the response, all without refreshing the page. So let's give that a try.

1.  Create a `form` with some inputs and an `ol` to show the submissions. Feel free to change the inputs from what is shown below.
    ```html
    <!-- input -->
    <form id="test-form">
      <input name="firstName" type="text" placeholder="First Name" required>
      <input name="lastName" type="text" placeholder="Last Name" required>
      <input name="dob" type="date" placeholder="Date of Birth">
      <select name="employment" required>
        <option value="">Employment Status</option>
        <option>Salaried</option>
        <option>Self-Employed</option>
        <option>Retired</option>
        <option>Unemployed</option>
      </select>
      <div>
        <button>Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
    <!-- output -->
    <fieldset>
      <legend>Submissions</legend>
      <ol id="submission-list">
        <!-- submissions will appear here -->
      </ol>
    </fieldset>
    ```
2.  Note that ...
    * We gave id's to the elements that we'll need to manipulate from JavaScript code.
    * In order to be considered a part of the form-data, an `input` or `select` must have a `name` attribute.
3.  Now, include the following JavaScript code somewhere below the above HTML.
    ```javascript
    const submissions = document.getElementById("submission-list"); // grab the output area
    document.getElementById("test-form").addEventListener("submit", function(e) { // grab form and attach listener
      e.preventDefault(); // prevent submission (default action)
      const form = e.target;
      const formData = new FormData(form); // construct FormData from form
      const data = Object.fromEntries(formData.entries()); // construct a regular JS object from formData
      // client-side validation
      if(data.firstName.length < 3 || data.lastName.length < 3) {
        alert("First Name and Last Name must be at least 3 characters long");
        return; // Validation failed. Abort.
      }
      const li = document.createElement("LI");
      li.innerText = JSON.stringify(data); // convert `data` object to JSON string and display it
      submissions.append(li);
    });
    ```
4.  Note that ...
    * We are attaching to the `submit` event of the `form` and not `click` event of the `button`. This is a more generic and robust approach.
    * As always, we call `preventDefault` to prevent the full page refresh.
    * We construct a `FormData` object, which extracts all the input values from the form.
    * This `FormData` object is opaque (hides its internals) so we use `entries` method to extract the input values, and then `Object.fromEntries` to construct a regular JavaScript object.
    * We perform client-side validation on the submitted `data`, and abort if validation fails.
    * This `data` object can now be used to send to the server. Or in our case, we just convert it to JSON string and append it as `li` to the pre-existing `ol`.
5. There are some other advanced concepts such as event bubbling that we haven't covered here. But you should [learn more](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) about them.