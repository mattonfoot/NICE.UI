---
section: Related content
title: Panels
description: For those situations where you just need to put your information in a box.
template: section.html
nav_sort: 1
nav_groups:
- primary
---

By default, all the <code>.panel</code> does is apply some basic border and padding to contain some content.

<div class="guide-example">
  <div class="panel panel-default">
    <div class="panel-body">
      Basic panel example
    </div>
  </div>
</div>

## Panel with heading

Easily add a heading container to your panel with <code>.panel-heading</code>.
You may also include any <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> with a
<code>.panel-title</code> class to add a pre-styled heading.

<div class="guide-example">
  <div class="panel panel-default">
    <div class="panel-heading example-tldr">Panel heading without title</div>
    <div class="panel-body example-ignore">
      Panel content
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title example-tldr">Panel title</h3>
    </div>
    <div class="panel-body example-ignore">
      Panel content
    </div>
  </div>
</div>

## Panel with footer

Wrap buttons or secondary text in ```.panel-footer```. Note that panel
footers **do not** inherit colours and borders when using contextual variations
as they are not meant to be in the foreground.

<div class="guide-example">
  <div class="panel panel-default">
    <div class="panel-body example-ignore">
      Panel content
    </div>
    <div class="panel-footer example-tldr">Panel footer</div>
  </div>
</div>

## Contextual alternatives

Like other components, easily make a panel more meaningful to a particular
context by adding any of the contextual state classes.

<div class="guide-example">
<div class="panel panel-default example-tldr">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title <a href="#">A link</a></h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
<div class="panel panel-outline example-tldr">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title <a href="#">A link</a></h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
<div class="panel panel-success example-tldr">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title <a href="#">A link</a></h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
<div class="panel panel-info example-tldr">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title <a href="#">A link</a></h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
<div class="panel panel-warning example-tldr">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title <a href="#">A link</a></h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
<div class="panel panel-danger example-tldr">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title <a href="#">A link</a></h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
</div>

## With tables

Add any non-bordered ```.table``` within a panel for a seamless design.
If there is a ```.panel-body```, we add an extra border to the top of the table
for separation.

<div class="guide-example">
<div class="panel panel-default">
  <div class="panel-heading example-tldr">Panel heading</div>
  <div class="panel-body example-tldr">
    <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
  </div>
  <table class="table example-tldr">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

If there is no panel body, the component moves from panel header to table without interruption.

<div class="guide-example">
<div class="panel panel-default">
  <div class="panel-heading example-tldr">Panel heading</div>
  <table class="table example-tldr">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
