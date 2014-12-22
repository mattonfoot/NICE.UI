---
title: Layout options
description: Included with NICE.UI are three optional form layouts for common use cases
template: section.html
nav_sort: 2
nav_groups:
- primary
---

### Search form

Add <code>.form-search</code> to the form for a special search icon button.

<div class="guide-example">
  <form class="form-search">
    <input type="text" class="search-query"> <button type="submit" class="btn">Search</button>
  </form>
</div>

### Inline form

Add <code>.form-inline</code> for left-aligned labels and inline-block controls for a compact layout.

<div class="guide-example">
  <form class="form-inline">
    <input type="text" placeholder="Email">

    <input type="password" placeholder="Password">

    <label class="checkbox"><input type="checkbox"> Remember me</label>

    <button type="submit" class="btn">Sign in</button>
  </form>
</div>

### Horizontal form

Right align labels and float them to the left to make them appear on the same line as controls. Requires the most markup changes from a default form:

-  Add <code>.form-horizontal</code> to the form
-  Wrap labels and controls in <code>.control-group</code>
-  Add <code>.control-label</code> to the label
-  Wrap any associated controls in <code>.controls</code> for proper alignment

<div class="guide-example">
  <form class="form-horizontal">
    <div class="control-group">
      <label for="inputEmail">Email</label>

      <div class="controls">
        <input type="text" id="inputEmail" placeholder="Email">
      </div>
    </div>
    <div class="control-group">
      <label for="inputPassword">Password</label>

      <div class="controls">
        <input type="password" id="inputPassword" placeholder="Password">
      </div>
    </div>
    <div class="control-group">
      <div class="controls">
        <label class="checkbox"><input type="checkbox"> Remember me</label>

        <button type="submit" class="btn">Sign in</button>
      </div>
    </div>
  </form>
</div>
