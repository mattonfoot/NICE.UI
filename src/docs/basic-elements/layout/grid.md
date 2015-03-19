---
section: Layout
title: Grid framework
description: A responsive, proportional, and mobile-first 12-column grid framework
template: section.html
disqus_identifier: /basic-elements/layout/grid
nav_sort: 3
nav_groups:
  - primary
---

The NICE UI library layout patterns are based around a 12 column design grid, reducing to 6 columns in device with a screen size below 992px. When laying out content, this basic presentation rule should be adhered to as often as possible. To facilitate this our grid framework is designed to work alongside the layout system.

## Features

  1. **Responsive grid** with predictable breakpoints that understand their contextual position
  1. **Flexible media** that will proportionately scale down when larger than the parent tag
  1. **Media Queries** that create breakpoints at: 768px, 992px and 1200px
  1. **Mobile Friendly** Only when the viewport width is above 768px does the grid take affect, otherwise it remains collapsed vertically.

## Getting Started

If you are not using the simple layout system, such as in a custom landing page or portal homepage, then the basic grid system will help your content to conform to the design grid. The framework is built around a combination of these three element classes: ```.container```, ```.row```, and ```.span*of*``` which can be used with any valid HTML element structure.

<dl class="dl-horizontal">
  <dt>```.container```<dt>
  <dd>sets the max-width of the page and centers it horizontally. It also sets the left and right margins so that the grid is centered, this must be positioned directly inside the ```<body>``` tag or a set of elements with **no margins or padding** of their own.</dd>
  <dt>```.row```</dt>
  <dd>defines the horizontal divisions of the page.</dd>
  <dt>```.span*of*```</dt>
  <dd>create vertical divisions of the page with defined sizes for containing content. (They can be thought of as "column spans")</dd>
</dl>

<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="span2of3"&gt;2/3&lt;/div&gt;
    &lt;div class="span1of3"&gt;1/3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<div class="note note-important">
  **Beware** Do not add additional styles to rows and spans as this could affect the layout especially if the styles add borders margins or paddings. Best practice is to keep grid elements as layout helpers and style other elements visually within the grid elements.
</div>

## Sizes

The different sized columns can be used in multiple combinations but be aware that if the sum of the column spans is greater than the 12 of the design grid they will wrap onto the next line.

As an example the following would wrap the second column;

<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="span2of3"&gt;2/3&lt;/div&gt;
    &lt;div class="span2of3"&gt;1/3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

It is also possible to use the ```.span*``` classes to indicate how many columns the element will span. This is the equivalent of ```.span*of12``` as the grid is based on twelve columns.

<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="span4"&gt;1/3&lt;/div&gt;
    &lt;div class="span8"&gt;2/3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

## Nesting columns

It is possible to nest columns within other columns. However, only certain combinations should be nested and the result of the nesting should adhere to the twelve column design grid.

<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="span2of4"&gt;
      &lt;div class="row"&gt;
        &lt;div class="span2of3"&gt;6 columns&lt;/div&gt;
        &lt;div class="span1of3"&gt;3 columns&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="span1of4"&gt;3 columns&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<div class="note note-important">
  <p>**Beware** It is easy to break the grid based designs by nesting columns. **Use with caution**.</p>

  <p>If you were to nest a ```.span1of2``` (one half) within a ```.span1of6``` (1 sixth) you get a column which is now one twelfth; This is ok because it is equivalent to a ```.span1of12``` which naturally fits with the design grid.</p>

  <p>If, however, you were to nest a ```.span1of6``` inside another ```.span1of6``` then this would be one sixth of one sixth which is 1/36<sup>th</sup> this means your second column is now smaller than a single design grid column and now looks lik you are designing to a 36 column design grid.</p>
</div>

## Centering

<div class="guide-example example-processed">
<div class="row">
  <div class="span1of6 centered">
    1/6
  </div>
</div>

<div class="row">
  <div class="span1of3 centered">
    1/3
  </div>
</div>

<div class="row">
  <div class="span1of2 centered">
    1/2
  </div>
</div>

<div class="row">
  <div class="span2of3 centered">
    2/3
  </div>
</div>

<div class="row">
  <div class="span5of6 centered">
    5/6
  </div>
</div>
</div>
<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="span2of3 centered"&gt;1/7&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<div class="note note-important">
  <p>**Beware** Again it is easy to break the grid based designs by centring if . **Use with caution**.</p>

  <p>Never use ```.span1of12```, ```.span3of4```, ```.span6of8``` or ```.span1of4``` as these do not align with the design grid when centered.</p>
</div>

## Tiles grid

The tiles style grid is used for repeating content holders of equal width. They appear in two-up, three-up, four-up, five-up, and six-up variations.

<div class="guide-example example-processed">
<ul class="grid1of3">
  <li><img src="http://placehold.it/240x240" style="width:100%;height:auto;" /></li>
  <li><img src="http://placehold.it/240x240" style="width:100%;height:auto;" /></li>
  <li><img src="http://placehold.it/240x240" style="width:100%;height:auto;" /></li>
  <li><img src="http://placehold.it/240x240" style="width:100%;height:auto;" /></li>
  <li><img src="http://placehold.it/240x240" style="width:100%;height:auto;" /></li>
</ul>
</div>
<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;ul class="grid1of3"&gt;
    &lt;li&gt; [...] &lt;/li&gt;
    &lt;li&gt; [...] &lt;/li&gt;
    [...]
  &lt;/ul&gt;
&lt;/div&gt;
</code></pre>
