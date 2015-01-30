---
section: Menus
title: Tophat
description: A design pattern used across all services to provide easy access to other services and account information
template: section.html
disqus_identifier: /design-patterns/menus/tophat
nav_sort: 1
nav_groups:
  - primary
---

## Including the Tophat

The NICE UI library provides a standard component that must be included on all
web pages to ensure uniformity across services. For an example of the basic
Tophat just look to <a href="#">the top of this web page</a>.

To include the component you need to include the following script tag before
other script tags in your HTML5 document <code>&lt;body&gt;</code>.

<pre class="prettyprint linenums"><code>&lt;!-- Tophat script --&gt;
&lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/ui.tophat.js" async&gt;&lt;/script&gt;</code></pre>

The tophat consists of three tiers of navigation each customisable and
configurable in different ways;

### The top tier

Displaying the NICE Logo to consistently tie each service into the
group. Several navigational links are provided that take the user to each of our
core service offerings. Additional it provides access to the NICE accounts system
allowing a user to register and manage their profile across the NICE services.

### The middle tier

Closed by default on short screen devices to provide as much room for visible
content as possible, this tier provides access to secondary services within the
evidence service group.

### The bottom tier

The most configurable area of the tophat and is unique to
each service if it is included. See the options for advanced ways to tailor this
tier to your service but the most basic setup for this tier is to display the
main service navigation.

<pre class="prettyprint linenums"><code>&lt;!-- Tophat placeholder --&gt;
&lt;header class="nice-tophat" role="banner"&gt;
  &lt;div class="nice-global" id="nice-global"&gt;
    &lt;div class="tophat-inner"&gt;
      &lt;ul class="menu" role="navigation"&gt;
        &lt;li&gt;&lt;a href="/" rel="home"&gt;Home&lt;/a&gt;&lt;/li&gt;
        ...
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;
</code></pre>

### Options

The Tophat component is highly configurable giving several options that control
its visible look as well as the features included. Options can be passed via
data attributes on the script tag simply append the option name to data-, as in
data-service="".

The following is a summary of the available options;

<table>
  <thead>
    <tr>
      <th>name</th><th>type</th><th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><var>service</var></td><td>String</td><td><samp>''</samp></td>
      <td>The name of this service name so that it can be highlighted in the top tier.
        <span class="text-info"><strong>Note: </strong> there is no need to use this if it is an evidence service use the <code>evidence</code> option.</span></td>
    </tr>
    <tr>
      <td><var>wtrealm</var></td><td>string</td><td><samp>''</samp></td>
      <td>If present the value will be passed on to the accounts system to identify the actual root of a particular service. By default the accounts system assume the domain root is the correct please to send authentication information.</td>
    </tr>
  </tbody>
</table>

## A consistent search experience

including the <code>data-search</code> attribute will force the tophat to include
a search form that provides the consistent search experience design by the
Search and Information Architecture Team.

<pre class="prettyprint linenums"><code>&lt;!-- Tophat script --&gt;
  &lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/ui.tophat.js"
  data-search="/search?q=%term"
  async&gt;&lt;/script&gt;</code></pre>

When the search field is included within the bottom tier additional options are
available incase the typeahead component has also been included. The options are
designed to work with <a href="https://twitter.github.io/typeahead.js/" target="_blank">twitters opensource typeahead.js</a>.

Include the typeahead component by also including the following <code>script</code>
tags directly after the tophat <code>script</code> tag. jquery is a dependency
of the twitter typeahead.

<pre class="prettyprint linenums"><code>&lt;!-- jquery script --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js" &gt;&lt;/script&gt;

&lt;!-- Typeahead script --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.10.4/dist/typeahead.bundle.min.js" &gt;&lt;/script&gt;</code></pre>

The following is a summary of the additional typeahead options;

<table>
  <thead>
    <tr>
      <th>name</th><th>type</th><th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><var>search</var></td><td>String</td><td><samp>''</samp></td>
      <td>The search url used by this service. If the url is empty then the search field will not be included in the lower tier. The standard template text of <code>%term</code> will get replace by the appropriate search term entered into the search field.</td>
    </tr>
    <tr>
      <td><var>typeaheadtype</var></td><td>String</td><td><samp>'remote'</samp></td>
      <td>Can be set to <samp>'local'</samp> in order to utilise a javascript array located on the <code>window</code> object</td>
    </tr>
    <tr>
      <td><var>typeaheadsource</var></td><td>String</td><td><samp>'/typeahead?term=%term'</samp></td>
      <td>Indicates the remote service URL the typeahead will request results from. If the option <var>typeaheadtype</var> is set to local then this must be the <code>window</code> object property name that is a valid string array. Again the standard template text of <code>%term</code> will get replace by the appropriate search term entered into the search field.</td>
    </tr>
  </tbody>
</table>

## NICE Evidence services microsites

As mentioned in the list of options a NICE evidence service should use the
<code>data-evidence</code> attribute to highlight the service, this will
automatically highlight the evidence services item in the top tier and open the
evidence menu by default on that service.

<table>
  <thead>
    <tr>
      <th>name</th><th>type</th><th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><var>evidence</var></td><td>String</td><td><samp>''</samp></td>
      <td>The name of this evidence service name so that it can be highlighted in the middle tier. If set it will automatically overide the <code>service</code> option and set it to "evidence".</td>
    </tr>
  </tbody>
</table>

