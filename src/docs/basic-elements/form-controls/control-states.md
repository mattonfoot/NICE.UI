---
section: Forms
title: Control states
description: Provide feedback to users or visitors with basic feedback states on form controls and labels.
template: section.html
disqus_identifier: /basic-elements/form-controls/control-states
nav_sort: 5
nav_groups:
  - primary
---

## Input focus

We remove the default <code>outline</code> styles on some form controls and apply a <code>box-shadow</code> in its place for <code>:focus</code>.

<form class="guide-example">
  <input class="focused" id="focusedInput" type="text" value="This is focused...">
</form>

## Disabled inputs

Add the <code>disabled</code> attribute on an input to prevent user input and trigger a slightly different look.

<form class="guide-example">
  <input id="disabledInput" type="text" placeholder="Disabled input here…" disabled>
</form>

## Disabled fieldsets

Add the disabled attribute to a <code>$lt;fieldset$gt;</code> to disable all the controls within the <code>$lt;fieldset$gt;</code> at once.

<form class="guide-example">
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-group checkbox">
      <label>
        <input type="checkbox"> Can't check this
      </label>
    </div>
    <button type="submit" class="btn">Submit</button>
  </fieldset>
</form>

## Validation states

Bootstrap includes validation styles for error, warning, info, and success messages. To use, add the appropriate class to the surrounding <code>.control-group</code>.

<form class="guide-example horizontal">
  <div class="form-group success">
    <label for="inputSuccess1">Input with success</label>
    <input type="text" id="inputSuccess1">
  </div>
  <div class="form-group warning">
    <label for="inputWarning1">Input with warning</label>
    <input type="text" id="inputWarning1" aria-describedby="warningHelpBlock">
    <span id="warningHelpBlock" class="help-text">This is a warning</span>
  </div>
  <div class="form-group error">
    <label for="inputError1">Input with error</label>
    <input type="text" id="inputError1" aria-describedby="errorHelpBlock">
    <span id="errorHelpBlock" class="help-text">There was an error</span>
  </div>
  <div class="form-group">
    <div class="checkbox success">
      <label>
        <input type="checkbox" id="checkboxSuccess" value="option1">
        Checkbox with success
      </label>
    </div>
    <div class="checkbox warning">
      <label>
        <input type="checkbox" id="checkboxWarning" value="option1">
        Checkbox with warning
      </label>
    </div>
    <div class="checkbox error">
      <label>
        <input type="checkbox" id="checkboxError" value="option1">
        Checkbox with error
      </label>
    </div>
  </div>
</form>
