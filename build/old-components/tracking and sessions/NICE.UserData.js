
!function ($) {

  "use strict";

 /* USERDATA API DEFINITION
  * ====================== */

  // Private Methods

  var data;

  function store() {
    document.cookie = "ud=" + escape( JSON.stringify( data ) ) + "; path=/";
  }

  function retrieve() {
    data = data || JSON.parse( unescape( readCookie( 'ud' ) ) ) || {};

    return data;
  }

  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');

      for (var i = 0, len = ca.length; i < len; i++) {
          var c = ca[i];

          while ( c.charAt(0) === ' ' ) {
              c = c.substring(1,c.length); 
          }

          if ( c.indexOf(nameEQ) === 0 ) {
              return c.substring( nameEQ.length, c.length );
          }
      }

      return '{}';
  }

  // Public Methods

  function setValue( key, value ) {
    var data = retrieve();

    data[ key ] = value;

    store();
  }

  function getValue( key, once ) {
    var data = retrieve();

    var value = data[ key ];

    if ( once ) {
        delete data[ key ];

        store();
    }

    return value;
  }

 /* USERDATA PUBLIC API
  * ======================= */

  var UserData = {
    get: getValue,
    set: setValue
  };

 /* USERDATA PLUGIN DEFINITION
  * ======================= */

  var old = $.userdata;

  $.userdata = UserData;


 /* USERDATA NO CONFLICT
  * ================= */

  $.userdata.noConflict = function () {
    $.userdata = old;
    return this;
  }

}(window.jQuery);
