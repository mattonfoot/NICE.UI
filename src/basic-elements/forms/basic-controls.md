---
title: Basic controls
description: Examples of standard form controls supported in an example form layout.
template: section.html
nav_sort: 3
nav_groups:
- primary
---

## Inputs

Most common form control, text-based input fields. Includes support for all HTML5 types: text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.

Requires the use of a specified <code>type</code> at all times.
<form class="guide-example form-inline">
  <input type="text" placeholder="Text input">
</form>

## Textarea

Form control which supports multiple lines of text. Change <code>rows</code> attribute as necessary.

<form class="guide-example form-inline">
  <textarea rows="3"></textarea>
</form>

## Checkboxes and radios

Checkboxes are for selecting one or several options in a list while radios are for selecting one option from many.

### Default (stacked)

<form class="guide-example">
  <label class="checkbox">
    <input type="checkbox" value="">
    Option one is this and that&mdash;be sure to include why it's great
  </label>

  <br>

  <label class="radio">
    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
    Option one is this and that&mdash;be sure to include why it's great
  </label>

  <label class="radio">
    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
    Option two can be something else and selecting it will deselect option one
  </label>
</form>

### Inline checkboxes

Add the <code>.inline</code> class to a series of checkboxes or radios for controls appear on the same line.

<form class="guide-example">
  <label class="checkbox inline">
    <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
  </label>

  <label class="checkbox inline">
    <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
  </label>

  <label class="checkbox inline">
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
  </label>
</form>

## Selects

Use the default option or specify a <code>multiple="multiple"</code> to show multiple options at once.

<form class="guide-example">
  <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>

  <br>

  <select multiple="multiple">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</form>
