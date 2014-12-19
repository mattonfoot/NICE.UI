---
section: Tabular data
title: Emphasising information
date: 2014-12-16
template: section.html
description: Use contextual classes to emphasise the information portrayed within table rows or cells.
---
<section id="tables-emphasis">
  <table>
    <colgroup>
      <col class="span1">
      <col class="span7">
    </colgroup>
    <thead>
      <tr>
        <th>Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>.success</code>
        </td>
        <td>Indicates a successful or positive action.</td>
      </tr>
      <tr>
        <td>
          <code>.error</code>
        </td>
        <td>Indicates a dangerous or potentially negative action.</td>
      </tr>
      <tr>
        <td>
          <code>.warning</code>
        </td>
        <td>Indicates a warning that might need attention.</td>
      </tr>
      <tr>
        <td>
          <code>.info</code>
        </td>
        <td>Used as an alternative to the default styles.</td>
      </tr>
    </tbody>
  </table>
  <div class="guide-example example-processed">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Payment Taken</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="success">
          <td>1</td>
          <td>TB - Monthly</td>
          <td>01/04/2012</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>2</td>
          <td>TB - Monthly</td>
          <td>02/04/2012</td>
          <td>--</td>
        </tr>
        <tr class="error">
          <td>3</td>
          <td>TB - Monthly</td>
          <td>03/04/2012</td>
          <td>Declined</td>
        </tr>
        <tr>
          <td>4</td>
          <td>TB - Monthly</td>
          <td>04/04/2012</td>
          <td>--</td>
        </tr>
        <tr class="warning">
          <td>5</td>
          <td>TB - Monthly</td>
          <td>05/04/2012</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>6</td>
          <td>TB - Monthly</td>
          <td>06/04/2012</td>
          <td>--</td>
        </tr>
        <tr class="info">
          <td>7</td>
          <td>TB - Monthly</td>
          <td>07/04/2012</td>
          <td>Call in to confirm</td>
        </tr>
        <tr>
          <td>8</td>
          <td>TB - Monthly</td>
          <td>08/04/2012</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </div>
<pre class="prettyprint linenums"><code>...
  &lt;tr class="success"&gt;
  &lt;td&gt;1&lt;/td&gt;
  &lt;td&gt;TB - Monthly&lt;/td&gt;
  &lt;td&gt;01/04/2012&lt;/td&gt;
  &lt;td&gt;Approved&lt;/td&gt;
  &lt;/tr&gt;
  ...</code></pre>
</section>
