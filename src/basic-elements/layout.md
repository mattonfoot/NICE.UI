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

## Advanced layout patterns

### Narrow screen devices

  - Off canvas

### Helpers

  - Size grid        ( wrapper, column, grid )
  - Position helpers ( pull-content, offset-content )
