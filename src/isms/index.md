---
title: Crazy ideas to live by
---

<div id="carousel-isms" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
  {% for slide in slides -%}
    <button type="button" data-bs-target="#carousel-isms" data-bs-slide-to="{{ loop.index0 }}" class="{{'active' if loop.index0 == 0}}" aria-current="true" aria-label="{{ slide.title }}"></button>
  {% endfor %}
  </div>
  <div class="carousel-inner">
  {% for slide in slides -%}
    <div class="carousel-item {{'active' if loop.index0 == 0}}">
      <img src="{{ slide.image | url }}" class="d-block w-100" alt="{{ slide.title }}">
      <div class="carousel-caption d-block">
        <h2 class="display-1">{{ slide.title }}</h2>
      </div>
    </div>
  {% endfor %}
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-isms" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel-isms" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>

Images credit unsplash.com.