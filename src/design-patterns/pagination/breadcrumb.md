---
section: Pagination and breadcrumbs
title: Breadcrumb
description: A design pattern to show the position of a document in a hierarchy of information
template: section.html
disqus_identifier: /design-patterns/pagination/breadcrumb
nav_sort: 1
nav_groups:
- primary
---

A single example shown as it might be displayed across multiple pages.

<div class="guide-example guide-example-tight">
<!-- Site root -->
<ol class="breadcrumb">
  <li class="active">Home</li>
</ol>

<!-- root section -->
<ol class="breadcrumb">
  <li><a href="#">Home</a> <i class="divider glyph-chevron-right"></i></li>
  <li class="active">Library</li>
</ol>

<!-- sub section -->
<ol class="breadcrumb">
  <li><a href="#">Home</a> <i class="divider glyph-chevron-right"></i></li>
  <li><a href="#">Library</a> <i class="divider glyph-chevron-right"></i></li>
  <li class="active">Data</li>
</ol>
</div>

## Breadcrumb Stack

This form of breadcrumb shows the hierarchy of an article and has the added
advantage of collapsing when viewed on tablet devices.

<div class="guide-example">
<ol class="breadcrumb breadcrumb-stack">
  <li><a href="#">Home</a></li>
  <li><a href="#">Section</a></li>
  <li class="active"><a href="#">Parent</a></li>
</ol>
</div>

### options

It is possible to make the breadcrumb collapsible on narrow screen devices by
adding the <code>.collapse</code> class to the main <code>.breadcrumb</code>
element and adding the <code>.toggle</code> anchor to the <code>.active</code> element as below;

<div class="guide-example">
<ol class="breadcrumb breadcrumb-stack" data-state="off" data-on="collapsed" data-off="" id="stacked-nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">Section</a></li>
  <li class="active">
    <a href="#">Parent</a>
    <a href="#stacked-nav" class="toggle" data-toggle="state"></a>
  </li>
</ol>
</div>

If you wish the collapsible stacked breadcrumb to be collapsed on narrow screen
devices by default then simply add the <code>.collapsed</code> class on the
<code>.breadcrumb</code> element;

<div class="guide-example">
<ol class="breadcrumb breadcrumb-stack collapsed" data-state="on" data-on="collapsed" data-off="" id="stacked-nav-2">
  <li><a href="#">Home</a></li>
  <li><a href="#">Section</a></li>
  <li class="active">
    <a href="#">Parent</a>
    <a href="#stacked-nav-2" class="toggle" data-toggle="state"></a>
  </li>
</ol>
</div>
