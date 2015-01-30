!function ($) {

  "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileupload = function (element, options) {
    this.$element = $(element)

    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.original = {
      exists: this.$element.hasClass('fileinput-exists')
    }

    this.listen()
  }

  Fileupload.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))

    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
    this.$element.on('keydown.bs.fileinput', '.fileinput-filename', function() {
      return false;
    });
  },

  Fileupload.prototype.change = function(e) {
    var field = e.target;
    var file = field && field.value ? field.value.replace(/^.+\\fakepath\\/, '') : '';

    if ( field.files && field.files.length > 1 ) {
        file = field.files.length + " files selected"
    }

    var $label = this.$element.find('.fileinput-filename');

    $label.prop( $label.is('input') ? 'value' : 'text', file).attr('title', file);

    this.$element
      .addClass('fileinput-exists')
      .removeClass('fileinput-new')
      .trigger('change.bs.fileinput');
  },

  Fileupload.prototype.clear = function(e) {
    if (e) e.preventDefault()

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) {
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    var $label = this.$element.find('.fileinput-filename');

    $label.prop( $label.is('input') ? 'value' : 'text', '').attr('title', '');
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists');

    if (e !== false) {
      this.$element.trigger('clear.bs.fileinput')
    }

  },

  Fileupload.prototype.reset = function() {
    this.clear(false)

    this.$element.find('.fileinput-filename').text('').attr('title', '')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new');
    else {
        // need to re disable the upload button

        this.$element.addClass('fileinput-new').removeClass('fileinput-exists');
    }

    this.$element.trigger('reset.bs.fileinput')
  },

  Fileupload.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }


  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this)
      , data = $this.data('fileinput')
      if (!data) $this.data('fileinput', (data = new Fileupload(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileupload


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this)
    if ($this.data('fileinput')) return
    $this.fileinput($this.data())

    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      $target.trigger('click.bs.fileinput')
    }
  })

}(window.jQuery);
