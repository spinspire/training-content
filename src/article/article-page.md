---
pagination:
    data: articles
    size: 1
    alias: article
permalink: "{{ article.alias }}/"
eleventyComputed:
  title: "{{ article.title }}"
  author: "{{ article.uid.name }}"
  date: "{{ article.changed }}"
---

<div id="carousel-imgs" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
  {% for image in article.field_image -%}
    <button type="button" data-bs-target="#carousel-imgs" data-bs-slide-to="{{ loop.index0 }}" class="{{'active' if loop.index0 == 0}}" aria-current="true" aria-label="{{ image.title }}"></button>
  {% endfor %}
  </div>
  <div class="carousel-inner">
  {% for image in article.field_image -%}
    <div class="carousel-item {{'active' if loop.index0 == 0}}">
      <img src="{{ site.parent + image.url }}" class="d-block w-100" alt="{{ image.title }}">
      <div class="carousel-caption d-block">
        <h2 class="display-1">{{ image.title }}</h2>
      </div>
    </div>
  {% endfor %}
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-imgs" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel-imgs" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
<div>{{ article.body | safe }}</div>

{% if article.field_tags.length %}
---
tags: {% for tag in article.field_tags %} {{ tag.name }}{% endfor %}
{% endif %}