---
section: Basic Typography
title: Abbreviations
date: 2014-12-16
template: section.html
description:
---

Stylised implementation of HTML's <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a <code>title</code> attribute have a light dotted bottom border and a help cursor on hover, providing additional context on hover.

### <code>&lt;abbr&gt;</code>

For expanded text on long hover of an abbreviation, include the <code>title</code> attribute.

<div class="guide-example">
  <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
</div>

### Acronyms

Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size that accomodates acronyms.

<div class="guide-example">
  <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
</div>
