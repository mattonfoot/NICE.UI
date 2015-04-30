---
section: Basic elements
title: Iconography
description: A set of glyphs that can be used to further enhance meaning
template: page.html
disqus_identifier: /basic-elements/iconography
nav_sort: 4
nav_groups:
  - primary
---

## Including the Iconography extension

The NICE UI library has a set of brand and service related symbols as well as
additional glyphs that have been designed to compliment information.

To include the iconography extension you need to include the following link in
your HTML5 document <code>&lt;head&gt;</code>.

<pre class="prettyprint linenums"><code>&lt;!-- Iconography --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.iconography.css"&gt;</code></pre>

### Combined

You will also get the iconography extension within the basic combined bundle.

<pre class="prettyprint linenums"><code>&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.nice.org.uk/v4.0.0/css/ui.css"&gt;</code></pre>

## Utilising glyphs

Include glyphs as icons into your web pages by using the <code>.glyph-*</code> classes.

<div class="glyph-grid" id="classes-examples"></div>
<pre class="prettyprint"><code>&lt;span aria-hidden="true" class="glyph-twitter"&gt;&lt;/span&gt;
&lt;span aria-hidden="true" class="glyph-print"&gt;&lt;/span&gt;
&lt;span aria-hidden="true" class="glyph-syndication"&gt;&lt;/span&gt;
</code></pre>

<div class="note note-warning">
  <p><strong>Be aware:</strong> If you add a <code>.glyph-*</code> class on an element that is not specifically for displaying icon glyphs then you will find that in browsers below IE8 that the content of the element is replaced by just the glyph.</p>

  <p>Please include icon glyphs as a separate html element inline with your content.</p>
</div>

<script type="text/javascript" defer>
setTimeout(function() {
  var icon_classes = [
        'twitter'
      , 'print'
      , 'standards'
      , 'email-open'
      , 'search'
      , 'pathways'
      , 'download'
      , 'support'
      , 'share'
      , 'readnews'
      , 'infoforpublic'
      , 'podcast'
      , 'previous'
      , 'news'
      , 'guideline'
      , 'fullscreen'
      , 'information'
      , 'guidance'
      , 'facebook'
      , 'syndication'
      , 'email-closed'
      , 'next'
      , 'bookmark'
      , 'evidence'
      , 'apps'
      , 'circle'
      , 'logo'
      , 'logo-name'
      , 'capsule'
      , 'pathways-node'
      , 'circle-blank'
      , 'user'
      , 'trash'
      , 'sort'
      , 'sort-up'
      , 'sort-down'
      , 'remove'
      , 'quote-right'
      , 'quote-left'
      , 'plus'
      , 'play'
      , 'ok'
      , 'minus'
      , 'cloud-upload'
      , 'cloud-download'
      , 'caret-up'
      , 'caret-right'
      , 'caret-left'
      , 'caret-down'
      , 'angle-up'
      , 'angle-right'
      , 'angle-left'
      , 'angle-down'
      , 'double-angle-up'
      , 'double-angle-right'
      , 'double-angle-left'
      , 'double-angle-down'
      , 'chevron-up'
      , 'chevron-right'
      , 'chevron-left'
      , 'chevron-down'
      , 'hamburger'
      , 'file'
      , 'file-blank'
      , 'file-text'
      , 'file-text-blank'
      , 'spinner'
      , 'stop'
      , 'lines'
      , 'calendar'
      , 'group'
      , 'adjust'
      , 'plus-circle'
      , 'linkedin'
      , 'google-plus'
      , 'warning'
      , 'prescribing'
      , 'uptake'
      , 'filter'
      , 'home'
      , 'text-size'
  ];

  $('#classes-examples').html(
    $.map(icon_classes, function( value, i ) {
      var ico_class = 'glyph-' + value;
      return '<span class="box1"><span aria-hidden="true" class="' + ico_class + '"></span>&nbsp;' + ico_class + '</span>';
      }).join('')
    );

  $('#glyphs').on('click, focus', 'input', function(e) { e.target.select(); });
}, 500);
</script>
