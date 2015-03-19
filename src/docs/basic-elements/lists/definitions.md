---
section: Lists
title: Definitions
date: 2014-12-16
template: section.html
disqus_identifier: /basic-elements/lists/definitions
description:
nav_sort: 2
nav_groups:
  - primary
---

## Definitions and descriptions

A list of terms with their associated definitions or descriptions.

<div class="guide-example">
<dl>
  <dt class="example-tldr">Definition lists</dt>
  <dd class="example-tldr">A definition list is perfect for defining terms.</dd>
  <dt class="example-ignore">Euismod</dt>
  <dd class="example-ignore">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd class="example-ignore">Donec id elit non mi porta gravida at eget metus.</dd>
  <dt class="example-ignore">Malesuada porta</dt>
  <dd class="example-ignore">Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
</div>

### Options

Make terms and definitions in <code>&lt;dl&gt;</code> line up side-by-side.

<div class="guide-example">
<dl class="horizontal">
  <dt class="example-tldr">Definition lists</dt>
  <dd class="example-tldr">A definition list is perfect for defining terms.</dd>
  <dt class="example-ignore">Euismod</dt>
  <dd class="example-ignore">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd class="example-ignore">Donec id elit non mi porta gravida at eget metus.</dd>
  <dt class="example-ignore">Malesuada porta</dt>
  <dd class="example-ignore">Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt class="example-ignore">Felis euismod semper eget lacinia</dt>
  <dd class="example-ignore">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
</dl>
</div>

<div class="note note-info">
  <h4>Auto-truncating</h4>

  <p>Horizontal description lists will truncate terms that are too long to fit in the left column fix <code>text-overflow</code>. In narrower viewports, they will change to the default stacked layout.</p>
</div>
