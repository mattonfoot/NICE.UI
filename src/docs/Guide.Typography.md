---
title: Basic Typography
date: 2014-12-16
template: page.html
---

<section id="typography">
  <div class="sub-header">
    <h1>Typographic elements</h1>
  </div>

<h2 id="headings">Headings</h2>
<p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are available.</p>
<div class="guide-example guide-helper-seperate">
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
</div>
<pre class="prettyprint">
&lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;
&lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;
&lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;
&lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;
&lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;
&lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;  </pre>

<p>Create lighter, secondary text in any heading with a generic <code>&lt;small&gt;</code> tag.</p>
<div class="guide-example guide-helper-seperate">
<h1>h1. Bootstrap heading <small>Secondary text</small></h1>
<h2>h2. Bootstrap heading <small>Secondary text</small></h2>
<h3>h3. Bootstrap heading <small>Secondary text</small></h3>
<h4>h4. Bootstrap heading <small>Secondary text</small></h4>
<h5>h5. Bootstrap heading <small>Secondary text</small></h5>
<h6>h6. Bootstrap heading <small>Secondary text</small></h6>
</div>
<pre class="prettyprint">
&lt;h1&gt;h1. Bootstrap heading &lt;small&gt;Secondary text&lt;/small&gt;&lt;/h1&gt;
&lt;h2&gt;h2. Bootstrap heading &lt;small&gt;Secondary text&lt;/small&gt;&lt;/h2&gt;
&lt;h3&gt;h3. Bootstrap heading &lt;small&gt;Secondary text&lt;/small&gt;&lt;/h3&gt;
&lt;h4&gt;h4. Bootstrap heading &lt;small&gt;Secondary text&lt;/small&gt;&lt;/h4&gt;
&lt;h5&gt;h5. Bootstrap heading &lt;small&gt;Secondary text&lt;/small&gt;&lt;/h5&gt;
&lt;h6&gt;h6. Bootstrap heading &lt;small&gt;Secondary text&lt;/small&gt;&lt;/h6&gt;  </pre>

<h2 id="body-copy">Body copy</h2>
<p>NICE's global default <code>font-size</code> is <strong>16px</strong>, with a <code>line-height</code> of
<strong>24px</strong>. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In addition,
<code>&lt;p&gt;</code> (paragraphs) receive a bottom margin of their line-height to ensure vertical rhythm is
adhered to.</p>

<div class="guide-example">
<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla
non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget
metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
</div>
<pre class="prettyprint">  &lt;p&gt;...&lt;/p&gt;</pre>

<h3>Lead body copy</h3>
<p>Make a paragraph stand out by adding <code>.lead</code>.</p>
<div class="guide-example">
<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
</div>
<pre class="prettyprint">  &lt;p class="lead"&gt;...&lt;/p&gt;</pre>

<h3>Paragraphs directly following a heading</h3>
<p>Paragraphs that follow <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> elements will pull up to reduce
whitespace between them and the headings.</p>
<div class="guide-example">
<h1>h1. Heading 1</h1>
<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
<h2>h2. Heading 2</h2>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
</div>
<pre class="prettyprint">
&lt;h1&gt;...&lt;/h1&gt;
&lt;p class="lead"&gt;...&lt;/p&gt;
&lt;h2&gt;...&lt;/h2&gt;
&lt;p&gt;...&lt;/p&gt;  </pre>


<hr/>


<h2 id="emphasis">Emphasis</h2>
<p>Make use of HTML5's default emphasis tags.</p>

<h3><code>&lt;small&gt;</code></h3>
<p>For de-emphasizing inline or blocks of text, <small>use the small tag.</small></p>
<div class="guide-example">
<p><small>This line of text is meant to be treated as fine print.</small></p>
</div>
<pre class="prettyprint">
&lt;p&gt;
&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;
&lt;/p&gt;  </pre>

<h3><code>&lt;strong&gt;</code></h3>
<p>For emphasizing a snippet of text with a heavier font-weight.</p>
<div class="guide-example">
<p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
</div>
<pre class="prettyprint">  &lt;strong&gt;rendered as bold text&lt;/strong&gt;</pre>

<h3><code>&lt;em&gt;</code></h3>
<p>For emphasizing a snippet of text with italics.</p>
<div class="guide-example">
<p>The following snippet of text is <em>rendered as italicized text</em>.</p>
</div>
<pre class="prettyprint">  &lt;em&gt;rendered as italicized text&lt;/em&gt;</pre>

<div class="alert alert-info alert-block">
<h4>Feel free to also use <code>&lt;b&gt;</code> and
<code>&lt;i&gt;</code></h4>

