---
section: Pagination and breadcrumbs
title: Pagination
description: Quick previous and next links for simple pager implementations with light markup and styles. It's great for simple sites like blogs or magazines.
template: section.html
nav_sort: 3
nav_groups:
- primary
---

<div class="guide-example">
<ul class="pagination">
  <li><a href="#" rel="previous"><i class="glyph-chevron-left"></i> Previous</a></li>
  <li><a href="#" rel="next">Next <i class="glyph-chevron-right"></i></a></li>
</ul>
</div>

## Disabled state

To disable either of the pagination links simply change the <code>&lt;a&gt;</code> element to a <code>&lt;span&gt;</code>.

<div class="guide-example">
<ul class="pagination">
  <li><span><i class="glyph-chevron-left"></i> Older</span></li>
  <li><a href="#" rel="next">Newer <i class="glyph-chevron-right"></i></a></li>
</ul>
</div>
