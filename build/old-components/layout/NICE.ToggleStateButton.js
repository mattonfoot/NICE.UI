
/* toggle state button */

!function ($) {

    "use strict";


 /* TOGGLE STATE PUBLIC CLASS DEFINITION
  * =============================== */

    var ToggleState = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.togglestate.defaults, options);

        this.$toggle = $(this.options.control);
        this.form = this.options.control.form;
    }

    ToggleState.prototype = {
        constructor: ToggleState

      , toggle: function( state, options ) {
            var current = this.$element.data('state') === 'on'
              , future = !state ? !current : state === 'on';

            if ( options && options.control ) {
                this.$toggle = $(options.control);
                this.form = options.control.form;
            }

            var cb = $.proxy(future ? this.onState : this.offState, this);

            this.form ? this.afterRemote(cb) : cb();
        }

      , onState: function( response ) {
            this.changeState( this.options.off, this.options.on, 'on', response );
        }

      , offState: function( response ) {
            this.changeState( this.options.on, this.options.off, 'off', response );
        }

      , changeState: function( oldclass, newclass, state, response ) {
            this.$element.removeClass( oldclass ).addClass( newclass ).data('state', state);

            var label = this.$toggle.data( state );

            this.$toggle.html(label);

            if (response) this.$element.find(this.options.update).replaceWith( response );

            this.$toggle.attr('disabled', false);
        }

      , afterRemote: function( cb ) {
            var that = this
              , ajaxMethod = this.form.method || 'GET'
              , data = $(this.form).serializeArray();

            $.ajax(this.form.action, {
                dataType: 'html'
              , method: ajaxMethod
              , data: data
            })
            .done(function( response, status, jqXHR ) {
                cb( response );

                var e = $.Event('etagupdate', {
                    from: (that.form.ETag || { value: null }).value
                  , to: jqXHR.getResponseHeader('ETag')
                });

                that.$element.trigger(e);
            });

            this.$toggle.attr('disabled', true);
        }
    };

    $.fn.togglestate = function (option) {
        return this.each(function () {
          var $this = $(this)
            , data = $this.data('togglestate')
            , options = $.extend({}, $.fn.togglestate.defaults, $this.data(), typeof option == 'object' && option)
            , state;

          if (!data) $this.data('togglestate', (data = new ToggleState(this, options)));
          if (typeof option == 'string') state = option;

          data.toggle(state, options);
        })
    }

    $.fn.togglestate.defaults = {
        on: 'status-on',
        off: 'status-off'
    }

    
    $(window).on('load', function() {

        $('body')
            .on('click.togglestate.data-api', '[data-toggle="state"]', function( e ) {
                e.preventDefault();

                $(this).parents('[data-state]').first().togglestate({ control: this });
            });

    });

}(window.jQuery);
