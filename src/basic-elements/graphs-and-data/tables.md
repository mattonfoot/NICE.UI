---
section: Graphs and data
title: Tabular data
date: 2014-12-16
description: Basic styles applied to tables to increase readability
template: section.html
nav_sort: 1
nav_groups:
  - primary
---

Basic styling covers all <code>&lt;table&gt;</code> elements and within the <code>&lt;tbody&gt;</code> rows will have zebra-striping via the <code>:nth-child</code> CSS selector (not available in IE7-8) and a hover state to highlight row data to make reading across lines easier.

<div class="guide-example example-processed">
  <table class="example-tldr">
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
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
<pre class="prettyprint linenums"><code>
  &lt;table&gt;
  &lt;caption&gt;...&lt;/caption&gt;
  &lt;thead&gt;
  &lt;tr&gt;
  &lt;th&gt;...&lt;/th&gt;
  &lt;th&gt;...&lt;/th&gt;
  &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
  &lt;tr&gt;
  &lt;td&gt;...&lt;/td&gt;
  &lt;td&gt;...&lt;/td&gt;
  &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;/table&gt;
</code></pre>


## Supported table markup

List of supported table HTML elements and how they should be used.

<table>
  <colgroup>
    <col class="span1">
    <col class="span7">
  </colgroup>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>&lt;table&gt;</code>
      </td>
      <td>
        Wrapping element for displaying data in a tabular format
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;thead&gt;</code>
      </td>
      <td>
        Container element for table header rows (<code>&lt;tr&gt;</code>) to label table columns
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;tbody&gt;</code>
      </td>
      <td>
        Container element for table rows (<code>&lt;tr&gt;</code>) in the body of the table
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;tr&gt;</code>
      </td>
      <td>
        Container element for a set of table cells (<code>&lt;td&gt;</code> or <code>&lt;th&gt;</code>) that appears
        on a single row
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;td&gt;</code>
      </td>
      <td>
        Default table cell
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;th&gt;</code>
      </td>
      <td>
        Special table cell for column (or row, depending on scope and placement) labels
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;caption&gt;</code>
      </td>
      <td>
        Description or summary of what the table holds, especially useful for screen readers
      </td>
    </tr>
  </tbody>
</table>
