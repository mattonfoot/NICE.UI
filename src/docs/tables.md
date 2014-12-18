---
title: Tabluar data
date: 2014-12-16
template: page.html
---

<div class="alert alert-block alert-info">
  <h4>Do you really need a table?</h4>

  <p>When choosing the best way to correctly markup your content you need to look at the purpose of the information conveyed by it. better ways to mark up your information could be <a href="/docs/typography/lists">lists</a> which can represent either hierarchies or terms and definitions in a much more effective way than a table can.</p>
</div>

- [Basic tables](/docs/tables/basic)
- [Emphasising information](/docs/tables/emphasis)


              <h2>Optional row classes</h2>
              <p>Use contextual classes to color table rows.</p>
              <table class="table table-bordered table-striped">
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
              <div class="guide-example">
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
                    <tr class="error">
                      <td>2</td>
                      <td>TB - Monthly</td>
                      <td>02/04/2012</td>
                      <td>Declined</td>
                    </tr>
                    <tr class="warning">
                      <td>3</td>
                      <td>TB - Monthly</td>
                      <td>03/04/2012</td>
                      <td>Pending</td>
                    </tr>
                    <tr class="info">
                      <td>4</td>
                      <td>TB - Monthly</td>
                      <td>04/04/2012</td>
                      <td>Call in to confirm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre class="prettyprint linenums">
                ...
                &lt;tr class="success"&gt;
                &lt;td&gt;1&lt;/td&gt;
                &lt;td&gt;TB - Monthly&lt;/td&gt;
                &lt;td&gt;01/04/2012&lt;/td&gt;
                &lt;td&gt;Approved&lt;/td&gt;
                &lt;/tr&gt;
                ...  </pre>
