
/* Auto Post Controls */

!function ($) {

    "use strict";

    function autopost(e) {
        var that = this;

        setTimeout(function() { $(that.form).find('[type="submit"]').trigger('click'); }, 250);
    }


    $(window).on('load', function() {
        $('body')
            .on('change.autopost.data-api', '[data-submit="auto"]', autopost);
    });

}(window.jQuery);
