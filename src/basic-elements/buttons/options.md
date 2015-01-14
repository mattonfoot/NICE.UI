---
section: Buttons
title: Options
description: Use any of the available button classes to quickly create a styled button.
template: section.html
nav_sort: 1
nav_groups:
  - primary
---

## Buttons and links

Add the <code>.btn</code> class to links, buttons or input elements that have the types of either <code>submit</code>, <code>reset</code> or <code>button</code> to display them as a button.

<div class="guide-example">
  <button type="button" class="btn" role="button">Button</button>
  <input type="button" class="btn" value="Input button" role="button">
  <input type="submit" class="btn" value="Input submit" role="button">
  <input type="reset" class="btn" value="Input reset" role="button">
  <a href="#" class="btn" role="button">Anchor</a>
</div>

## Disabled inputs

Add the <code>disabled</code> attribute to <code>&lt;input&gt;</code> or <code>&lt;button&gt;</code> buttons to prevent user input and trigger a slightly different look.

Add  the <code>.disabled</code> class to <code>&lt;a&gt;</code> buttons;

<div class="guide-example">
<button type="button" class="btn" role="button" disabled>Button</button>
<input type="button" class="btn" value="Input button" role="button" disabled>
<input type="submit" class="btn" value="Input submit" role="button" disabled>
<input type="reset" class="btn" value="Input reset" role="button" disabled>
<a href="#" class="btn disabled" role="button">Anchor</a>
</div>

<div class="note note-warning">
  <p><strong>Be aware:</strong> adding the <code>.disabled</code> class to elements is purely a stylistic helper state, actually making the element not respond to interactions form mouse click, touches and text activations needs to be ahndled with JavaScript.</p>
</div>

## Contextual styles

<div class="guide-example">
  <button type="button" class="btn">Default</button>
  <button type="button" class="btn action-primary">Primary</button>
  <button type="button" class="btn action-positive">Positive</button>
  <button type="button" class="btn action-danger">Danger</button>
</div>
