---
title: Drupal administration, configuration, and development
category: course
author: SpinSpire Team
# eleventyExcludeFromCollections: true
categories:
  start: Getting Started
  content-management: Content Management
  admin: Administration
  site-building: Site Building
  development: Module Development
  theming: Theming
---

*From zero to Drupal mastery!*

Okay, the idea is to master all the important aspects of Drupal CMS in a fairly short time.

# Modules

{% for key, label in categories %}
- {{ label }}
  - coming soon ...
{#
  {% for page in collections.category[key] | sort(false, false, 'data.weight') -%}
  - [{{ page.data.title }}]({{ page.url | url }})
  {% endfor %}
#}
{% endfor %}