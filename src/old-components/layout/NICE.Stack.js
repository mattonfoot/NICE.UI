/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#collapse
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict";


 /* STACK PUBLIC CLASS DEFINITION
  * ================================ */

  var Stack = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.stack.defaults, options);

    this.options.toggle && this.toggle();
  }

  Stack.prototype = {

    constructor: Stack

  , collapsibles: function() {
      var $elements = this.$element.children().not('.active');

      return $elements;
  }

  , show: function () {
      var $element = this.$element.addClass('in');

      this.collapsibles().collapse('show');
    }

  , hide: function () {
      var $element = this.$element;

      this.collapsibles().collapse('hide').on('hidden', function() {
        $element.removeClass('in');
      });
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']();
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.stack

  $.fn.stack = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('stack')
        , options = $.extend({}, $.fn.stack.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('stack', (data = new Stack(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.stack.defaults = {
    toggle: true
  }

  $.fn.stack.Constructor = Stack


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.stack.noConflict = function () {
    $.fn.stack = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.stack.data-api', '[data-toggle=stack]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('stack') ? 'toggle' : $this.data();

    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed');

    $(target).stack(option)
  })

}(window.jQuery);