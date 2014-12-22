---
title: Control states
description: Provide feedback to users or visitors with basic feedback states on form controls and labels.
template: section.html
nav_sort: 5
nav_groups:
  - primary
---

## Input focus

We remove the default <code>outline</code> styles on some form controls and apply a <code>box-shadow</code> in its place for <code>:focus</code>.

<form class="guide-example form-inline">
  <input class="input-xlarge focused" id="focusedInput" type="text" value="This is focused...">
</form>

## Invalid inputs

Style inputs via default browser functionality with <code>:invalid</code>. Specify a <code>type</code>, add the <code>required</code> attribute if the field is not optional, and (if applicable) specify a <code>pattern</code>.

This is not available in versions of Internet Explorer 7-9 due to lack of support for CSS pseudo selectors.

<form class="guide-example form-inline">
  <input class="span3" type="email" placeholder="test@example.com" required>
</form>

## Disabled inputs

Add the <code>disabled</code> attribute on an input to prevent user input and trigger a slightly different look.

<form class="guide-example form-inline">
  <input class="input-xlarge" id="disabledInput" type="text" placeholder="Disabled input here…" disabled>
</form>

## Validation states

Bootstrap includes validation styles for error, warning, info, and success messages. To use, add the appropriate class to the surrounding <code>.control-group</code>.

<form class="guide-example form-horizontal">
  <div class="control-group warning">
    <label class="control-label" for="inputWarning">Input with warning</label>
    <div class="controls">
      <input type="text" id="inputWarning">
      <span class="help-inline">Something may have gone wrong</span>
    </div>
  </div>
  <div class="control-group error">
    <label class="control-label" for="inputError">Input with error</label>
    <div class="controls">
      <input type="text" id="inputError">
      <span class="help-inline">Please correct the error</span>
    </div>
  </div>
  <div class="control-group info">
    <label class="control-label" for="inputInfo">Input with info</label>
    <div class="controls">
      <input type="text" id="inputInfo">
      <span class="help-inline">Username is taken</span>
    </div>
  </div>
  <div class="control-group success">
    <label class="control-label" for="inputSuccess">Input with success</label>
    <div class="controls">
      <input type="text" id="inputSuccess">
      <span class="help-inline">Woohoo!</span>
    </div>
  </div>
</form>
