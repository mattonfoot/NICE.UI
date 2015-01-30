---
section: Basic elements
title: Palette
date: 2015-01-13
template: section.html
description: This is a reference screen showing the full default theme elements available through the framework.
disqus_identifier: /basic-elements/palette
nav_sort: 1
nav_groups:
- primary
---
<link rel="stylesheet" href="/styles/palette.css" />

## Document & Text

<ul class="palette palette-document palette-text palette-blockquote palette-highlighted palette-postal"></ul>

## Links

<ul class="palette palette-link"></ul>

## Forms

<ul class="palette palette-legend palette-label palette-input palette-output"></ul>

## Buttons

<ul class="palette palette-button"></ul>

## Tables

<ul class="palette palette-table"></ul>

## Pagination & breadcrumbs

<ul class="palette palette-breadcrumb palette-pagination palette-pager"></ul>

## Headers

<ul class="palette palette-header"></ul>

## Footer

<ul class="palette palette-footer"></ul>

## Panels

<ul class="palette palette-panel palette-herounit palete-well"></ul>

<script type="text/html" id="swatch">
<li class="swatch">
  <span class="example {{classname}}">The quick brown fox jumps over the lazy dog.</span>
  <h4 class="name">{{description}}</h4>
  <code class="hex" title="{{swatchclass}}">{{swatchclass}}</code>
</li>
</script>

<script src="/scripts/vendor/color.js"></script>
<script>
setTimeout(function() {
  var swatches = {};

  var ss = document.styleSheets;
  var param = ss[0].cssRules ? 'cssRules' : 'rules';
  for ( var i = 0, ssLen = ss.length; i < ssLen; i++) {
    var rules = ss[ i ][ param ];

    if (!rules) continue;

    for ( var j = 0, rLen = rules.length; j < rLen; j++) {
      var rule = rules[ j ];

      if ( rule.selectorText && ~rule.selectorText.indexOf( '.theme-' ) ) {
        var item = rule.selectorText.replace('.example', '').trim();
        var parts = (/\.theme-([^-]*)(?:-([^\s]*).*)*/ig).exec( item );

        swatches[ parts[ 1 ] ] = swatches[ parts[ 1 ] ] || [];
        swatches[ parts[ 1 ] ].push( parts[ 2 ] || parts[ 1 ] );
      }
    }
  }

  var template = document.getElementById( 'swatch' ).innerHTML;
  var lists = document.getElementsByTagName('UL');
  for ( var k = 0, listLen = lists.length; k < listLen; k++ ) {
    var list = lists[ k ];
    if (list.className.indexOf('palette ') === 0) {
      var parts = list.className.replace(/(palette(?:-?))/ig, '').split(' ');
      for ( var l = 0, partsLen = parts.length; l < partsLen; l++ ) {
        var part = parts[ l ];
        if ( swatches[ part ] ) {
          swatches[ part ].forEach(function( swatch ) {
            var classname = 'theme-' +  ( swatch !== part ? part + ' theme-' + part + '-' : '' ) + swatch;
            var swatchclass = 'theme-' +  ( swatch !== part ? part + '-' : '' ) + swatch;
            var description = swatch.replace(/-/mg, ' ') + ( swatch !== part ? ' ' + part : '' )

            list.innerHTML += template.replace(/\{\{classname\}\}/gmi, classname ).replace(/\{\{swatchclass\}\}/gmi, swatchclass ).replace(/\{\{description\}\}/gmi, description );
          });
        }
      }
    }
  }

  highlightAccessibilityColorIssues( document.querySelectorAll( '.palette > .swatch > .example' ) );

  function highlightAccessibilityColorIssues( swatches ) {
    var i = swatches.length - 1;

    var docColor = getStyle( document.body, 'color', 'color' );
    var docBackground = getStyle( document.body, 'backgroundColor', 'background-color' );

    while ( i >= 0 ) {
      var el = swatches[ i-- ];

      var elColor = getStyle(el, 'color', 'color' ) || docColor;
      var elBackground = getStyle( el, 'backgroundColor', 'background-color' ) || docBackground;

      var color = new Color( elColor );
      var bgColor = new Color( elBackground.replace( 'rgba(0, 0, 0, 0)', docBackground ) );


      var contrast = bgColor.contrast( color );

      var level = ( el.parentNode.className.match(/(disabled|muted)+/i) ? 0 : 4.5 );
      var compliance = contrast > level ? 'PASS' : 'FAIL';

      el.parentNode.setAttribute( 'title', 'Contrast ratio is ' + contrast + ':' + level + '. ' + compliance );

      if ( compliance === 'FAIL' ) {
        var themeName = el.parentNode.className.replace( 'swatch', '' );
        el.parentNode.className += ' color-error';
        console.log( themeName, elColor, elBackground, contrast, level, compliance );
      }
    }
  }

  function getStyle(el, styleProp, styleName) {
    var x = el;

    if (x.currentStyle) {
      var y = x.currentStyle[styleProp];

    } else if (window.getComputedStyle) {
      var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleName);
    }

    return y;
  }
}, 50);
</script>
