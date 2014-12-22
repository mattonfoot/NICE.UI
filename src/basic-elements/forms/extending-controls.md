---
title: Extending controls
description: Adding on top of existing browser controls, Bootstrap includes other useful form components.
template: section.html
nav_sort: 5
nav_groups:
  - primary
---

## Prepended and appended inputs
Add text or buttons before or after any text-based input. Do note that <code>select</code> elements are not supported here.

### Default options

Wrap an <code>.add-on</code> and an <code>input</code> with one of two classes to prepend or append text to an input.

<form class="guide-example">
  <div class="input-prepend">
    <span class="add-on">@</span>
    <input class="span2" id="prependedInput" type="text" placeholder="Username">
  </div>

  <br>

  <div class="input-append">
    <input class="span2" id="appendedInput" type="text">
    <span class="add-on">.00</span>
  </div>
</form>

### Combined

Use both classes and two instances of <code>.add-on</code> to prepend and append an input.

<form class="guide-example form-inline">
  <div class="input-prepend input-append">
    <span class="add-on">$</span>
    <input class="span2" id="appendedPrependedInput" type="text">
    <span class="add-on">.00</span>
  </div>
</form>

### Buttons instead of text

Instead of a <code>&lt;span&gt;</code> with text, use a <code>.btn</code> to attach a button (or two) to an input.

<form class="guide-example">
  <div class="input-append">
    <input class="span2" id="appendedInputButton" type="text">
    <button class="btn" type="button">Go!</button>
  </div>
</form>

<form class="guide-example">
  <div class="input-append">
    <input class="span2" id="appendedInputButtons" type="text">
    <button class="btn" type="button">Search</button>
    <button class="btn" type="button">Options</button>
  </div>
</form>

### Button dropdowns

<form class="guide-example">
  <div class="input-append">
    <input class="span2" id="appendedDropdownButton" type="text">

    <div class="btn-group">
      <button class="btn dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>

      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div><!-- /btn-group -->
  </div><!-- /input-append -->
</form>

<form class="guide-example">
  <div class="input-prepend">
    <div class="btn-group">
      <button class="btn dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>

      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div><!-- /btn-group -->

    <input class="span2" id="prependedDropdownButton" type="text">
  </div><!-- /input-prepend -->
</form>

<form class="guide-example">
  <div class="input-prepend input-append">
    <div class="btn-group">
      <button class="btn dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>

      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div><!-- /btn-group -->

    <input class="span2" id="appendedPrependedDropdownButton" type="text">

    <div class="btn-group">
      <button class="btn dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>

      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div><!-- /btn-group -->
  </div><!-- /input-prepend input-append -->
</form>

### Segmented dropdown groups

<form class="guide-example">
  <div class="input-prepend">
    <div class="btn-group">
      <button class="btn" tabindex="-1">Action</button>

      <button class="btn dropdown-toggle" data-toggle="dropdown" tabindex="-1">
        <span class="caret"></span>
      </button>

      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>

    <input type="text">
  </div>

  <div class="input-append">
    <input type="text">

    <div class="btn-group">
      <button class="btn" tabindex="-1">Action</button>

      <button class="btn dropdown-toggle" data-toggle="dropdown" tabindex="-1">
        <span class="caret"></span>
      </button>

      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
</form>

### Search form

<form class="guide-example form-search">
  <div class="input-append">
    <input type="text" class="span2 search-query">
    <button type="submit" class="btn">Search</button>
  </div>

  <div class="input-prepend">
    <button type="submit" class="btn">Search</button>
    <input type="text" class="span2 search-query">
  </div>
</form>

## Control sizing

Use relative sizing classes like <code>.input-large</code> or match your inputs to the grid column sizes using <code>.span*</code> classes.

### Block level inputs

Make any <code>&lt;input&gt;</code> or <code>&lt;textarea&gt;</code> element behave like a block level element.

<form class="guide-example" style="padding-bottom: 15px;">
  <div class="controls">
    <input class="input-block-level" type="text" placeholder=".input-block-level">
  </div>
</form>

### Relative sizing

<form class="guide-example" style="padding-bottom: 15px;">
  <div class="controls docs-input-sizes">
    <input class="input-mini" type="text" placeholder=".input-mini">
    <input class="input-small" type="text" placeholder=".input-small">
    <input class="input-medium" type="text" placeholder=".input-medium">
    <input class="input-large" type="text" placeholder=".input-large">
    <input class="input-xlarge" type="text" placeholder=".input-xlarge">
    <input class="input-xxlarge" type="text" placeholder=".input-xxlarge">
  </div>
</form>

<span class="label label-info">Heads up!</span> In future versions, we'll be altering the use of these relative input classes to match our button sizes. For example, <code>.input-large</code> will increase the padding and font-size of an input.

### Grid sizing

Use <code>.span1</code> to <code>.span12</code> for inputs that match the same sizes of the grid columns.

<form class="guide-example" style="padding-bottom: 15px;">
  <div class="controls docs-input-sizes">
    <input class="span1" type="text" placeholder=".span1">
    <input class="span2" type="text" placeholder=".span2">
    <input class="span3" type="text" placeholder=".span3">
    <select class="span1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <select class="span2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <select class="span3">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
</form>

For multiple grid inputs per line, <strong>use the <code>.controls-row</code> modifier class for proper spacing</strong>. It floats the inputs to collapse white-space, sets the proper margins, and clears the float.

<form class="guide-example" style="padding-bottom: 15px;">
  <div class="controls">
    <input class="span5" type="text" placeholder=".span5">
  </div>
  <div class="controls controls-row">
    <input class="span4" type="text" placeholder=".span4">
    <input class="span1" type="text" placeholder=".span1">
  </div>
  <div class="controls controls-row">
    <input class="span3" type="text" placeholder=".span3">
    <input class="span2" type="text" placeholder=".span2">
  </div>
  <div class="controls controls-row">
    <input class="span2" type="text" placeholder=".span2">
    <input class="span3" type="text" placeholder=".span3">
  </div>
  <div class="controls controls-row">
    <input class="span1" type="text" placeholder=".span1">
    <input class="span4" type="text" placeholder=".span4">
  </div>
</form>

## Uneditable inputs

Present data in a form that's not editable without using actual form markup.

<form class="guide-example">
  <span class="input-xlarge uneditable-input">Some value here</span>
</form>

## Form actions

End a form with a group of actions (buttons). When placed within a <code>.form-actions</code>, the buttons will automatically indent to line up with the form controls.

<form class="guide-example">
  <div class="form-actions">
    <button type="submit" class="btn btn-primary">Save changes</button>
    <button type="button" class="btn">Cancel</button>
  </div>
</form>

## Help text

Inline and block level support for help text that appears around form controls.

### Inline help

<form class="guide-example form-inline">
  <input type="text"> <span class="help-inline">Inline help text</span>
</form>

### Block help

<form class="guide-example form-inline">
  <input type="text">
  <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
</form>
