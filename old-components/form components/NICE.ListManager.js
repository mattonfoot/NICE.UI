!function ($) {

  "use strict";

 /* LISTMANAGER PUBLIC CLASS DEFINITION
  * ============================== */

  var ListManager = function ( element, options ) {
      this.options = options;
      this.$element = $( element );
  }

  ListManager.prototype = {

    constructor: ListManager

  , remove: function( target, confirmed ) {
        var that = this
          , $target = $(target)
          , $item = $target.parents('.item-list > .item').first()
          , form = $target.is('form') ? target : target.form
          , data = $(form).serializeArray()
          , endpoint = (form && form.action) || $target.parents('form').first().prop('action');

        if ( $item.find('[data-command="confirm"]').length > 0 && !confirmed ) {
            $item.addClass('confirm-remove');

            return;
        }

        if ( endpoint ) {
            $.ajax( endpoint, {
                    type: 'HEAD',
                    method: 'POST',
                    data: data
                })
                .done(function( data, textStatus, jqXHR ) {
                    that.etagNotify( jqXHR, target );
                    that.removeItem( $item );
                })
                .fail($.proxy(this.fail, this));

            return;
        }

        this.removeItem( $item );
    }

  , confirm: function( target ) {
        this.remove( target, true );
    }

  , cancel: function( target ) {
        var $target = $(target);

        if (!$target.is('.confirm-remove')) {
            $target = $target.parents('.confirm-remove').first();
        }

        $target.removeClass('confirm-remove');
    }

  , removeItem: function( $el ) {
      if (this.options.update === 'remove') {
          this.$element.trigger($.Event('reload', {}));
      }

      var that = this
        , e = $.Event('removeitem', {
              relatedTarget: $el
          });

      $el.removeClass('confirm-remove');
      $el.slideUp(200, function() {
          $(this).remove();
          that.$element.trigger( e );
      });
    }

  , fail: function( jqXHR, textStatus, errorThrown ) {
        this.complete( 'fail', textStatus, jqXHR.responseText );

        this.$element.logToLogger( 'error', jqXHR.status, textStatus, jqXHR.responseText );
    }

  , etagNotify: function( jqXHR, target ) {
        var form = target.form || target
          , etag = (form.ETag || { value: null }).value;

        if (etag) {
            var e = $.Event('etagupdate', {
                from: etag
              , to: jqXHR.getResponseHeader('ETag')
            });

            $(form).trigger(e);
        }
    }

  , complete: function( type, textStatus, data ) {
        var option = textStatus.toLowerCase();

        this.options[option] && this.options[option]( textStatus, data );
        this.options[type] && this.options[type]( textStatus, data );
    }

  };


 /* LISTMANAGER PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.listmanager

  $.fn.listmanager = function ( option, target ) {
      return this.each(function () {
          var $this = $(this)
            , data = $this.data('listmanager')
            , options = $.extend({}, $.fn.listmanager.defaults, $this.data(), typeof option == 'object' && option);

          if (!data) $this.data('listmanger', (data = new ListManager(this, options)))

          if (typeof option == 'string' && typeof target == 'object') data[option || 'remove']( target );
      })
  }

  $.fn.listmanager.defaults = {
  }

  $.fn.listmanager.Constructor = ListManager


 /* LISTMANAGER NO CONFLICT
  * ================== */

  $.fn.listmanager.noConflict = function () {
      $.fn.listmanager = old
      return this
  }


 /* LISTMANAGER DATA-API
  * =============== */

  function callAction( action, e ) {
      e.preventDefault();

      var target = this;

      $(target).parents('[data-list="manager"]').first().listmanager( action, target )
  }

  $(window).on('load', function () {

      $( 'body' )
          .on('click.listmanager.data-api', '[data-list="manager"] a[data-command="remove"]', function(e) {
              return callAction.call( this, 'remove', e );
          })
          .on('submit.listmanager.data-api', '[data-list="manager"] form[data-command="remove"]', function(e) {
              return callAction.call( this, 'remove', e );
          })
          .on('click.listmanager.data-api', '[data-list="manager"] [data-command="confirm"]', function(e) {
              return callAction.call( this, 'confirm', e );
          })
          .on('click.listmanager.data-api', '[data-list="manager"] .item.confirm-remove', function(e) {
              return callAction.call( this, 'cancel', e );
          });

    });

}(window.jQuery);
