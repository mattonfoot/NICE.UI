!function ($) {

    "use strict";

    var Carousel = function (element, options) {
        this.$element = $(element);

        this.options = options;
        var owl = this.owl = this.$element.find('.carousel-inner').addClass('owl-carousel').owlCarousel(options);

        $(element)
            .delegate('.left', 'click', function() { owl.trigger('owl.prev'); })
            .delegate('.right', 'click', function () { owl.trigger('owl.next'); })
        .find('.left, .right').data('data-target', this.$element);
    }

    Carousel.prototype = {

        cycle: function (e) {
            this.owl.trigger( 'owl.next' );

            return this;
        }

        , getActiveIndex: function () {
            return this.owl.currentItem;
        }

        , to: function (pos) {
            this.owl.trigger( 'owl.goTo', pos );

            return this;
        }

        , pause: function (e) {
            this.owl.trigger( 'owl.stop' );

            return this
        }

        , next: function () {
            this.owl.trigger( 'owl.next' );

            return this;
        }

        , prev: function () {
            this.owl.trigger( 'owl.prev' );

            return this;
        }

        , slide: function (type, next) {
            if (!!next) {
                this.owl.trigger( 'owl.' + type );

                return this;
            }

            this.owl.trigger( 'owl.goTo', this.$element.find('.owl-wrapper').children().index( next ) );

            return this;
        }

    }

    /* CAROUSEL PLUGIN DEFINITION
     * ========================== */

    var old = $.fn.carousel

    $.fn.carousel = function (option) {
        return this.each(function () {
            var $this = $(this)
              , data = $this.data('carousel')
              , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option);

            if (!data) $this.data('carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number') data.to(option)
        })
    }

    $.fn.carousel.defaults = {
        navigation: false,
        pagination: false,

        slideSpeed: 200,
        paginationSpeed: 500,

        autoPlay: true,

        responsive: true,
        singleItem: true
    }

    $.fn.carousel.Constructor = Carousel;


    /* CAROUSEL NO CONFLICT
     * ==================== */

    $.fn.carousel.noConflict = function () {
        $.fn.carousel = old;
        return this;
    }

    /* CAROUSEL DATA-API
     * ================= */

    $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
        var $this = $(this), href
          , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
          , options = $.extend({}, $target.data(), $this.data())
          , slideIndex;

        $target.carousel(options);

        if (slideIndex = $this.attr('data-slide-to')) {
            $target.data('carousel').pause().to(slideIndex);
        }

        e.preventDefault();
    });

}(window.jQuery);