---
title: Generate downloadable files in the browser using Blob and URL API
description: Learn to use the `Blob` API to create files within the browser and make them downloadable using the `URL` API.
author: Jitesh Doshi
ytvid: _HZdLuGL8Ho
---

It is pretty common to provide a downloadable static file such as pdfs, csv's, etc... But it is possible to dynamically create these files on the server through a PHP, NODE.Js, or some other server side-routing page. Did you know you can also generate files on the client side? Never touching the browser and only creating it dynamically in the browser? What is the benefit of that? Saves developers time, it's faster for the user, and it uses the client's computing power.

So how do we accomplish this? Blob and URL API. So, first set up your VS code with an index.html, using "!" then "tab" to create a pre-formatted html file. After giving your html a title, you need to give an `<a id="..." href="...">download</a>` within your html body, to provide a link to the file. 

Next, we need to enter a `script` tag within the body with a `const` declared, getting the id of the `<a>` tag by `document.getElementById`. Then, we create a `Blob` with the first parameter being an array and a second parameter of `type`. The array can take multiple strings and the type can be text for this example. From this `Blob`, you must create an `href` from the id of the `<a>` tag that will equal to an `URL`. This `URL` will create an objectURL of the blob, ultimately creating a hyperlink for your `<a>` tag's title ("download" in the previous paragraph within the `<a> tag`).

```javascript
const al = document.getElementById("al");
const blob1 = new Blob(["Hello", "Download"], {type: "text/plain"})
al.href = URL.createObjectURL(blob1);

```

If you click on your link you just created, it will take you to a page that will say "Hello Download." But it's not downloading anything right now, just opening another page. To fix this, in the `<a>` tag, give it an attribute of download: `<a id="..." download="file.txt" href="...">download</a>`. The download file name is whatever you want to call it, followed by the appropriate ."text", ."csv", etc...

So, if you click the hyperlink now, it will download a text file (assuming you did .txt) in your default text editor (most likely VS code) with "Hello Download" displayed.

What about a CSV file? After creating data in your html, we would enter the data into our `script` as a new `const`. In this example, we will use 3 columns with 3 rows of numbers. To make this downloadable, we must write a `function` that will concat these values into a csv value. This function will take our rows and map them, joining every cell with a "," as a seperator, then joining every row with a new line, creating a csv. Make sure the file ends in ".csv" ths time. Note, we also changed the id cause were using a different `<a>` tag and this is our second blob, so we change it to blob2. We don't have to add a text type to our blob2 because the file is a .csv and the computer understands what that means, but adding type .csv wouldn't hurt, just unneccessary. 

```javascript 
const al = document.getElementById("al2");
const blob2 = new Blob([makeCSV(data)]);
al.href = URL.createObjectURL(blob2);
const data = [
    ["Col1","Col2","Col3"],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function makeCSV(rows) {
    return rows.map(r => r.join(",")).join("\n");
}
```
Opening the CSV hyperlink will open in the number's application on mac, or whatever your default spreadsheet editor is. This is all in the browser with no framework on the client side, additionally there is no server side action going on here. Very powerful indeed!