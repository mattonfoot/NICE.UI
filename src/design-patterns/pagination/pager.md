---
section: Pagination and breadcrumbs
title: Pager
description: Simple set of page links with additional navigation links if desired, click areas are large for mobile and touch enabled devices.
template: section.html
nav_sort: 2
nav_groups:
- primary
---

<div class="guide-example">
<div class="pager">
  <ul>
    <li class="previous"><a href="#" rel="previous">&laquo;</a></li>
    <li><a href="#">1</a></li>
    <li class="example-ignore"><a href="#">2</a></li>
    <li class="example-tldr"><a href="#">3</a></li>
    <li class="example-ignore"><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li class="next"><a href="#" rel="next">&raquo;</a></li>
  </ul>
</div>
</div>

## Options

### Disabled and active states

Links are customisable for different circumstances. Use a <code>&lt;span&gt;</code> element for unclickable entries and add an <code>.active</code> class to indicate the current page.

<div class="guide-example">
<div class="pager">
  <ul>
    <li class="previous"><span>&laquo;</span></li>
    <li class="active"><span>1</span></li>
    <li class="example-tldr"><a href="#">2</a></li>
    <li class="example-ignore"><a href="#">3</a></li>
    <li class="example-ignore"><a href="#">4</a></li>
    <li class="example-ignore"><a href="#">5</a></li>
    <li class="next"><a href="#" rel="next">&raquo;</a></li>
 </ul>
</div>
</div>

You can optionally swap out active or disabled anchors for spans to remove click functionality while retaining intended styles.

### Large page sets

When a page set has more than 7 pages then an abbreviated version of the pager should be used

<div class="guide-example example-tight">
<div class="pager">
  <ul>
    <li class="previous"><span>&laquo;</span></li>
    <li class="active"><span>1</span></li>
    <li><a href="#">2</a></li>
    <li class="example-ignore"><a href="#">3</a></li>
    <li class="example-ignore"><a href="#">4</a></li>
    <li class="example-ignore"><a href="#">5</a></li>
    <li class="example-ignore"><a href="#">6</a></li>
    <li class="example-ignore"><a href="#">7</a></li>
    <li class="next"><a href="#" rel="next">&raquo;</a></li>
  </ul>
</div>
<div class="pager">
  <ul>
    <li class="previous"><a href="#" rel="previous">&laquo;</a></li>
    <li><a href="#">1</a></li>
    <li><span>...</span></li>
    <li><a href="#">5</a></li>
    <li class="example-ignore"><a href="#">6</a></li>
    <li class="active"><span>7</span></li>
    <li class="example-ignore"><a href="#">8</a></li>
    <li class="example-ignore"><a href="#">9</a></li>
    <li class="next"><a href="#" rel="next">&raquo;</a></li>
  </ul>
</div>
</div>
