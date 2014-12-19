---
section: Basic Typography
title: Semantic information
date: 2014-12-16
template: section.html
description: In some circumstances it is necessary to distinguish certain items of information in a specific descriptive style
---

## Definitions of terms

Wrap <code>&lt;dfn&gt;</code> around any information that is a defining instance of a term.

<div class="guide-example">
  <!-- Define "The Internet" -->
  <p><dfn id="def-internet">The Internet</dfn> is a global system of interconnected networks that use the Internet Protocol Suite (TCP/IP) to serve billions of users worldwide.</p>

  <!-- Define "World-Wide Web" and reference definition for "the Internet" -->
  <dl>
    <dt>
      <dfn>
        <abbr title="World-Wide Web">WWW</abbr>
      </dfn>
    </dt>
    <dd>The World-Wide Web (WWW) is a system of interlinked hypertext documents accessed on <a href="#def-internet">the Internet</a>.</dd>
  </dl>
</div>


## Editorial history

Sometimes it is important to represent previous thoughts and edits made on the current text.

Wrap <code>&lt;del&gt;</code> around any information that has been removed from the current text and wrap <code>&lt;ins&gt;</code>
around any information that has been inserted into the current text since it was first published.

<div class="guide-example">
  <p>Lorem ipsum dolor sit amet, <del>consectetur</del><ins>adipiscing elit</ins>. Praesent feugiat lacinia urna nec egestas. Donec.</p>
</div>



## Positional formatting

Text that should be displayed, for typographic reasons, higher or lower, and smaller, than the main span of text should be
wrapped with <code>&lt;sup&gt;</code> or <code>&lt;sub&gt;</code> respectively.

<div class="guide-example guide-example-tight">
  <p>This text is <sup>superscripted</sup></p>
  <p>This text is <sub>subscripted</sub></p>
</div>
