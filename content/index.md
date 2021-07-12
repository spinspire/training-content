---
title: Practical JavaScript App Development
author: SpinSpire Team
references:
  "MDN: Quick JS tutorial": https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
  "MDN: HTML": https://developer.mozilla.org/en-US/docs/Web/HTML
  "MDN: CSS": https://developer.mozilla.org/en-US/docs/Web/CSS
  "MDN: JavaScript": https://developer.mozilla.org/en-US/docs/Web/JavaScript
eleventyExcludeFromCollections: true
sections:
  start: Getting Started
  untagged: Language fundamentals
  dhtml: DHTML (Dynamic HTML)
  ajax: AJAX
  svelte: Svelte
---

*The fastest way from zero to JavaScript apps!*

Okay, the idea is to quickly get to a point when you can write full-stack web apps using JavaScript on both front-end (browser) and back-end (NodeJS). In order to do that, you need to learn the following things:

1. JavaScript concepts
2. DHTML - the hard way to manipulate the DOM
3. AJAX - exchange data between the browser and the server
4. Svelte - the easy way to manipulate the DOM and do much more
5. Server-side JavaScript (NodeJS) to store/retrieve data

# Modules

{% for key, label in sections %}
- {{ label }}
  {% for page in collections[key] | sort(false, false, 'data.weight') %}- [{{ page.data.title }}]({{ page.url | url }})
  {% endfor %}
{% endfor %}