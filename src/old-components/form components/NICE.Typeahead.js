
/* toggle state button */

!function ( $, GLOBAL, undefined ) {

    "use strict";

    $.fn.txTypeahead = $.fn.typeahead.noConflict();

    var Typeahead = function (element, options) {
        var $el = this.$element = $(element);
        this.options = $.extend({}, $.fn.typeahead.defaults, options);

        this.bloodhound = this.createBloodhound();

        var inputName = this.$element.attr('name');

        this.$element
            .txTypeahead($.extend({}, this.options), $.extend({}, this.options, { source: this.bloodhound }))
            .on('typeahead:selected', function( e, suggestion ) {
                if ($.fn.trackevent) {
                    $el.trackevent('Typeahead', {
                        'action': suggestion.Title,
                        'label': suggestion.Link || 'no-link',
                        after: function() {
                            if (suggestion.Link) {
                                window.location.href = suggestion.Link;
                            }
                        }
                    });

                    return;
                }

                if (suggestion.Link) {
                    window.location.href = suggestion.Link;
                }
            });

        this.$element.attr('name', inputName);
    }

    Typeahead.prototype = {

        constructor: Typeahead

      , destroy: function() {
            this.$element.txTypeahead('destroy');

            return this;
        }

      , open: function() {
            this.$element.txTypeahead('open');

            return this;
        }

      , close: function() {
            this.$element.txTypeahead('close');

            return this;
        }

      , val: function( val ) {
            if ( val ) {
                this.$element.txTypeahead('val', val);
                return this;
            }

            return this.$element.txTypeahead('val');
        }

      , createBloodhound: function() {

            var source = sources[ this.options.sourceType ];

            if (!source) throw new Error( 'source type "' + this.options.sourceType + '" not configured.' );

            return source.call( this, this.options );
        }

      , modifyQueryUrl: function( url, term ) {
            var query = this.$element.parents('form').first().serialize();

            return url
                .replace(/%term/ig, term)
                .replace(/%query/ig, query);
        }
    }

    var sources = {

        remote: function( options ) {
            var settings = $.extend( {
                    datumTokenizer: function( d ) { return Bloodhound.tokenizers.whitespace( d.Title ); }
                  , queryTokenizer: Bloodhound.tokenizers.whitespace
                  , remote: {
                        url: options.source
                      , replace: $.proxy(this.modifyQueryUrl, this)
                    }
                }, options );

            var bh = new Bloodhound( settings );
            bh.initialize();

            return bh.ttAdapter();
        }

      , local: function( options ) {
            return function( query, cb ) {
                var q = query.toLowerCase().replace(/['"]/ig, '');
                var matches, topMatches, count, cache = {};

                if ( cache[ query ] ) {
                    return cb( cache[ query ] );
                }

                asyncTask( options.source, function( list ) {
                    matches = [];
                    topMatches = [];
                    count = 0;

                    $.each( list, testListItem );

                    cb( cache[ query ] = topMatches.concat( matches ) );
                });

                function testListItem( i, item ) {
                    var title = item.Title.toLowerCase();
                    var startsWith = title.indexOf( q ) === 0;
                    var location = title.indexOf( ' ' + q );

                    if (startsWith) {
                        topMatches.push( item );
                        count++;
                    } else if ( location > 0 ) {
                        matches.push( item );
                        count++;
                    }

                    if (count == 5) return false;
                }
            };
        }

    }

    function asyncTask( varname, cb ) {
        if ( GLOBAL[ varname ] ) {
            return cb( GLOBAL[ varname ] );
        }

        window.setTimeout(function() {
            asyncTask( varname, cb );
        }, 50);
    }


    /* TYPEAHEAD PLUGIN DEFINITION
     * =========================== */

    var old = $.fn.typeahead

    $.fn.typeahead = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('typeahead')
          , options = $.extend({}, $.fn.typeahead.defaults, $this.data(), typeof option == 'object' && option);

        if (!data) $this.data('typeahead', (data = new Typeahead(this, options)));

        if (typeof option == 'string') data[option]();
      })
    }

    $.fn.typeahead.defaults = {
        autoselect: false
      , highlight: true
      , hint: false
      , minLength: 3
      , displayKey: 'Title'
      , templates: {
            suggestion: function( suggestion ) {
                var term = [];

                if (suggestion.SectionType) {
                  term.push('<p class="type">{{SectionType}}</p>'.replace(/\{\{sectiontype\}\}/ig, suggestion.SectionType))
                }

                term.push('<p class="title">{{Title}}</p>'.replace(/\{\{title\}\}/ig, suggestion.Title))

                if (suggestion.SectionType) {
                  term.push('<p class="section">{{Section}}</p>'.replace(/\{\{section\}\}/ig, suggestion.Section))
                }

                return term.join('');
            }
        }
      , sourceType: 'remote'
      , source: '/typeahead?term=%term'
    }

    $.fn.typeahead.Constructor = Typeahead;


   /* TYPEAHEAD NO CONFLICT
    * =================== */

    $.fn.typeahead.noConflict = function () {
      $.fn.typeahead = old;

      return this;
    }


   /* TYPEAHEAD DATA-API
    * ================== */

    $(document)
        .on('keyup', '[data-provide="typeahead"]', function(e) {
            if (e.which === 13) $(this).blur();
        });

    $(window).on('load', function (e) {
        $( '[data-provide="typeahead"]' ).typeahead();
    });

}( window.jQuery, this );
