---
title: Default styles
template: section.html
nav_sort: 1
nav_groups:
- primary
---

Individual form controls receive styling, but without any required base class on the <code>&lt;form&gt;</code> or large changes in markup. Results in stacked, left-aligned labels on top of form controls.

<div class="guide-example">
  <form>
    <fieldset>
      <legend>Legend</legend>

      <label>Label name</label>
      <input type="text" placeholder="Type something…">

      <p>Example block-level text here.</p>

      <label class="checkbox">
        <input type="checkbox"> Check me out
      </label>

      <button type="submit" class="btn">Submit</button>
    </fieldset>
  </form>
</div>
