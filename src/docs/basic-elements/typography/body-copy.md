---
section: Basic Typography
title: Body copy
date: 2014-12-16
template: section.html
description: Basic typographic styles that are applied to the default body copy of a page
disqus_identifier: /basic-elements/typography/body-copy
nav_sort: 2
nav_groups:
  - primary
---

NICE's global default <code>font-size</code> is **16px**, with a <code>line-height</code> of **24px**. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In addition, <code>&lt;p&gt;</code> (paragraphs) receive a bottom margin of their line-height to ensure vertical rhythm is adhered to.

<div class="guide-example">
  <p class="example-tldr">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
  <p class="example-ignore">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p class="example-ignore">Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
</div>

### Lead body copy

Make a paragraph stand out by adding <code>.lead</code>.

<div class="guide-example">
  <p class="lead example-tldr">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
</div>

### Paragraphs directly following a heading
Paragraphs that follow <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> elements will pull up to reduce whitespace between them and the headings.

<div class="guide-example">
  <h1>h1. Heading 1</h1>
  <p class="lead example-tldr">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>

  <h2>h2. Heading 2</h2>
  <p class="example-tldr">Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
</div>
