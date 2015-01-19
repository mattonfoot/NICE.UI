---
title: Basic elements
description: The NICE UI library (currently v4.0.0) is composed of a default set of styles for all HTML5 elements as well as additional extensions that are based on our Brand Guidelines
template: page.html
nav_sort: 2
nav_groups:
  - primary
  - footer
---

## Requires HTML5 doctype

The NICE UI library makes use of certain HTML elements and CSS properties that
require the use of the HTML5 doctype. Include it at the beginning of all your projects.

<pre class="prettyprint linenums"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
...
&lt;/html&gt;</code></pre>

## Global settings

### Typography and links

The NICE UI library sets basic global display, typography, and link styles. Specifically, we:

  - Remove <code>margin</code> on the body
  - Set the <code>background-color</code> for the whole document
  - Set the base <code>font-family</code>, <code>font-size</code>, and <code>line-height</code>to our typographic baseline and vertical grid
  - Set the global link color and underline style

These styles are taken from the [NICE Brand guidelines 2014](http://nhsevidence.github.io/NICE.Design/brand/style-guide.html) and will be kept in line with these corporate guidelines.

### CSS Reset

The NICE UI library overrides the basic HTML5 elements to create a standard visual style across all supported browsers.

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

### Plugins

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

## Basic HTML template

With a brief intro into the contents out of the way, we can focus on putting the NICE UI library to use.
To do that, we'll utilize a basic HTML template that includes everything we mentioned in the previous section.

Now, here's a look at a **typical HTML file**:

<pre class="prettyprint linenums"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"&gt;

    &lt;title&gt;NICE.Bootstrap 101 Template&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

To make this **a NICE.Bootstrapped template**, just include the appropriate CSS and JS files:

<pre class="prettyprint linenums"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta name="X-UA-Compatible" content="IE=edge,chrome=1" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"&gt;

    &lt;title&gt;The NICE UI library basic HTML template&lt;/title&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;

    &lt;!-- Latest compiled and minified CSS --&gt;
    &lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.css"&gt;

    &lt;!--[if IE 7]&gt;
    &lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/glyhs-ie7.css" /&gt;
    &lt;![endif]--&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;

    &lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/jquery.js"&gt;&lt;/script&gt;
    &lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/bootstrap.js"&gt;&lt;/script&gt;
    &lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/ui.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

**And you're set!** With those few files added, you can begin to develop any site or application with Bootstrap.
