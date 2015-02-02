---
section: Menus
title: Footer
description: A design pattern used across all services to provide easy access to other services and display associative information
template: section.html
disqus_identifier: /design-patterns/menus/footer
nav_sort: 2
nav_groups:
- primary
---

## Including the Footer

The NICE UI library provides a standard component that must be included on all
web pages to ensure uniformity across services. For an example of the basic
Footer just look to <a href="#footer">the bottom of this web page</a>.

To include the component you need to include the following HTML as the last item
in your HTML5 document <code>&lt;body&gt;</code> but before all script tags.

The following is and example taken from the one in this web page.

<pre class="prettyprint linenums footer-code"><code>&lt;!-- Footer --&gt;
</code></pre>

To add site wide links simple include a basic set of <code>&lt;li&gt;</code>
containing links within the <code>.nav-pills</code> element.

## Customising per service

It is understood that the legal links and copyright text may need to be
customised, refer to the BNF or Evidence search services as reference in
this case.
