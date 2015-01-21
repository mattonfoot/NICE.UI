---
section: Related content
title: Hero unit
description: A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
template: section.html
nav_sort: 2
nav_groups:
- primary
---

The basic hero unit.

<div class="guide-example">
<header class="hero-unit" role="banner">
  <h1>Hello, world!</h1>
  <p class="example-tldr">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</header>
</div>

## Options

Place the hero unit at the root of the document and wrap all of its contents in a <code>.container</code> element to allow it to fill the horizontal area of the viewport.

<pre class="prettyprint linenums"><code>
&lt;header class="hero-unit" role="banner"&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;...&lt;/h1&gt;
    &lt;p&gt;...&lt;/p&gt;
  &lt;/div&gt;
&lt;/header&gt;
</code></pre>

Downgrade the semantics of the heading by changing the <code>&lt;h1&gt;</code> to a <code>&lt;h2&gt;</code> without loosing size;

<pre class="prettyprint linenums"><code>
&lt;header class="hero-unit" role="banner"&gt;
  &lt;h2&gt;...&lt;/h2&gt;
  &lt;p&gt;...&lt;/p&gt;
&lt;/header&gt;
</code></pre>

<div class="note note-important">
  <p>If you choose to use the Hero unit pattern you must only include one per web page and it must be positioned at the head of the document content directly below the tophat.</p>
</div>
