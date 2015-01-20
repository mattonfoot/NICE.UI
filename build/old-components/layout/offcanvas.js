
/* Off Canvas Toggle Controls */

!function ($) {

    "use strict";

    var layoutSelector = '.layout-offcanvas, .layout-offcanvas-fixed';
    var toggleSelector = '[data-toggle=offcanvas]';
    var toggleClass = 'layout-offcanvas-in';

    function toggleOffCanvas( e ) {
        var $layout = $( layoutSelector )
          , $this = $layout.find( toggleSelector )
          , alt = $this.data('altText')
          , html = $this.html();

        $layout.toggleClass('in');
        $('body').toggleClass( toggleClass );

        $this[$layout.is('.in') ? 'addClass' : 'removeClass']('active')
            .data('altText', html)
            .html(alt);
    }

    function openOffCanvas( e ) {
        var $layout = $( layoutSelector )
          , $this = $layout.find( toggleSelector )
          , alt = $this.data('altText')
          , html = $this.html();

        if (!$layout.is('.in')) {
            $layout.addClass('in');
            $('body').addClass( toggleClass );

            $this.addClass('active')
                .data('altText', html)
                .html(alt);
        }
    }

    function closeOffCanvas( e ) {
        var $layout = $( layoutSelector )
          , $this = $layout.find( toggleSelector )
          , alt = $this.data('altText')
          , html = $this.html();

        if ($layout.is('.in')) {
            $layout.removeClass('in');
            $('body').removeClass( toggleClass );

            $this.removeClass('active')
                .data('altText', html)
                .html(alt);
        }
    }

$(window).on('load', function() {

    $(document)
        .on('click.data-api.bs', '[data-toggle=offcanvas]', toggleOffCanvas)

        .on('touchend.data-api.bs', '.offcanvas-hide', function(e) {
          if ( $('.layout-offcanvas-fixed').is('.in') ) {
            closeOffCanvas( e );
          }

          e.preventDefault();
          e.stopPropagation();
        })

        .on('touchstart.data-api.bs', '.offcanvas-hide', function(e) {
          e.preventDefault();
          e.stopPropagation();
        });
});

}(window.jQuery);
