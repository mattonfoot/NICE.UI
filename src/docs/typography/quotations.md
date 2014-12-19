---
section: Basic Typography
title: Quotations
date: 2014-12-16
template: section.html
description: For quoting blocks of content from another source within your document
---

## Default blockquote

Wrap <code>&lt;blockquote&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote. For straight quotes we recommend a <code>&lt;p&gt;</code>.

<div class="guide-example">
<blockquote>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
</div>

### Options

Style and content changes for simple variations on a standard blockquote.

#### Naming a source

Add <code>&lt;small&gt;</code> tag for identifying the source. Wrap the name of the source work in <code>&lt;cite&gt;</code>.

<div class="guide-example">
<blockquote>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
</blockquote>
</div>

<div class="alert alert-block alert-info">
<h4>Right pulled quotations</h4>

<p>Although bootstrap provides an alternate display by adding <code>.pull-right</code> to blockquotes NICE does not use this style.</p>
</div>


## Inline quotations

Wrap <code>&lt;q&gt;</code> around any span of text within a block of content to identify a quoted phrase. In this format a footnote link should be included to identify the source of the quote.

<div class="guide-example">
<p>Lorem ipsum dolor sit <q cite="An unknown source">amet, consectetur adipiscing elit</q>. Integer posuere erat a ante.</p>
</div>
