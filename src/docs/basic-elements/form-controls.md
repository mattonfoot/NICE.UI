---
section: Basic elements
title: Form controls
description: Examples of standard form controls supported in an example form layout.
template: page.html
disqus_identifier: /basic-elements/form-controls
nav_sort: 11
nav_groups:
  - primary
---


## Inputs

Most common form control, text-based input fields. Includes support for all HTML5 types:
<code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>,
<code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>,
<code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <color>color</color>.

Requires the use of a specified <code>type</code> at all times.

<div class="alert alert-info">
  <p><strong>Note:</strong> the <code>file</code> type input field needs to be marked up dfferently so
    is not included within this basic control section</p>
  </div>

  <form class="guide-example">
    <input type="text" placeholder="Text input">
  </form>

  ## Textarea

  Form control which supports multiple lines of text. Change <code>rows</code> attribute as necessary.

  <form class="guide-example">
    <textarea rows="3"></textarea>
  </form>

  ## Checkboxes and radios

  Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

  A checkbox or radio with the <code>disabled</code> attribute will be styled appropriately. To have the <code>&lt;label&gt;</code> for the checkbox or radio also display a "not-allowed" cursor when the user hovers over the label, add the <code>.disabled</code> class to your <code>&lt;input&gt;</code>, or <code>&lt;fieldset&gt;</code>.

  ### Default (stacked)

  <form class="guide-example">
    <div class="checkbox">
      <label>
        <input type="checkbox" value="">
        Option one is this and that&mdash;be sure to include why it's great
      </label>
    </div>
    <div class="checkbox disabled">
      <label>
        <input type="checkbox" value="" disabled>
        Option two is disabled
      </label>
    </div>
    <br class="example-ignore"/>
    <div class="radio">
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that&mdash;be sure to include why it's great
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two can be something else and selecting it will deselect option one
      </label>
    </div>
    <div class="radio disabled">
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </div>
  </form>

  ### Inline checkboxes and radios

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
    <br class="example-ignore"/>
    <label class="radio inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1
    </label>
    <label class="radio inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2
    </label>
    <label class="radio inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3
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

  ## Static control

  When you need to place plain text next to a form label within a form, use the <code>.static-control</code> class on a <code>&lt;p&gt;</code>.

  <div class="guide-example">
    <form class="horizontal" role="form">
      <div class="form-group">
        <label>Email</label>
        <p class="form-control-static">email@example.com</p>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" id="inputPassword" placeholder="Password">
      </div>
    </form>
  </div>

  <div class="guide-example">
    <form class="inline" role="form">
      <div class="form-group">
        <label>Email</label>
        <p class="form-control-static">email@example.com</p>
      </div>
      <div class="form-group">
        <label for="inputPassword2">Password</label>
        <input type="password" id="inputPassword2" placeholder="Password">
      </div>
      <button type="submit" class="btn">Confirm identity</button>
    </form>
  </div>
