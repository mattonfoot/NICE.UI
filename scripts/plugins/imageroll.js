
!function ($) {

  "use strict";


 /* IMAGEROLL PUBLIC CLASS DEFINITION
  * ============================== */

  var ImageRoll = function (element, options) {
    this.$element = $(element);
    this.options = options;

    if ( typeof this.options.images === 'string' ) {
      this.options.images = (this.options.images || '').split(',');
    }
    if ( typeof this.options.sizes === 'string' ) {
      this.options.sizes = (this.options.sizes || '').split(',');
    }
  }

  ImageRoll.prototype = {

    roll: function() {
      if (this.options.background) {
        this.setBackgroundImage();
      }
    },

    setBackgroundImage: function() {
      if ( this.$element.css('background-image') !== 'none' ) {
        this.$element.css('background-image', 'url(' + this.generateUrl( this.options.sizes[ 2 ] ) + ')');
      }
    },

    generateUrl: function( size ) {
      return this.options.template.replace(/{{image}}/ig, this.rollImage() ).replace(/{{size}}/ig, size );
    },

    rollImage: function() {
      var max = this.options.images.length - 1;
      var rand = Math.round( Math.random() * max );
      return this.options.images[ rand ];
    }

  }


 /* IMAGEROLL PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.imageroll;

  $.fn.imageroll = function (option) {
      return this.each(function () {
        var $this = $(this)
        , data = $this.data('imageroll')
        , options = $.extend({}, $.fn.imageroll.defaults, $this.data(), options);

        if (!data) $this.data('imageroll', (data = new ImageRoll(this, options)));

        data.roll();
      })
  }

  $.fn.imageroll.defaults = {
    background: true,
    template: "/content/nice/{{image}}{{size}}.jpg",
    sizes: [ 1100, 1600, 3000 ]
  }

  $.fn.imageroll.Constructor = ImageRoll;


 /* IMAGEROLL NO CONFLICT
  * ================== */

  $.fn.imageroll.noConflict = function () {
      $.fn.imageroll = old;

      return this;
  }


 /* IMAGEROLL DATA-API
  * =============== */


 /* REMOTE LOAD DATA-API
  * =============== */

  function setup() {
    $('[data-rotate="images"]').imageroll();
  }

  $(window).on('load', function()
  {
    setup();

    $(document).ajaxComplete( setup );
  });

}(window.jQuery);
