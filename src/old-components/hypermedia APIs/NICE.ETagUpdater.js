

!function ($) {

  "use strict";


 /* ETAG UPDATER PUBLIC CLASS DEFINITION
  * ============================== */

  function updateEtags(element, data) {
      var etag = data.replace(/"/ig, '')
        , parts = etag.split(' ')
        , $element = $(element)
        , current = $element.data('etag');

      if (parts.length > 0) etag = parts[0];
      
      $element.data('etag', etag).attr('data-etag', etag);
      $element.find('[name="ETag"]').each(function(){
        if (this.value === current) this.value = etag;
      });
  }


 /* ETAG UPDATER PLUGIN DEFINITION
  * ======================== */

  var etagupdater = $.fn.etagupdater

  $.fn.etagupdater = function ( etag ) {
      return this.each(function () {
          var $this = $(this);

          updateEtags(this, etag);
      })
  }

  $.fn.etagupdater.defaults = {
  }


 /* ETAG UPDATER NO CONFLICT
  * ================== */

  $.fn.etagupdater.noConflict = function () {
      $.fn.etagupdater = old;

      return this;
  }


 /* ETAG UPDATER DATA-API
  * =============== */

  

  $(window).on('load', function()
  {

    $(document)
      .on('etagupdate', function(e) {
        $('[data-etag="'+ e.from +'"]').etagupdater( e.to );
      });
  
  });

}(window.jQuery);
