
!function ($) {

  "use strict";

  var d = 'disabled';

  /*
  Future Work:
  */

  var emailRegex = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/g

 /* LISTAPPENDER PUBLIC CLASS DEFINITION
  * ============================== */

  var ListAppender = function ( element, options) {
    this.options = options;
    this.$element = $( element );

    this.$list = this.$element.find('.item-list').not('[data-manager="addmany"] .item-list');

    this.$form = this.$element.find('[data-command="append"]').first();
    if (this.$form.length === 1) {
        this.endpoint = this.$form.prop('action');
    }

    this.$manyfield = this.$element.find('[data-command="appendmany"]');
    this.match = this.$manyfield.data('match');

    this.$manager = this.getManager();
  }

  ListAppender.prototype = {

    constructor: ListAppender

  , processItem: function( data ) {
        if (this.$form) {
          this.$form.find('[type="submit"]').button('active').addClass(d).attr(d, d);
        }

        $.ajax( this.endpoint, {
                dataType: 'html'
              , method: 'POST'
              , data: data
            })
            .done($.proxy(this.done, this))
            .fail($.proxy(this.fail, this));
    }

  , addItem: function( data, isData ) {
        var $el = isData ? this.render( this.$list, data ) : $(data);

        this.$list.html(data);

        this.$element.trigger( $.Event('additem', { relatedTarget: $el }) );

        this.resetForm();
    }

  , updateList: function( $data ) {
        this.$list.html($data.filter('.item'));

        this.$element.trigger( $.Event('additems', { relatedTarget: this.$list }) );

        this.resetForm();
    }

  , resetForm: function() {
      if (!this.$form) return;

      this.$form.find('[type="submit"]').button('reset').removeClass(d).removeAttr(d);
      this.$form[0].reset();
  }

  , addErrors: function( $data ) {
        var $form = this.$form;

        $data.filter('.alert').each(function() {
            var eventData = {
                status: 'error',
                textStatus: 'error',
                description: $(this).html()
            }

            $form.trigger( $.Event('error', eventData) );
        });
    }

  , add: function() {
        this.processItem( this.$form.serializeArray() );

        return this;
    }

  , addmany: function() {
      var items = this.$manager.find('.item [data-value]').map(function() { return $(this).data('value'); }).toArray(),
          fieldName = this.options.key,
          data = [];

      if ((items.length > 0)) {
          $.each(this.$form.serializeArray(), function( i, item ) {
                if (item.name === fieldName) {
                    $.each(items, function( i, value ) {
                        data.push( { name: item.name, value: value} );
                    });

                    return;
                }

                data.push( item );
              });

          this.processItem( data );
      }

      this.dismiss();
    }

  , dismiss: function() {
      this.$manager.find('.item-list').empty();
    }

  , paste: function () {
      var field = this.$manyfield;

      if (this.match) {
        var that = this
          , regex = (this.match === 'email' ? emailRegex : new RegExp(this.match, 'gm'))
          , matches = field.val().match( regex );

        if (matches && matches.length > 0) {
          var list = this.$manager.find('.item-list');

          var items = $(matches).map(function() {
                  var a = {};
                  a.item = this;

                  var item = that.render( that.$manager, a );

                  list.append(item);

                  return item;
              });

          if (items.length > 0) {
            field.val('');

            return;
          }
        }
      }

      this.$manager.logToLogger( 'error', 'error', 'error',
        '<strong>No email addresses found</strong> It was not possible to parse any email addresses from the information provided, please check and try again' );

      field.val('');
    }

  , render: function ( list, data ) {
        var template = list.data('item') || this.options.item
          , models = [ data ]
          , output = [];

        $.each(models, function() {
            var view = template;

            for ( var key in this ) {
                view = view.replace(new RegExp('{{'+ key +'}}', 'ig'), this[key]);
            }

            output.push( view );
        });

        return output;
    }

  , getManager: function() {
        var manager = this.$element.find('[data-manager="addmany"]');

        manager.listmanager();

        return manager;
    }

  , done: function( data, textStatus, jqXHR ) {
        this.etagNotify( jqXHR );
        this.updateTarget( data );

        this.complete( 'complete', textStatus, data );

        this.$element.logToLogger( 'complete', jqXHR.status, textStatus, jqXHR.responseText , data );
    }

  , fail: function( jqXHR, textStatus, errorThrown ) {
        this.$form.find('[type="submit"]').button('reset').removeClass(d).removeAttr(d);

        this.complete( 'fail', textStatus, jqXHR.responseText );

        this.$element.logToLogger( 'error', jqXHR.status, textStatus, jqXHR.responseText );
    }

  , etagNotify: function( jqXHR ) {
        var etag = (this.$form[0].ETag || { value: null }).value;

        if (etag) {
            var e = $.Event('etagupdate', {
                from: etag
              , to: jqXHR.getResponseHeader('ETag')
            });

            this.$form.trigger(e);
        }
    }

  , updateTarget: function( data ) {
        if (this.options.update === 'add') {
          this.$element.trigger($.Event('reload', {}));
        }

        var $data = $(data);

        this.addErrors( $data );

        this.updateList( $data );
    }

  , complete: function( type, textStatus, data ) {
      var option = textStatus.toLowerCase();

      this.options[option] && this.options[option]( textStatus, data );
      this.options[type] && this.options[type]( textStatus, data );
    }

  };


 /* LISTAPPENDER PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.listappender

  $.fn.listappender = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('listappender')
        , options = $.extend({}, $.fn.listappender.defaults, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('listappender', (data = new ListAppender(this, options)));

      if (typeof option == 'string') data[option || 'add']();
    })
  }

  $.fn.listappender.defaults = {
    item: '<li class="item fade in"><span data-value="{{item}}">{{item}}</span> <a href="#" data-command="remove" class="close">&times;</a></li>'
  }

  $.fn.listappender.Constructor = ListAppender


 /* LISTAPPENDER NO CONFLICT
  * ================== */

  $.fn.listappender.noConflict = function () {
    $.fn.listappender = old
    return this
  }


 /* LISTAPPENDER DATA-API
  * =============== */

  $(window)
    .on('load', function () {

      $(document)
            .on('submit.listappender.data-api', '[data-command="append"]', function(e) {
                e.preventDefault();

                $(this).parents('[data-manager="appender"]').listappender('add');
            })
            .on('afterpaste.listappender.data-api', '[data-command="appendmany"]', function(e) {
                $(this).parents('[data-manager="appender"]').listappender('paste');
            })
            .on('click.listappender.data-api', '[data-command="addmany"]', function(e) {
                e.preventDefault();

                $(this).parents('[data-manager="appender"]').listappender('addmany');
            })
            .on('click.listappender.data-api', '[data-command="dismiss"]', function(e) {
                e.preventDefault();

                $(this).parents('[data-manager="appender"]').listappender('dismiss');
            });

    });

}(window.jQuery);
