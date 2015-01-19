
!function ($) {

  "use strict";


 /* PASTABLE PUBLIC CLASS DEFINITION
  * ============================== */

  var Pastable = function (element, options) {
      this.$element = $(element);

      this.cachedValue = this.$element.val();

      this.options = $.extend({}, $.fn.pastable.defaults, options);

      this.listen();
  }

  Pastable.prototype.paste = function ( content ) {
      setTimeout($.proxy( notify, this ), 0);

      if (content) {
        this.$element.val( content );
      }

      return this;
  };

  Pastable.prototype.listen = function () {
      var that = this;

      this.$element.on('paste', function (e) {
        that.paste();
      });
  };

  function notify() {
      var value = this.$element.val();

      var e = $.Event('afterpaste', {
        oldValue: this.cachedValue,
        newValue: value
      });

      this.$element.trigger( e );

      this.cachedValue = value;
  }


 /* PASTABLE PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.pastable

  $.fn.pastable = function (option, content) {
      return this.each(function () {
          var $this = $(this)
            , data = $this.data('pastable')
            , options = typeof option == 'object' && option;

          if (!data) $this.data('pastable', (data = new Pastable(this, options)));

          if (option == 'paste') data.paste( content );
      })
  }

  $.fn.pastable.defaults = {
  }

  $.fn.pastable.Constructor = Pastable;


 /* PASTABLE NO CONFLICT
  * ================== */

  $.fn.pastable.noConflict = function () {
      $.fn.pastable = old;

      return this;
  }


 /* PASTABLE DATA-API
  * =============== */

  function setup() {

    $('[data-spy="paste"]').pastable();

  }

  $(setup);

  $(window).on('load', function () {

      $(document)
        .ajaxComplete(setup);

  });

}(window.jQuery);