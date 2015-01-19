
!function ($) {

  "use strict";


 /* AJAX WATCHER PUBLIC CLASS DEFINITION
  * ============================== */

  var AjaxWatcher = function (element, options) {
      this.$element = $(element);
      this.options = options;

      this.listen();
  }

  AjaxWatcher.prototype = {

      listen: function() {
          var $target = $(this.options.watch);
          if ($target.length && $target.data('data')) {
              this.updateContent( $( $target.data('data') ) );
          }

          $(document)
              .on('update.watcher.data-api', this.options.watch, $.proxy(this.update, this));
      }

    , update: function( e ) {
          this.updateContent( $(e.response) );
      }

    , updateContent: function( $data ) {
          if (this.options.filter) {
              var $filtered = $data.filter(this.options.filter);

              if ($filtered.is(this.options.filter)) {
                $data = $filtered;
              }
          }

          this.$element[ this.options.insert ]( $data );
      }

  }


 /* AJAX WATCHER PLUGIN DEFINITION
  * ======================== */

  var watcher = $.fn.watcher

  $.fn.watcher = function (option) {
      return this.each(function () {
          var $this = $(this)
            , data = $this.data('watcher')
            , options = $.extend({}, $.fn.watcher.defaults, $this.data(), typeof option == 'object' && option);

          if (!data) $this.data('watcher', (data = new AjaxWatcher(this, options)));
      })
  }

  $.fn.watcher.defaults = {
      insert: 'append' // append, prepend, replace, html, after, before
  }

  $.fn.watcher.Constructor = AjaxWatcher;


 /* AJAX WATCHER NO CONFLICT
  * ================== */

  $.fn.watcher.noConflict = function () {
      $.fn.watcher = old;

      return this;
  }


 /* AJAX WATCHER DATA-API
  * =============== */

  function setup() {
    $('[data-watch]').watcher();
  }

  $(setup)

  $(window).on('load', function()
  {

    $(document).ajaxComplete(setup);

  });

}(window.jQuery);
