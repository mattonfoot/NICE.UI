---
section: Basic elements
title: Buttons and links
description:
template: page.html
disqus_identifier: /basic-elements/button
nav_sort: 7
nav_groups:
  - primary
---

## Text links

Basic <code>&lt;a&gt;</code> tags with a <code>href</code> attribute are styled to standout from a standard sentance.

<div class="guide-example">
<p>I am a paragraph with <a href="#">a basic link</a> within its sentence.</p>
</div>

## Buttons

Add the <code>.btn</code> class to links, buttons or input elements that have the types of either <code>submit</code>, <code>reset</code> or <code>button</code> to display them as a button.

<div class="guide-example">
<button type="button" class="btn" role="button">Button</button>
<input type="button" class="btn" value="Input button" role="button">
<input type="submit" class="btn" value="Input submit" role="button">
<input type="reset" class="btn" value="Input reset" role="button">
<a href="#" class="btn" role="button">Anchor</a>
</div>