<p>In HTML5 <code>&lt;b&gt;</code> is meant to highlight words or phrases without
conveying additional importance while <code>&lt;i&gt;</code> is mostly for voice, technical terms, etc.</p>
</div>

<h2 id="adv-emphasis">Advanced emphasis</h2>
<p>NICE.Bootstrap adds some additional classes that can be applied to the basic HTML5 elements to add even more
emphasis in certain circumstances</p>

<h3>Alignment classes</h3>
<p>Easily realign text to components with text alignment classes.</p>
<div class="guide-example guide-helper-tighten">
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
</div>
<pre class="prettyprint linenums">
&lt;p class="text-left"&gt;Left aligned text.&lt;/p&gt;
&lt;p class="text-center"&gt;Center aligned text.&lt;/p&gt;
&lt;p class="text-right"&gt;Right aligned text.&lt;/p&gt;  </pre>

<h3>Emphasis classes</h3>
<p>Convey meaning through colour using these additional utility classes which can be used to highlight warnings,
errors, critical or useful information as well as positive re-enforcement.</p>
<div class="guide-example guide-helper-tighten">
<p class="muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-error">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
</div>
<pre class="prettyprint linenums">
&lt;p class="muted"&gt;Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.&lt;/p&gt;
&lt;p class="text-warning"&gt;Etiam porta sem malesuada magna mollis euismod.&lt;/p&gt;
&lt;p class="text-error"&gt;Donec ullamcorper nulla non metus auctor fringilla.&lt;/p&gt;
&lt;p class="text-info"&gt;Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.&lt;/p&gt;
&lt;p class="text-success"&gt;Duis mollis, est non commodo luctus, nisi erat porttitor ligula.&lt;/p&gt;  </pre>

<hr/>


<h2 id="abbreviations">Abbreviations</h2>
<p>Stylized implementation of HTML's <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a <code>title</code> attribute have a light dotted bottom border and a help cursor on hover, providing additional context on hover.</p>

<h3><code>&lt;abbr&gt;</code></h3>
<p>For expanded text on long hover of an abbreviation, include the <code>title</code> attribute.</p>
<div class="guide-example">
<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
</div>
<pre class="prettyprint">  &lt;abbr title="attribute"&gt;attr&lt;/abbr&gt;</pre>

<h3>Acronyms</h3>
<p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size that accomodates acronyms.</p>
<div class="guide-example">
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
</div>
<pre class="prettyprint">  &lt;abbr title="HyperText Markup Language" class="initialism"&gt;HTML&lt;/abbr&gt;</pre>


<hr/>


<h2 id="addresses">Addresses</h2>
<p>Present contact information for the nearest ancestor or the entire body of work.</p>

<h3><code>&lt;address&gt;</code></h3>
<p>Preserve formatting by ending all lines with <code>&lt;br&gt;</code>.</p>
<div class="guide-example">
<address>
<strong>Twitter, Inc.</strong><br>
795 Folsom Ave, Suite 600<br>
San Francisco, CA 94107<br>
<abbr title="Phone">P:</abbr> (123) 456-7890
</address>
<address>
<strong>Full Name</strong><br>
<a href="mailto:#">first.last@example.com</a>
</address>
</div>
<pre class="prettyprint linenums">
&lt;address&gt;
&lt;strong&gt;Twitter, Inc.&lt;/strong&gt;&lt;br&gt;
795 Folsom Ave, Suite 600&lt;br&gt;
San Francisco, CA 94107&lt;br&gt;
&lt;abbr title="Phone"&gt;P:&lt;/abbr&gt; (123) 456-7890
&lt;/address&gt;

&lt;address&gt;
&lt;strong&gt;Full Name&lt;/strong&gt;&lt;br&gt;
&lt;a href="mailto:#"&gt;first.last@example.com&lt;/a&gt;
&lt;/address&gt;  </pre>


<hr/>


<h2 id="quotations">Quotations</h2>
<p>For quoting blocks of content from another source within your document.</p>

<h3>Default blockquote</h3>
<p>Wrap <code>&lt;blockquote&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the
quote. For straight quotes we recommend a <code>&lt;p&gt;</code>.</p>

<div class="guide-example">
<blockquote>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
</div>
<pre class="prettyprint linenums">
&lt;blockquote&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
&lt;/blockquote&gt;  </pre>

<h4>Options</h4>
<p>Style and content changes for simple variations on a standard blockquote.</p>

<h4>Naming a source</h4>
<p>Add <code>&lt;small&gt;</code> tag for identifying the source. Wrap the name of the source work in
<code>&lt;cite&gt;</code>.</p>
<div class="guide-example">
<blockquote>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
</blockquote>
</div>
<pre class="prettyprint linenums">
&lt;blockquote&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
&lt;small&gt;Someone famous &lt;cite title="Source Title"&gt;Source Title&lt;/cite&gt;&lt;/small&gt;
&lt;/blockquote&gt;  </pre>

