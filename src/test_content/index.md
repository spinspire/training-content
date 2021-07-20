---
title: TESTING DIR
---

This is a test page to test directory template creation.

{% for page in collections.category['video'] %}
- [{{ page.data.title }}]({{ page.url | url }})
{% endfor %}