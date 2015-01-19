
!function ($) {

  "use strict";


 /* ELLIPSIS PUBLIC CLASS DEFINITION
  * ============================== */

  var Ellipsis = function (element, options) {
      this.$element = $(element);
      this.options = $.extend({}, $.fn.ellipsis.defaults, options);

      this.$element.attr('title', this.$element.text());

      if ( this.$element.is('.ellipsis-path') ) {
          var path = this.$element.html().split( '/' );

          if ( path.length > 1 ) {
              var name = path.pop()
                , contents = path.join( '/' ) + '<span class="filename">/' + name + '</span>';

              this.$element.html( contents );

              this.options.after = 'span.filename';
              this.options.wrap = 'letter';
          }
      }

      this.$element.dotdotdot( this.options );
  }


 /* ELLIPSIS PLUGIN DEFINITION
  * ======================== */

  var ellipsis = $.fn.ellipsis

  $.fn.ellipsis = function (option) {
      return this.each(function () {
          var $this = $(this)
            , data = $this.data('ellipsis')
            , options = typeof option == 'object' && option;

          if (!data) $this.data('ellipsis', (data = new Ellipsis(this, options)));
      })
  }

  $.fn.ellipsis.defaults = {
    ellipsis  : '…',
    wrap    : 'word',
    fallbackToLetter: true,
    after   : null,
    watch   : window,
    height    : null,
    tolerance : 0,
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  }

  $.fn.ellipsis.Constructor = Ellipsis;


 /* ELLIPSIS NO CONFLICT
  * ================== */

  $.fn.ellipsis.noConflict = function () {
      $.fn.ellipsis = old;

      return this;
  }


 /* ELLIPSIS DATA-API
  * =============== */

  function setup() {
    $('.ellipsis').ellipsis();
  }

  $(setup);

  $(window).on('load', function()
  {

    $(document).ajaxComplete(setup);

  });

}(window.jQuery);
