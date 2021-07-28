---
title: Stay Curious
author: SpinSpire team
---

_Welcome to {{ site.name }}!_

SpinSpire developers are some of the best in the industry. They are good communicators and love to share their learning with _customized_ training programs. Customized being the keyword here, because rather than giving you cookie-cutter training from prepared materials, we customize the training specifically for your company, employees, and the project they need the training for.

Some of our current offerings:

- [Courses]({{ '/course' | url }}): Complete courses in development and other technical topics
- [Videos]({{ '/video' | url }}): Video screencast tutorials on specific technical topics.
- [Articles]({{ '/article' | url }}): Explainer texts on various technical topics.
- [Crazy ideas to live by]({{ '/isms' | url }}): Our design/development philosophy in form of pithy expressions (SpinSpire-isms).

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-signup">
  Signup for our mailing list!
</button>

<div id="modal-signup" class="modal" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" style="height: 80vh">
      <iframe src="{{ site.emailSignup }}" class="h-100"></iframe>
    </div>
  </div>
</div>
