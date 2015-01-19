
/* listfilter */

!function ($) {

    "use strict";


    function storeListFilter( target, filter, checked ) {
        var data = $.userdata.get('listfilter') || {};

        data[target] = data[target] || {};
        data[target][filter] = checked;

        $.userdata.set('listfilter', data);
    }

    function applyListFilter( target, filter, checked, hidden ) {
        if ( hidden ) {
            $(target).find(filter)[(checked ? 'remove' : 'add') + 'Class']('hidden');
            return;
        }
        $(target).find(filter)[(checked ? 'add' : 'remove') + 'Class']('hidden');
    }

    function setupFilters() {
        var listfiltersettings = $.userdata.get('listfilter');

        $('[data-filter]').each(function() {
            var $this = $(this)
              , checked = $this.is(':checked')
              , filter = $this.data('filter')
              , hidden = $this.data('default') === 'hidden'
              , target = $this.data('target') || '.thumbnails';

            if (listfiltersettings && listfiltersettings[ target ]) {
                checked = listfiltersettings[ target ][ filter ];
            }

            $this.prop('checked', checked);

            applyListFilter( target, filter, checked, hidden );
        });
    }

    $(document)
        .on('change.listfilter.data-api', 'input[type="checkbox"][data-filter]', function( ev ) {
            ev.preventDefault();

            var $this = $(this),
                checked = $this.is(':checked'),
                filter = $this.data('filter'),
                hidden = $this.data('default') === 'hidden',
                target = $this.data('target') || '.thumbnails';

            storeListFilter( target, filter, checked );

            applyListFilter( target, filter, checked, hidden );
        })
        .ajaxComplete(setupFilters);

    $(setupFilters);

}(window.jQuery);
