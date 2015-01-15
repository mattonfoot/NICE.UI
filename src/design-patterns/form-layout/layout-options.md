---
section: Forms
title: Layout options
description: Included with NICE.UI are three optional form layouts for common use cases
template: section.html
nav_sort: 2
nav_groups:
- primary
---

## Inline form

Add <code>.inline</code> for left-aligned labels and inline-block controls for a compact layout.

<div class="alert alert-info">
  <p><strong>Note:</strong> elements become inline and so will wrap when the available width is
    shorter than the length of the total line</p>
</div>

<div class="guide-example">
  <form class="inline" role="form">
    <div class="form-group">
      <label for="exampleInputEmail2">Email address</label>
      <input type="email" id="exampleInputEmail2" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword2">Password</label>
      <input type="password" id="exampleInputPassword2" placeholder="Password">
    </div>
    <div class="form-group checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button type="submit" class="btn">Sign in</button>
  </form>
</div>

## Horizontal form

Add <code>.form-horizontal</code> for right aligned labels floated to the left making them appear on the same line as controls.

<div class="guide-example">
  <form class="horizontal" role="form">
    <div class="form-group">
      <label for="exampleInputEmail3">Email address</label>
      <input type="email" id="exampleInputEmail3" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword3">Password</label>
      <input type="password" id="exampleInputPassword3" placeholder="Password">
    </div>
    <div class="form-group checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <div class="form-group">
      <button type="submit" class="btn">Sign in</button>
    </div>
  </form>
</div>
