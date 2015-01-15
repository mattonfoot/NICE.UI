---
title: Basic elements
description: The NICE UI library (currently v4.0.0) is composed of a default set of styles for all HTML5 elements as well as additional extensions that are based on our Brand Guidelines
template: page.html
nav_sort: 2
nav_groups:
  - primary
  - footer
---

## Basic usage

The NICE UI library is broken down into a set of minified css files which can be
included in web pages in a variety of ways to suit a variety of requirements.

To include the basic core framework you need to include the following link in
your HTML5 document <code>&lt;head&gt;</code>

<pre class="prettyprint linenums"><code>&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.core.css"&gt;</code></pre>

<div class="note note-warning">
  <p><strong>Be aware:</strong> The core of the framework covers HTML5 elements only.</p>
</div>

## Plugins

If you want to use any of the additional basic elements of the framework, such
as layouts or iconography, they will need to be included separately.

<pre class="prettyprint linenums"><code>&lt;!-- Layouts --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.layouts.css"&gt;

&lt;!-- Iconography --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.iconography.css"&gt;

&lt;!-- Navigation --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.navigation.css"&gt;</code></pre>

### Combined

If you require all the basic elements as well as the plugins then you can simply
include all bundles in one, like so;

<pre class="prettyprint linenums"><code>&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.css"&gt;</code></pre>
