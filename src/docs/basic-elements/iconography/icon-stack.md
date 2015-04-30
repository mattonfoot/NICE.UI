---
section: Glyphs
title: Icon stack
description: It is possible to use the NICE Glyphs along with a Font Awesome style icon-stack
template: section.html
disqus_identifier: /basic-elements/layout/icon-stack
nav_sort: 1
nav_groups:
  - primary
---

Use the <code>.glyph-stack</code> class to overlay a list of glyphs on top of
each other to combine them into more advanced icons;

<div class="glyph-grid" id="iconstack-examples"></div>
<pre class="prettyprint"><code>&lt;span class="glyph-stack"&gt;
  &lt;i aria-hidden="true" class="glyph-circle glyph-stack-base"&gt;&lt;/i&gt;
  &lt;i aria-hidden="true" class="glyph-twitter"&gt;&lt;/i&gt;
&lt;/span&gt;
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
    , 'home'
    , 'text-size'
  ];

  $('#iconstack-examples').html(
    $.map(icon_classes, function( value, i ) {
      var ico_class = 'glyph-' + value;
      return '<div class="glyph"><span class="fs1 glyph-stack"><i aria-hidden="true" '
        + 'class="glyph-circle glyph-stack-base"></i><i aria-hidden="true" class="' + ico_class
        + '"></i></span></div>';
    }).join('')
  );

  $('#glyphs').on('click, focus', 'input', function(e) { e.target.select(); });
}, 500);
</script>