<pre class="prettyprint linenums"><code>&lt;!-- Tophat script --&gt;
&lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/ui.tophat.js"
  data-evidence="bnf"
  data-search="/formulary/bnf/current/search"
  data-typeaheadsource="/formulary/bnf/autocomplete?%query"
  data-wtrealm="http://www.evidence.nhs.uk/formulary/bnf/current/"
  async&gt;&lt;/script&gt;</code></pre>

Additionally you may want to configure additonal microsite branding and livery
that will be integrated into the bottom tier. An example of the BNF Microsites
tophat placeholder is provided for reference. To see the result of using this
placeholder please refer to the actual <a href="http://www.evidence.nhs.uk/formulary/bnf/current" target="_blank">BNF website</a>

<pre class="prettyprint linenums"><code>&lt;!-- BNF Tophat placeholder --&gt;
&lt;header class="nice-tophat" role="banner"&gt;
  &lt;div class="nice-global nice-partner" id="nice-global"&gt;
    &lt;div class="tophat-inner"&gt;
      &lt;a href="/formulary/bnf/current/" class="partner-logo"&gt;&lt;img src="/formulary/content/nice/bnf-220-logo.png"/&gt;&lt;/a&gt;

      &lt;span class="partner-brand"&gt;British National Formulary &lt;small class="pull-right"&gt;December 2014&lt;/small&gt;&lt;/span&gt;

      &lt;ul class="menu" role="navigation"&gt;&lt;li&gt;&lt;a href="http://www.nice.org.uk/bnf-feedback"&gt;Leave feedback&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/formulary/bnf/current/general-information-and-changes/changes"&gt;What's new&lt;/a&gt;&lt;/li&gt;
        &lt;li class="active"&gt;&lt;a href="/formulary/bnf/current/"&gt;Formulary&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>

## NICE Internal services

Along with the primary NICE services, several web services are closed to select
audiences. These are classed as Internal services and are displayed slightly
differently so as to be less intrusive visually.

<pre class="prettyprint linenums"><code>&lt;!-- Internal service Tophat script --&gt;
&lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/ui.tophat.js" data-internal="Docs / Appraisals" data-home="/" async&gt;&lt;/script&gt;</code></pre>

Generally other options are ignored but again a placeholder can be included so
that the bottom tier of the tophat is displayed with local service navigation.
Also it is usual to set the additonal <code>data-home</code> attribute so that
the logo directs users to the root of the current service rather than the global
service root.

<table>
  <thead>
    <tr>
      <th>name</th><th>type</th><th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><var>internal</var></td><td>String</td><td><samp>''</samp></td>
      <td>Certain services fall outside of the primary NICE services and so should set the name of their service in this option. The service name will be displayed after the short version of the NICE logo and the tophat will take on the inverted appearance.</td>
    </tr>
    <tr>
      <td><var>home</var></td><td>String</td><td><samp>'http://www.nice.org.uk'</samp></td>
      <td>Sometimes there is a <strong>valid business reason</strong> for the logo to link to somewhere other than the root of the NICE service group.<br/><strong>Please use with caution!</strong></td>
    </tr>
  </tbody>
</table>

## Tracking events

The Tophat automatically integrates with Google Analytics and Google Tag Manager
sending trackable events over their integration methods. The following tracking
events are emitted if a tracking script is detected, if no tracking script is
detected then it will attempt use the browsers developer console.

<table>
  <thead>
    <tr>
      <th>Event Category</th><th>Event Action</th><th>Event Label</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><var>tophat</var></td><td>NICE Pathways</td><td>current url</td>
      <td>Indicates that the "NICE Pathways" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Guidance</td><td>current url</td>
      <td>Indicates that the "Guidance" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Standards and indicators</td><td>current url</td>
      <td>Indicates that the "Standards and indicators" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Evidence services expanded</td><td>current url</td>
      <td>Indicates that the "Evidence services" service menu has been expanded.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Evidence services collapsed</td><td>current url</td>
      <td>Indicates that the "Evidence services" service menu has been collapsed.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Sign in</td><td>current url</td>
      <td>Indicates that the "Sign in" link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Your Profile expanded</td><td>current url</td>
      <td>Indicates that the users profile menu has been expanded.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Your Profile collapsed</td><td>current url</td>
      <td>Indicates that the users profile menu has been collapsed.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Evidence search</td><td>current url</td>
      <td>Indicates that the "Evidence search" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>BNF</td><td>current url</td>
      <td>Indicates that the "BNF" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>BNFC</td><td>current url</td>
      <td>Indicates that the "BNFC" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>CKS</td><td>current url</td>
      <td>Indicates that the "CKS" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>tophat</var></td><td>Journals and databases</td><td>current url</td>
      <td>Indicates that the "Journals and databases" service link has been clicked in the tophat.</td>
    </tr>
    <tr>
      <td><var>search</var></td><td>term</td><td>search url</td>
      <td>Indicates that the tophat search was used and includes details of what was searched.</td>
    </tr>
    <tr>
      <td><var>Typeahead</var></td><td>suggestion</td><td>link url</td>
      <td>Indicates that the typeahead provided a suggestion that was used.</td>
    </tr>
  </tbody>
</table>

## JavaScript callback

Some services require a notification when the tophat has loaded. This is
provided through a document level callback. One such use of the callback is to
allow the UI of the web page to resize any elements that need to fill the
available area.

<pre class="prettyprint linenums"><code>document.onTophatReady = function() {
  // do something when the tophat has injected itself
}</code></pre>
