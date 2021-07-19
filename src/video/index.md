---
title: SpinSpire YouTube Channel
layout: default.njk
---
{% macro ytvid_excerpt(vid) %}
  {% set _url = ('https://youtube.com/watch?v=' + vid.id.videoId) if vid.id.kind === "youtube#video" else ('https://youtube.com/playlist?list=' + vid.id.playlistId) -%}
  <a class="col" href="{{ _url }}" target="_blank" style="text-decoration: none; color: inherit">
  <div class="card mt-2 mb-2">
    <img class="card-img-top" src={{ vid.snippet.thumbnails.high.url }} alt="YouTube thumbnail">
    <div class="card-body">
      <h5 class="card-title">{{ vid.snippet.title | safe }}</h5>
      {%- if vid.snippet.description -%}
        <p class="card-text">{{ vid.snippet.description }}</p>
      {%- endif -%}
    </div>
  </div>
  </a>
{% endmacro %}

We love to share knowledge by publishing videos, tutorials, and screencasts to the [SpinSpire YouTube channel](https://youtube.com/spinspire). So please subscribe.

## Videos with extra writeups

But now, the same videos are available with **extra show notes, written explanation, and code snippets**. Enjoy!

<div class="row row-cols-sm-2 row-cols-md-3">
{% for page in collections.all -%}
  {% if r/^\/video\/.+/.test(page.url) -%}
  <a href={{ page.url | url }} style="text-decoration: none; color: inherit">
  <div class="card col">
    <img class="card-img-top" src="https://i.ytimg.com/vi/{{ page.data.ytvid }}/hqdefault.jpg" alt="YouTube thumbnail">
    <div class="card-body">
      <h5 class="card-title">{{ page.data.title }}</h5>
      {%- if page.data.description -%}
        <p class="card-text">{{ page.data.description }}</p>
      {%- endif -%}
    </div>
  </div>
  </a>
  {% endif %}
{% endfor %}
</div>

---

## Playlists

<div class="row row-cols-sm-2 row-cols-lg-3">
{% for vid in playlists -%}
  {% if not collections.videos[vid.id.playlistId] -%}
  {{ ytvid_excerpt(vid) }}
  {%- endif %}
{% endfor %}
</div>

## Other Videos

<div class="row row-cols-xs-1 row-cols-sm-2 row-cols-lg-4">
{% for vid in videos -%}
  {% if not collections.videos[vid.id.videoId] -%}
  {{ ytvid_excerpt(vid) }}
  {%- endif %}
{% endfor %}
</div>