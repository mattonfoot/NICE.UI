
/* form confirm button */

!function ($) {

    "use strict";

    var disabled = 'disabled';
    var constructorInstalled = false;

    try{
        constructorInstalled = !!$.fn.tooltip.Constructor.prototype;
    } catch( e ) {
        constructorInstalled = false;
    }

    if (!constructorInstalled) {
        return;
    }


 /* FORMCONFIRM PUBLIC CLASS DEFINITION
  * =================================== */

    var FormConfirm = function (element, options) {
        this.init('formconfirm', element, options);

        this.$element.button(options).on('click', function(e){ e.preventDefault(); });
    }


 /* NOTE: FORMCONFIRM EXTENDS BOOTSTRAP-TOOLTIP.js
  * ============================================== */

    FormConfirm.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

        constructor: FormConfirm

      , confirm: function(e) {
            this.dismiss(e, true);

            if (this.options.submit) {
                $( this.options.submit ).trigger('submit');

                return;
            }

            $(this.$element[0].form).trigger('submit');
        }

      , dismiss: function(e, cancelReset) {
            e && e.preventDefault();

            if (!cancelReset) this.$element.button('reset').removeClass(disabled).removeAttr(disabled);

            this.hide();
        }

      , show: function() {
            this.$element.addClass(disabled).attr(disabled, disabled);

            $.fn.tooltip.Constructor.prototype.show.call(this);

            this.timer = setTimeout($.proxy(this.timeout, this), this.options.showFor);
        }

      , hide: function() {
            $.fn.tooltip.Constructor.prototype.hide.call(this);

            if (this.timer) {
                clearTimeout(this.timer);
            }
        }

      , timeout: function() {
            this.dismiss();
        }

      , setContent: function () {
          var $tip = this.tip();

          $tip.find('.popover-content').html(this.getContent())

          $tip.removeClass('fade top bottom left right in')
        }

      , hasContent: function () {
          return this.getContent();
        }

      , getContent: function () {
            var o = this.options;

            return o.content.call(this.$element[0], o);
        }

      , tip: function () {
            if (!this.$tip) {
                this.$tip = $(this.options.template);

                this.listen(this.$tip);
            }

            return this.$tip;
        }

      , destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type);
        }

      , listen: function($tip) {
            $tip
                .on('click', '.form-confirm', $.proxy(this.confirm, this))
                .on('click', '.form-confirm-cancel', $.proxy(this.dismiss, this));
      }

    });


/* FORMCONFIRM PLUGIN DEFINITION
 * ============================= */

    $.fn.formconfirm = function (option) {
        return this.each(function () {
          var $this = $(this)
            , data = $this.data('formconfirm')
            , options = typeof option == 'object' && option
          if (!data) $this.data('formconfirm', (data = new FormConfirm(this, options)))
          if (typeof option == 'string') data[option || 'show']()
        });
    }

    $.fn.formconfirm.Constructor = FormConfirm

    $.fn.formconfirm.defaults = $.extend({} , $.fn.tooltip.defaults, {
        placement: 'right'
        , trigger: 'click'
        , content: function(options) {
            var confirm = $(this).data('confirm') || options.confirmText
              , cancel = $(this).data('cancel') || options.cancelText;

            return '<div class="btn-group"><button class="btn btn-success form-confirm">' + confirm + '</button><button class="btn btn-danger form-confirm-cancel">' + cancel + '</button></div>';
        }
        , template: '<div class="popover"><div class="arrow"></div><div class="popover-content"></div></div>'
        , activeText: "Processing..."
        , confirmText: 'OK'
        , cancelText: 'Cancel'
        , showFor: 5000
    });


/* FORMCONFIRM NO CONFLICT
 * ======================= */

    $.fn.formconfirm.noConflict = function () {
        $.fn.formconfirm = old
        return this
    }


 /* FORMCONFIRM DATA-API
  * ==================== */

    $(window).on('load', function() {

        $('body')
            .on('click.formconfirm.data-api', '[data-confirm]', function( e ) {
                e.preventDefault();
                e.stopImmediatePropagation();

                $(this).formconfirm('show');
            });

    });

}(window.jQuery);
