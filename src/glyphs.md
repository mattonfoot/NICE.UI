---
title: Glyphs
description: A set of iconography glyphs that can be used to further enhance meaning
template: page.html
nav_sort: 5
nav_groups:
- primary
- footer
---

## Class names

Include NICE Glyphs as icons into your web pages by using the <code>.glyph-*</code> classes.

<div class="glyph-grid" id="classes-examples"></div>
<pre class="prettyprint"><code>&lt;i aria-hidden="true" class="glyph-twitter"&gt;&lt;/i&gt;
&lt;i aria-hidden="true" class="glyph-print"&gt;&lt;/i&gt;
&lt;i aria-hidden="true" class="glyph-syndication"&gt;&lt;/i&gt;
</code></pre>

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
  ];

  $('#classes-examples').html(
    $.map(icon_classes, function( value, i ) {
      var ico_class = 'glyph-' + value;
      return '<span class="box1"><i aria-hidden="true" class="' + ico_class + '"></i>&nbsp;' + ico_class + '</span>';
      }).join('')
    );

  $('#glyphs').on('click, focus', 'input', function(e) { e.target.select(); });
}, 500);
</script>
