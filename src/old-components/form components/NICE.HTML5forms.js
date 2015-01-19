!function ($) {

    "use strict";

    var errorClass = 'error';
    var validClass = 'success';

    /**
    * Return true if the field value matches the given format RegExp
    *
    * @example jQuery.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
    * @result true
    *
    * @example jQuery.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
    * @result false
    *
    * @name jQuery.validator.methods.pattern
    * @type Boolean
    * @cat Plugins/Validate/Methods
    */
    jQuery.validator.addMethod("pattern", function(value, element, param) {
            if (this.optional(element)) {
                    return true;
            }
            if (typeof param === 'string') {
                    param = new RegExp('^(?:' + param + ')$');
            }
            return param.test(value);
    }, "Invalid format");

    /*
    * Lets you say "at least X inputs that match selector Y must be filled."
    *
    * The end result is that neither of these inputs:
    *
    *  <input class="productinfo" name="partnumber">
    *  <input class="productinfo" name="description">
    *
    *  ...will validate unless at least one of them is filled.
    *
    * partnumber:  {require_from_group: [1,".productinfo"]},
    * description: {require_from_group: [1,".productinfo"]}
    *
    */
    jQuery.validator.addMethod("require_from_group", function(value, element, options) {
        var validator = this;
        var selector = options[1];
        var validOrNot = $(selector, element.form).filter(function() {
            return validator.elementValue(this);
        }).length >= options[0];

        if (!$(element).data('being_validated')) {
            var fields = $(selector, element.form);
            fields.data('being_validated', true);
            fields.valid();
            fields.data('being_validated', false);
        }
        return validOrNot;
    }, jQuery.format("Please fill at least {0} of these fields."));

    jQuery.validator.setDefaults({

          onsubmit: false

        , invalidHandler: function( e, validator ) {
              var errors = validator.numberOfInvalids();

              if (errors) {
                  var message = errors === 1
                    ? 'There was an issue with 1 field'
                    : 'There was an issue with ' + errors + ' fields';

                  $(this).logToLogger( 'error', 0, 'error', message );
              }
          }

        , errorPlacement: function( $error, $element ) {
              var $wrapper = $element.parents('.control-group').first();
              if ($wrapper.length !== 1) {
                  $wrapper = $element.parent();
              }

              var $label = $wrapper.find('.help-inline, .help-block').first();
              if ($wrapper.length !== 1) {
                  return $error.appendTo( $wrapper );
              }

              $label.text( $error.text() ).addClass('error');
          }

        , errorClass: "help-inline"

        , validClass: "help-inline"

        , highlight: function( element ) {
              $(element).parents('.control-group').first().addClass(errorClass).removeClass(validClass);
          }

        , unhighlight: function( element ) {
              $(element).parents('.control-group').first().removeClass(errorClass).addClass(validClass)
                .find('.help-inline.error, .help-block.error').first().text('').removeClass('error');
          }

        , rules: {

            'DateFrom': {
                require_from_group: [2, ".date-range"]
            }

          , 'DateTo': {
                require_from_group: [2, ".date-range"]
            }

          , 'AppraisalId': {
                require_from_group: [1, ".appraisalid-rppid"]
            }

          , 'RppId': {
                require_from_group: [1, ".appraisalid-rppid"]
            }

        }
    });

    $.fn.datepicker.defaults = $.extend($.fn.datepicker.defaults, {
        format: 'dd M yyyy',
        showStatus: true,
        showWeeks: true,
        highlightWeek: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        showOptions: {
            origin: ["top", "left"]
        }
    });

    $(window).on('load', function () {

        $(document.body)

          .on('submit.html5forms.data-api', 'form[data-validation="plugin"]', function(e) {
            var $this = $(this);
            
            $this.validate();

            if (!$this.valid()) {
              e.preventDefault();
              e.stopImmediatePropagation();
            }
          });

    });

}(window.jQuery);