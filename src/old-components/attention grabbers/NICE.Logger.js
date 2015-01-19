
!function ($) {

  "use strict";


 /* LOGGER PUBLIC CLASS DEFINITION
  * ============================== */

  var Logger = function (element, options) {
      var that = this;

      this.$element = $(element);
      this.options = options;

      this.$log = this.$element.find('.message-log').filter(function() {
        return $(this).parents('[data-log]').first().is(that.$element)
      });
  }

  Logger.prototype.log = function( msg, code ) {
      log.call( this, this.$log, 'default', msg, code );
  }

  Logger.prototype.info = function( msg, code ) {
      log.call( this, this.$log, 'info', msg, code );
  }

  Logger.prototype.error = function( msg, code ) {
      log.call( this, this.$log, 'error', msg, code );
  }

  Logger.prototype.warn = function( msg, code ) {
      log.call( this, this.$log, 'warning', msg, code );
  }

  var statusMessages = {
    "409": 'This record has been updated by another user, click <a href="' + location.href + '">here</a> to refresh this page and try again'
  }

  function log( $el, type, message, code ) {
      var msg = message || statusMessages[code];

      var $alert = $('<div class="alert alert-'+ type +' fade in"><button type="button" class="close" data-dismiss="alert">&times;</button>'+ msg +'</div>');

      $el.append( $alert );

      setTimeout(function() { $alert.alert('close'); }, this.options.dismiss);
  }


 /* LOGGER PLUGIN DEFINITION
  * ======================== */

  var logger = $.fn.logger;
  var logToLogger = $.fn.logToLogger;

  $.fn.logger = function (option, msg, code ) {
      return this.each(function () {
          var $this = $(this)
            , data = $this.data('logger')
            , options = $.extend({}, $.fn.logger.defaults, $this.data(), typeof option == 'object' && option);

          if (!data) $this.data('logger', (data = new Logger(this, options)));

          if (typeof option == 'string') data[option]( msg, code );
      })
  }

  $.fn.logToLogger = function ( name, status, textstatus, textresponse, data ) {
      return this.each(function () {
          var $element = $(this)
            , eventData = { status: status, textStatus: textstatus.toLowerCase() };

          name === 'error' ? eventData.description = textresponse : eventData.responseText = textresponse;
          if (data) eventData.data = data;

          // the event
          $element.trigger( $.Event( name, eventData ) );

          // textstatus event
          if (name.toLowerCase() !== eventData.textStatus) {
              $element.trigger( $.Event( eventData.textStatus, eventData ) );
          }

          // status code event
          var code = eventData.status.toString();
          $element.trigger( $.Event( code, eventData ) );

          // status category event
          var category = (eventData.status.toString()[0] * 100).toString();
          if (code !== category) {
              $element.trigger( $.Event( category, eventData ) );
          }
      })
  }

  $.fn.logger.defaults = {
      dismiss: 10000
  }

  $.fn.logger.Constructor = Logger;


 /* LOGGER NO CONFLICT
  * ================== */

  $.fn.logger.noConflict = function () {
      $.fn.logger = old;

      return this;
  }

  $.fn.logToLogger.noConflict = function () {
      $.fn.logToLogger = old;

      return this;
  }

 /* LOGGER DATA-API
  * =============== */

  $(window).on('load', function()
  {

    $.each(['log', 'info', 'error', 'warn'], function( index, type ) {

      $(document)
        .on(type + '.logger.data-api', '[data-log]', function (e) {
            if (!e.isDefaultPrevented()) {
                $(this).logger( type, e.description, e.status );

                e.preventDefault();
            }
        });

    });

  });

}(window.jQuery);
