---
title: Stay Curious
---

title - {__content.title}
<!-- _Welcome to { site.name }!_ -->
<pre>{
  JSON.stringify(Object.keys(__content.astro))
}</pre>

<pre>{__content.astro.source.length}</pre>



Some of our current offerings:

- [Courses](/course): Complete courses in development and other technical topics
- [Videos](/video): Video screencast tutorials on specific technical topics.
- [Articles](/article): Explainer texts on various technical topics.
- [Crazy ideas to live by](/isms): Our design/development philosophy in form of pithy expressions (SpinSpire-isms).

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-signup">
  Signup for our mailing list!
</button>

<div id="modal-signup" class="modal" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" style="height: 80vh">
      <!-- <iframe src=" site.emailSignup " class="h-100"></iframe> -->
    </div>
  </div>
</div>
