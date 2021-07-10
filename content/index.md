---
title: Practical JavaScript App Development
author: SpinSpire Team
eleventyExcludeFromCollections: true
sections:
  untagged: Language fundamentals
  dhtml: DHTML (Dynamic HTML)
  ajax: AJAX
  svelte: Svelte
---

*The fastest way from zero to JavaScript apps*

Okay, the idea is to quickly get to a point when you can write full-stack web apps using JavaScript on both front-end (browser) and back-end (nodejs). In order to do that, you need to learn the following:

1. JavaScript language
2. DHTML - the hard way to manipulate the DOM
3. AJAX - Asynchronously fetch data
4. Svelte - the easy way to manipulate the DOM and do much more
5. JavaScript in the server (NodeJS)

# Modules

{% for key, label in sections %}
- {{ label }}
  {% for page in collections[key] | sort(false, false, 'data.weight') %}- [{{ page.data.title }}]({{ page.url | url }})
  {% endfor %}
{% endfor %}