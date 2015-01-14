---
title: Two column
description: Provides a standard "Two Column" page layout for presenting articles or topics.
template: page.html
nav_sort: 2
nav_groups:
- primary
---

Columns are added to a layout by using the <code>.column</code> class along with
an additional content priority class of either <code>.column-primary</code> or
<code>.column-secondary</code>.

<div class="alert alert-info">
  <p><strong>Note:</strong> Layouts only appear as columns on devices with a
    screen size of <code>768px</code> or wider</p>

  <p>Devices with a screen size narrower than <code>768px</code> will display
    each column stacked in the order defined by the HTML</p>
</div>

## Topical article with related site content on the right

A basic responsive two column layout suitable for most topical articles can be
achieved by incorporating <code>article</code> and <code>aside</code> elements
into the document structure.

<pre class="prettyprint linenums"><code>&lt;body&gt;
  &lt;header role="banner"&gt;...&lt;/header&gt;

  &lt;main class="layout" role="main"&gt;
    &lt;article class="column column-primary" role="article"&gt;
    ...
    &lt;/article&gt;

    &lt;aside class="column column-secondary"&gt;...&lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer role="contentinfo"&gt;...&lt;/footer&gt;
&lt;/body&gt;
</code></pre>


## Topical article with site navigation content on the left

By adding the <code>.layout-left-secondary</code> to the <code>main</code> element
you can position navigational content to the left which will collapse to the
bottom of the main article on a narrow screen device.

<pre class="prettyprint linenums"><code>&lt;body&gt;
  &lt;header role="banner"&gt;...&lt;/header&gt;

  &lt;main class="layout" role="main"&gt;
    &lt;div class="column column-secondary"&gt;...&lt;/div&gt;

    &lt;article class="column column-primary" role="article"&gt;
    ...
    &lt;/article&gt;
  &lt;/main&gt;

  &lt;footer role="contentinfo"&gt;
    &lt;nav role="navigation"&gt;...&lt;/nav&gt;
  &lt;/footer&gt;
&lt;/body&gt;
</code></pre>

### Options

By adding the <code>.layout-left-secondary</code> to the <code>main</code> element
and placing the second column after the primary column you can pull the second
column to the left on wide screen devices and allow the additional content to
collapse to the bottom of the main article on a narrow screen device.

<pre class="prettyprint linenums"><code>&lt;main class="layout layout-left-secondary" role="main"&gt;
  ...
&lt;/main&gt;
</code></pre>
