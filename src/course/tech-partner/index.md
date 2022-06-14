---
title: Successful technology solutions for business stakeholders
category: course
author: SpinSpire Team
# eleventyExcludeFromCollections: true
---

*How to go about recruiting the right technology partner to build your biztech solution?*

This short course or series of articles outlines a battle-tested approach to getting others to build technology solutions to your specification to support your business operations and drive business success.

...

# Modules

{% for pg in collections.category.biztech | sort(false, false, 'data.weight') -%}
{% if pg.url | startsWith(page.url) and pg.url !== page.url -%}
1. [{{ pg.data.title }}]({{ pg.url | url }})
{% endif %}
{% endfor %}