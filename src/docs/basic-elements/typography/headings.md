---
section: Basic Typography
title: Headings
date: 2014-12-16
template: section.html
description: Basic typographic styles that help highlight the importance of a section of content within a page
disqus_identifier: /basic-elements/typography/headings
nav_sort: 1
nav_groups:
  - primary
---

All HTML headings are available for use but the lower levels are discouraged generally.

<div class="guide-example guide-example-tight">
  <h1>h1. Level 1 heading</h1>
  <h2>h2. Level 2 heading</h2>
  <h3>h3. Level 3 heading</h3>
  <h4>h4. Level 4 heading</h4>
</div>

### Options

Create lighter, secondary text in any of the top 2 levels of heading with a generic ```<small>``` tag.

<div class="guide-example guide-example-tight">
  <h1>h1. Level 1 heading <small>Secondary text</small></h1>
  <h2>h2. Level 2 heading <small>Secondary text</small></h2>
</div>

## Understanding usage

### Page or Article level

The ```<h1>``` element must only be used once per page. It is typically reserved for the page/article title and generally sits within a ```<header>``` element. You can [read more about using headers within documents](./layout/header.html).

### Section level

The ```<h2>``` element should be used for any form of important page-level heading, such as a section title. More than one may be used per page. Consider using this level of heading unless you need a level of less importance, such as within a sub-section.

### Sub-section level

The ```<h3>``` element should be used for any form of page-level heading which falls within a sub-section of a document hierarchy.

### Other levels

For anything that requires a subtle label or definition without dominating the main copy you can use the ```<h4>``` to ```<h6>``` elements. The NICE UI library purposefully discourages excessive levels of [visual] hierarchy by having identical styles for these three levels of heading.
