---
title: SpinSpire Articles
pagination:
  data: articles
  size: 20
---

{% for article in pagination.items -%}
- [{{ article.title }}]({{ article.alias | url }}/)
{% endfor %}

<nav aria-label="Page navigation">
  <ul class="pagination">
  {%- for pageEntry in pagination.pages %}
    <li {% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page" class="active page-item" {% endif %}    class="page-item">
      <a href="{{ pagination.hrefs[ loop.index0 ] | url }}" class="page-link">Page {{ loop.index }}</a>
    </li>
  {%- endfor %}
  </ul>
</nav>