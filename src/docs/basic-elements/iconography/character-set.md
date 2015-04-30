---
section: Glyphs
title: Advanced use
description: Each NICE glyph is assigned to a specific character in the font set and can be accessed directly in your CSS classes
disqus_identifier: /basic-elements/layout/character-set
template: section.html
nav_sort: 2
nav_groups:
  - primary
---

## Raw character set

You can use the following reference characters once you have set an elements
<code>font-family</code> to <code>'NICE Glyphs'</code> using CSS;

<div class="glyph-grid" id="charset-examples"></div>

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

  $('#charset-examples').html(
    $.map(icon_classes, function( value, i ) {
      var charCode = 'e0' + ('00' + i.toString(16)).substr(-2);

      return '<div class="glyph"><i aria-hidden="true" class="fs1">&#x'
        + charCode + ';</i><input type="text" readonly="readonly" value="&amp;#x'
        + charCode + ';" /></div>';
    }).join('')
  );

  $('#glyphs').on('click, focus', 'input', function(e) { e.target.select(); });
}, 500);
</script>
