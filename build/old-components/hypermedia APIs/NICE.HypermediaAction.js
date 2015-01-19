
!function ($) {

  "use strict";

  function tryParseJSON( data ) {
      if( !data || data === "") {
          return;
      }

      var json;
      try {
          json = JSON.parse( data );
      } catch (e) {
          return;
      }

      return json;
  }

  function showFieldValidationError($form, key, errorText) {
      if (!errorText || errorText === '') {
          return;
      }

      var $error = $('label.help-inline', { html: errorText })
        , $field = $form.find('[name="' + key + '"]');

      $field.parent().append( $error );

      $field.parents(".control-group").addClass("error");
  }

  function handleServerError( $form, response ) {
      if (response.Message) {
          $form.logToLogger( 'error', jqXHR.status, textStatus, response.Message);

          delete response.Message;
      }

      $.each(response, function (key, element) {
          showFieldValidationError($form, key, element[0]);
      });
  }


 /* HYPERMEDIA ACTIONS PUBLIC CLASS DEFINITION
  * ============================== */

  var HypermediaAction = function (element, options) {
      this.$element = $(element);

      this.options = $.extend({}, $.fn.hypermediaaction.defaults, options);

      this.$hypermedia = this.findHypermediaElement() || this.$element;
  }

  HypermediaAction.prototype = {
      act: function () {
        var that = this
          , form = this.$element[0]
          , method = (this.options.restful && form._method && form._method.value) || form.method || 'GET'
          , etag = (form.ETag && form.ETag.value) || ''
          , data = this.$element.serializeArray();

        $.ajax( form.action || form.href, { method: method, data: data })
            .done( $.proxy(that.done, that) )
            .fail( $.proxy(that.fail, that) );

        this.$btn = this.$element.find('[type=submit]').button('loading');

        return this;
      }

    , findHypermediaElement: function() {
          var that = this
            , hm = $(this.options.hypermedia || '[data-hypermedia="' + this.options.parent + '"]');

          return $(hm.filter(function() { return $.contains( this, that.$element ); })[0]);
      }

    , done: function( data, textStatus, jqXHR ) {
          this.etagNotify( jqXHR );
          this.updateTarget( data );

          this.complete( 'complete', textStatus, data );

          this.$element.logToLogger( 'complete', jqXHR.status, textStatus, jqXHR.responseText , data );
      }

    , fail: function( jqXHR, textStatus, errorThrown ) {
          this.$btn.button('reset');

          this.complete( 'fail', textStatus, jqXHR.responseText );

          var response = tryParseJSON( unescape( jqXHR.responseText ) );
          if (!response) {
            return this.$element.logToLogger( 'error', jqXHR.status, textStatus, jqXHR.responseText );
          }

          handleServerError( this.$element, response );
      }

    , etagNotify: function( jqXHR ) {
          var etag = (this.$element[0].ETag || { value: null }).value;

          if (etag) {
              var e = $.Event('etagupdate', {
                  from: etag
                , to: jqXHR.getResponseHeader('ETag')
              });

              this.$element.trigger(e);
          }
      }

    , updateTarget: function( data ) {
        if (this.options.remote || !this.options.target) {
          this.$element.trigger($.Event('reload', data));
        }

        var $target = $(this.options.target)
          , $data = $(data);

        if (this.options.filter) {
            var $filtered = $data.filter(this.options.filter);

            if ($filtered.is(this.options.filter)) {
              $data = $filtered;
            }
        }

        $target.html( $data );

        $target.trigger( $.Event( 'update', { response: data } ) );

        this.$btn.button('reset');
      }

    , complete: function( type, textStatus, data ) {
        var option = textStatus.toLowerCase();

        this.options[option] && this.options[option]( textStatus, data );
        this.options[type] && this.options[type]( textStatus, data );
      }

  }


 /* HYPERMEDIA ACTIONS PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.hypermediaaction

  $.fn.hypermediaaction = function (option) {
      return this.each(function () {
          var $this = $(this)
            , data = $this.data('hypermediaaction')
            , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option);

          if (!data) $this.data('hypermediaaction', (data = new HypermediaAction(this, options)));

          if (option === 'act') data.act();
      });
  }

  $.fn.hypermediaaction.defaults = {
     restful: false
  }

  $.fn.hypermediaaction.Constructor = HypermediaAction;


 /* HYPERMEDIA ACTIONS NO CONFLICT
  * ================== */

  $.fn.hypermediaaction.noConflict = function () {
      $.fn.hypermediaaction = old;

      return this;
  }


 /* HYPERMEDIA ACTIONS DATA-API
  * =============== */

  $(window).on('load', function()
  {

    $(document)
      .on('submit.hypermediaaction.data-api', 'form[data-action="hypermedia"]', function (e) {
          e.preventDefault();

          $(this).hypermediaaction('act');
      })
      .on('click.hypermediaaction.data-api', 'a[data-action="hypermedia"]', function (e) {
          e.preventDefault();

          $(this).hypermediaaction('act');
      });

  });

}(window.jQuery);
