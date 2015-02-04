---
section: User data
title: E-Privacy directive
description: Tracking users around our systems allows us to offer a more tailored service but users need to know what information we are tracking.
template: section.html
disqus_identifier: /design-patterns/user-data/eprivacy-directive
nav_sort: 1
nav_groups:
  - primary
---

The NICE UI library provides a standard E-Privacy banner component that must be included on all
web pages to ensure compliance across services. Below is an example of the basic E-Privacy banner.

<div class="guide-example example-processed">
<div style="display:block;font-family:Lato,Arial,Helvetica,sans-serif;background:#ddeef4;border:1px solid #cddee4;color:#11779b;" id="cookiePolicy"><div style="display:block;margin:0 auto;width:95.74468085%;max-width:1170px;padding:12px 36px 12px 0;padding:1.2rem 3.6rem 1.2rem 0"><button style="float:right;margin:0 -36px 0 0;margin:0 -3.6rem 0 0;padding:0 1em;line-height:24px;line-height:2.4rem;background:none;border:0;color:#000;cursor:pointer;" onclick="return false;">×</button>NICE uses cookies to make the site better. <a href="http://www.nice.org.uk/cookies" target="_blank" style="font-weight:700;color:inherit">Learn more</a></div></div>
</div>

To include the component you need to include the following script tag after all
other script tags in your HTML5 document <code>&lt;body&gt;</code>.

<pre class="prettyprint linenums"><code>&lt;!-- e-privacy policy script --&gt;
&lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/ui.eprivacy-policy.js" async defer&gt;&lt;/script&gt;</code></pre>
