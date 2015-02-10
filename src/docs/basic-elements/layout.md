---
section: Basic elements
title: Layout
description: Basic layout patterns that display information clearly on our web pages
template: page.html
disqus_identifier: /basic-elements/layout
nav_sort: 3
nav_groups:
  - primary
---

## Including the Layout extension

The NICE UI library has a set of pre-defined layouts that have been designed to
best convey information in a clean and readable format.

To include the layouts extension you need to include the following link in
your HTML5 document <code>&lt;head&gt;</code>.

<pre class="prettyprint linenums"><code>&lt;!-- Layouts --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.layouts.css"&gt;</code></pre>

### Combined

You will also get the layouts extension within the basic combined bundle.

<pre class="prettyprint linenums"><code>&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.css"&gt;</code></pre>

## The basic page layout

A basic document should follow the basic structure provided by the appropriate HTML
elements <code>body</code>, <code>header</code>, <code>footer</code> and <code>main</code>

<pre class="prettyprint linenums"><code>&lt;body&gt;
  &lt;header role="banner"&gt;...&lt;/header&gt;

  &lt;main class="layout" role="main"&gt;
  ...
  &lt;/main&gt;

  &lt;footer role="contentinfo"&gt;...&lt;/footer&gt;
&lt;/body&gt;
</code></pre>

### Columns

As mentioned in [our typography section on establishing a baseline](./typography.html) the NICE UI library uses a baseline grid of ```24px```. This basic unit of measurement also extends to the horizontal grid giving us a consistent space between elements. This standard unit provides us with column widths of ```72px``` on large screen devices when we use a 12 column grid. This gives us a maximum site width of ```1176px``` which includes two gutters of ``24px`` resulting in a maximum content width of ```1128px```. Visit [Grid Calculator](http://gridcalculator.dk/#/1176/12/24/24) to see this in action.

Based on typical breakpoints, we have set our maximum site widths for each major breakpoint as follows:

  - Large devices ( &ge;1200px ): 1176px ( 12 columns )
  - Medium devices ( &ge;992px ): 984px ( 12 columns )
  - Small devices ( &ge;768px ): 744px ( 6 columns )
  - Extra small devices ( &lt;768px ): 100% fluid ( 1 full width column )

### Two column layouts

If within this basic page layout you wish to include related content or site navigation then you will also need to [read about using the basic two column layout](./layout/two-column.html).

## Advanced layout patterns

### Narrow screen devices

  - Off canvas

### Helpers

  - Size grid        ( wrapper, column, grid )
  - Position helpers ( pull-content, offset-content )
