---
section: Layout
title: Grid framework
description: A responsive, proportional, and mobile-first 12-column grid framework
template: section.html
nav_sort: 3
nav_groups:
  - primary
---

The NICE UI library layout patterns are based around a 12 column design grid. When laying out content this basic presentation rule should be adhered to as often as possible.

## Features

  1. **Responsive grid** defined in percentages
  1. **Flexible media** that will proportionaly scale down when larger than the parent tag
  1. **Media Queries** that create breakpoints at: 768px and 980px
  1. **Mobile-First** Only when the viewport width is above 768px does the grid take affect, otherwise it remains collapsed vertically.

## Getting Started

The framework is built around a combination of these three elements: ```.container```, ```.row```, and ```.span*of*```.

  1. The ```.container``` class sets the max-width of the page and centers it horizontally. It also sets the left and right margins on small screens.
  1. The ```.row``` class defines horizontal divisions of the page.
  1. The ```.span*of*``` classes create vertical divisions of the page with defined sizes for containing content. (They can be thought of as "column spans")

<div class="guide-example example-processed">
<div class="row">
  <div class="span2of3">2/3</div>
  <div class="span1of3">1/3</div>
</div>
</div>
<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="span2of3"&gt;2/3&lt;/div&gt;
    &lt;div class="span1of3"&gt;1/3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<div class="note note-info">
  ***Note:*** it is possible to use the ```.span*``` classes to indicate how many columns the element will span. This is the equivalent of ```.span*of12``` as the grid is based on twelve columns.
</div>

<div class="note note-important">
  **Beware** Do not add additional styles to rows and spans as this could affect the layout especially if the styles add borders margins or paddings. Best practice is to keep grid elements as layout helpers and style other elements visually within the grid elements.
</div>

## Sizes

All of the available sizes can also be seen below.

<div class="guide-example example-processed">
<div class="row">
  <div class="span1of1">1/1</div>
</div>

<div class="row">
  <div class="span1of2">1/2</div>
  <div class="span1of2">1/2</div>
</div>

<div class="row">
  <div class="span1of3">1/3</div>
  <div class="span1of3">1/3</div>
  <div class="span1of3">1/3</div>
</div>

<div class="row">
  <div class="span1of4">1/4</div>
  <div class="span1of4">1/4</div>
  <div class="span1of4">1/4</div>
  <div class="span1of4">1/4</div>
</div>

<div class="row">
  <div class="span1of6">1/6</div>
  <div class="span1of6">1/6</div>
  <div class="span1of6">1/6</div>
  <div class="span1of6">1/6</div>
  <div class="span1of6">1/6</div>
  <div class="span1of6">1/6</div>
</div>

<div class="row">
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
</div>
</div>

The different sized columns can be used in multiple combinations but be aware that if the sum of the column spans is greater than 12 they will wrap onto the next line.

<div class="guide-example example-processed">
<div class="row">
  <div class="span1of3">1/3</div>
  <div class="span2of3">2/3</div>
</div>

<div class="row">
  <div class="span1of4">1/4</div>
  <div class="span3of4">3/4</div>
</div>

<div class="row">
  <div class="span1of6">1/6</div>
  <div class="span5of6">5/6</div>
</div>

<div class="row">
  <div class="span2of3">2/3</div>
  <div class="span1of3">1/3</div>
</div>

<div class="row">
  <div class="span3of4">3/4</div>
  <div class="span1of4">1/4</div>
</div>

<div class="row">
  <div class="span5of6">5/6</div>
  <div class="span1of6">1/6</div>
</div>

<div class="row">
  <div class="span1of4">1/4</div>
  <div class="span1of4">1/4</div>
  <div class="span1of2">1/2</div>
</div>

<div class="row">
  <div class="span1of4">1/4</div>
  <div class="span1of2">1/2</div>
  <div class="span1of4">1/4</div>
</div>

<div class="row">
  <div class="span1of2">1/2</div>
  <div class="span1of4">1/4</div>
  <div class="span1of4">1/4</div>
</div>

<div class="row">
  <div class="span5of6">5/6</div>
  <div class="span1of12">1/12</div>
  <div class="span1of12">1/12</div>
</div>

<div class="row">
  <div class="span1of12">1/12</div>
  <div class="span5of6">5/6</div>
  <div class="span1of12">1/12</div>
</div>
</div>

## Nesting columns

It is possible to nest columns within other columns. However, only certain combinations should be nested and the result of the nesting should adhere to the twelve column design grid.

<pre class="prettyprint linenums"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="span2of3"&gt;
      &lt;div class="row"&gt;
        &lt;div class="span2of3"&gt;2/3&lt;/div&gt;
        &lt;div class="span1of3"&gt;1/3&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="span1of3"&gt;1/3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<div class="note note-important">
  <p>**Beware** It is easy to break the grid based designs by nesting columns. **Use with caution**.</p>

  <p>If you were to nest a ```.span1of2``` (which has a width of 50%) within a ```.span1of6``` (which has a width of 16.67%) you get a column which is now equivalent to ```.span1of12``` 8.33%; This is ok because it still fits with the design grid.</p>

  <p>If, however, you were to nest a ```.span1of6``` inside another ```.span1of6``` then this would be one sixth of one sixth which is 1/36<sup>th</sup> or 2.78% ( thats as if you are designing to a 36 column design grid ).</p>
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
