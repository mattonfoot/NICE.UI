---
section: Navigation
title: Sharing links
description: It is more important than ever, today, to get as many of our documents link to from external sources, make it easy for our users to share by including a simple share toolbar.
date: 2015-01-26
template: section.html
description:
nav_sort: 2
nav_groups:
  - primary
---

Basic tool bar with add this integration.

<div class="guide-example">
<ul class="share-links">
  <li><a href="#" title="Download a PDF version of this document">
    <span class="glyph-download"></span> <span class="label">Download</span></a>
  </li>
  <li class="dropdown" data-state="off" data-on="in" data-off="">
    <a href="#share-menu" id="share-menu-label" class="action-link" data-toggle="state" title="Share">
      <i class="glyph-share"></i> <span class="label">Share</span> <span class="caret"></span>
    </a>
    <ul class="menu addthis_toolbox" id="share-menu" role="menu" aria-labelledby="share-menu-label">
      <li>Share</li>
      <!-- AddThis Buttons START -->
      <li><a class="addthis_button_linkedin addthis_event" ><i class="icon-linkedin"></i> Linked In</a></li>
      <li><a class="addthis_button_twitter addthis_event" ><i class="glyph-twitter"></i> Twitter</a></li>
      <li><a class="addthis_button_facebook addthis_event" ><i class="glyph-facebook"></i> Facebook</a></li>
      <li><a class="addthis_button_email addthis_event"><i class="glyph-email-closed"></i> Email</a></li>
      <li><a class="addthis_button_more"><i class="glyph-plus"></i> More...</a></li>
      <!-- AddThis Buttons END -->
    </ul>
  </li>
  <li><a href="#" title="Print friendly version" rel="nofollow">
    <span class="glyph-print"></span> <span class="label">Print</span></a>
  </li>
</ul>
</div>

### Add this integration

To get add this integrating with Google Analytics you will need to include the following scripts at the bottom of your web.

<pre class="prettyprint linenums"><code>
&lt;script src="//s7.addthis.com/js/250/addthis_widget.js" defer async&gt;&lt;/script&gt;

&lt;script type="text/javascript"&gt;
var addthis_config = {
  data_ga_property: '{{ GA-CODE }}' ),
  data_ga_social : true
};
&lt;/script&gt;
</code></pre>

<div class="info info-note">
  <p><strong>Please note:</strong> You will need to replace <code>{{ GA-CODE }}</code> with the correct GA code you are using for analytics.</p>
</div>

<div class="info info-warning">
  <p><strong>Beware:</strong> Add this integration only works with Google analytics not Universal Analytics, we are monitoring this state but currently add this do not intend to support UA with this feature.</p>
</div>
