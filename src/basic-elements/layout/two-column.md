---
section: Layout
title: Two column layout
description: Provides a standard "Two Column" page layout for presenting articles or topics.
template: section.html
nav_sort: 1
nav_groups:
  - primary
---

Content areas are added to a layout by using the <code>.content</code> class along with
an additional priority class of either <code>.content-primary</code> or
<code>.content-secondary</code>.

<div class="note">
  <p><strong>Note:</strong> Content areas only appear as columns on devices with a
    screen size of <code>768px</code> or wider.</p>

  <p>Devices with a screen size narrower than <code>768px</code> will display
    each content areas stacked in the order defined by the HTML.</p>
</div>

## Related site content on the right

A basic responsive layout suitable for most topical articles can be
achieved by incorporating <code>&lt;article&gt;</code> and <code>&lt;aside&gt;</code> elements
into the document structure with the appropriate <code>.content</code> classes.

<pre class="prettyprint linenums"><code>&lt;main class="layout" role="main"&gt;
  &lt;article class="content content-primary" role="article"&gt;
  ...
  &lt;/article&gt;

  &lt;aside class="content content-secondary"&gt;...&lt;/aside&gt;
&lt;/main&gt;
</code></pre>


## Site navigation content on the left

By reversing the order of the <code>.content</code> classed elements you can
position navigational content to the left which will collapse to the
top of the main article on a narrow screen device.

<pre class="prettyprint linenums"><code>&lt;main class="layout" role="main"&gt;
  &lt;div class="content content-secondary"&gt;...&lt;/div&gt;

  &lt;article class="content content-primary" role="article"&gt;
  ...
  &lt;/article&gt;
&lt;/main&gt;
</code></pre>

### Responsive navigation below main content

By adding the <code>.layout-first-right</code> class to the <code>.layout</code>
classed element and reversing the order of the <code>.content</code> classed
elements you can reverse the way content areas collapse on a narrow screen device.

<pre class="prettyprint linenums"><code>&lt;main class="layout layout-first-right" role="main"&gt;
  &lt;article class="content content-primary" role="article"&gt;
  ...
  &lt;/article&gt;

  &lt;div class="content content-secondary"&gt;
    &lt;nav role="navigation"&gt;...&lt;/nav&gt;
  &lt;/div&gt;
&lt;/main&gt;
</code></pre>