<div class="alert alert-block alert-info">
<h4>Right pulled quotations</h4>
<p>Although bootstrap provides an alternate display by adding <code>.pull-right</code> to blockquotes NICE does
not use this style.</p>
</div>



<hr/>


<!-- Lists -->
<h2 id="lists">Lists</h2>

<h3>Unordered</h3>
<p>A list of items in which the order does <em>not</em> explicitly matter.</p>
<div class="guide-example">
<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit
<ul>
<li>Phasellus iaculis neque</li>
<li>Vestibulum laoreet porttitor sem</li>
</ul>
</li>
<li>Aenean sit amet erat nunc</li>
</ul>
</div>
<pre class="prettyprint linenums">
&lt;ul&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ul&gt;  </pre>

<h3>Alternate unordered</h3>
<p>Change the default <code>list-style</code> on list items (immediate children only).</p>
<div class="guide-example">
<ul class="alt">
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit
<ul>
<li>Phasellus iaculis neque</li>
<li>Vestibulum laoreet porttitor sem</li>
</ul>
</li>
<li>Aenean sit amet erat nunc</li>
</ul>
</div>
<pre class="prettyprint linenums">
&lt;ul class="alt"&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3>Ordered</h3>
<p>A list of items in which the order <em>does</em> explicitly matter.</p>
<div class="guide-example">
<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Phasellus iaculis neque</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Aenean sit amet erat nunc</li>
</ol>
</div>
<pre class="prettyprint linenums">
&lt;ol&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ol&gt;  </pre>

<h3>Alternate Ordered</h3>
<p>Change the default <code>list-style</code> on list items where the order <em>does</em> matter (immediate children only).</p>
<div class="guide-example">
<ol class="alt">
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Phasellus iaculis neque</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Aenean sit amet erat nunc</li>
</ol>
</div>
<pre class="prettyprint linenums">
&lt;ol class="alt"&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ol&gt;  </pre>

<h3>Unstyled</h3>
<p>Remove the default <code>list-style</code> and left padding on list items (immediate children only).</p>
<div class="guide-example">
<ul class="unstyled">
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit
<ul>
<li>Phasellus iaculis neque</li>
<li>Vestibulum laoreet porttitor sem</li>
</ul>
</li>
<li>Aenean sit amet erat nunc</li>
</ul>
</div>
<pre class="prettyprint linenums">
&lt;ul class="unstyled"&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ul&gt;  </pre>

<h3>Inline</h3>
<p>Place all list items on a single line with <code>inline-block</code> and some light padding.</p>
<div class="guide-example">
<ul class="inline">
<li>Lorem ipsum</li>
<li>Phasellus iaculis</li>
<li>Nulla volutpat</li>
</ul>
</div>
<pre class="prettyprint linenums">
&lt;ul class="inline"&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ul&gt;  </pre>

<h3>Definitions and descriptions</h3>
<p>A list of terms with their associated definitions or descriptions.</p>
<div class="guide-example">
<dl>
<dt>Definition lists</dt>
<dd>A definition list is perfect for defining terms.</dd>
<dt>Euismod</dt>
<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
<dd>Donec id elit non mi porta gravida at eget metus.</dd>
<dt>Malesuada porta</dt>
<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
</div>
<pre class="prettyprint linenums">
&lt;dl&gt;
&lt;dt&gt;...&lt;/dt&gt;
&lt;dd&gt;...&lt;/dd&gt;
&lt;/dl&gt;  </pre>

<h4>Options</h4>
<p>Make terms and definitions in <code>&lt;dl&gt;</code> line up side-by-side.</p>
<div class="guide-example">
<dl class="dl-horizontal">
<dt>Definition lists</dt>
<dd>A definition list is perfect for defining terms.</dd>
<dt>Euismod</dt>
<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
<dd>Donec id elit non mi porta gravida at eget metus.</dd>
<dt>Malesuada porta</dt>
<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
<dt>Felis euismod semper eget lacinia</dt>
<dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
risus.</dd>
</dl>
</div>
<pre class="prettyprint linenums">
&lt;dl class="dl-horizontal"&gt;
&lt;dt&gt;...&lt;/dt&gt;
&lt;dd&gt;...&lt;/dd&gt;
&lt;/dl&gt;  </pre>

<div class="alert alert-block alert-info">
<h4>Auto-truncating</h4>
<p>Horizontal description lists will truncate terms that are too long to fit in the left column fix
<code>text-overflow</code>. In narrower viewports, they will change to the default stacked layout.</p>
</div>
</section>
