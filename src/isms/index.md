---
title: Crazy ideas to live by
---

{% for ism in isms -%}
<div class="ism position-relative">
  <img src="{{ ism.image | url }}" class="img-fluid" alt="{{ ism.title }}">
  <div class="title text-center text-white position-absolute bottom-0 start-50 translate-middle">{{ ism.title }}</div>
</div>
{% endfor %}

Images credit unsplash.com.