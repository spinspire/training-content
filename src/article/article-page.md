---
pagination:
    data: articles
    size: 1
    alias: article
permalink: "{{ article.attributes.path.alias }}/"
---

<div>{{ article.attributes.body.processed | safe }}</div>
