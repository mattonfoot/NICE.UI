(function(){

  var url = 'http://www.nice.org.uk/cookies';
  var key = 'seen_cookie_message';
  var value = 'yes';
  var keyCheck = new RegExp('(?:(?:^|.*;\s*)'+ key +'\s*\=\s*([^;]*).*$)|^.*$');
  var banner = '<div style="display:block;font-family:Lato,Arial,Helvetica,sans-serif;background:#ddeef4;border:1px solid #cddee4;color:#11779b;" id="cookiePolicy"><div style="display:block;margin:0 auto;width:95.74468085%;max-width:1170px;padding:12px 36px 12px 0;padding:1.2rem 3.6rem 1.2rem 0"><button style="float:right;margin:0 -36px 0 0;margin:0 -3.6rem 0 0;padding:0 1em;line-height:24px;line-height:2.4rem;background:none;border:0;color:#000;cursor:pointer;" onclick="window.ui.removeEPolicyBanner();return false;">×</button>NICE uses cookies to make the site better. <a href="' + url + '" target="_blank" style="font-weight:700;color:inherit;display:inline">Learn more</a></div></div>';

  if ( document.cookie.replace( keyCheck, '$1' ) !== value ) {
    setTimeout(cookiePolicyDisplay, 50);
  }

  function cookiePolicyDisplay() {
    var tophat = locateTophat();

    if ( !tophat ) {
      setTimeout( cookiePolicyDisplay, 50 );
    }

    var container = document.createElement('div');
    container.innerHTML = banner;
    tophat.appendChild( container.firstChild );

    var cookie = key + '='+ value +'; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;';
    document.cookie = cookie;
  }

  function locateTophat() {
    var firstChild = document.body.firstChild;

    if ( firstChild.className && ~firstChild.className.indexOf( 'nice-tophat' ) ) {
      return firstChild;
    }

    return false;
  }

  var ui = window.ui = window.ui || {};
  ui.removeEPolicyBanner = function() {
    var banner = document.getElementById( 'cookiePolicy' );

    if (banner && banner.parentNode ) {
      banner.parentNode.removeChild( banner );
    }
  };

})();
