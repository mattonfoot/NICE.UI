---
section: Design patterns
title: Form layout
description: Included with NICE.UI are three optional form layouts for common use cases
template: page.html
disqus_identifier: /design-patterns/form-layout
nav_sort: 3
nav_groups:
  - primary
---

Individual form controls receive styling, but without any required base class on the <code>&lt;form&gt;</code> or large changes in markup. Results in stacked, left-aligned labels on top of form controls.

<div class="guide-example">
<form role="form">
  <div class="form-group">
    <label for="exampleInputEmail">Email address</label>
    <input type="email" id="exampleInputEmail" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword">Password</label>
    <input type="password" id="exampleInputPassword" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-text">Example block-level help text here.</p>
  </div>
  <div class="form-group checkbox">
    <label><input type="checkbox"> Check me out</label>
  </div>
  <div class="form-group">
    <button type="submit" class="btn">Submit</button>
  </div>
</form>
</div>
