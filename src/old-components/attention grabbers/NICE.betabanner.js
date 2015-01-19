$(function() {
    var url = window.location.href.replace('https://', 'http://').replace('//www.evidence.nhs.uk', '//beta.evidence.nhs.uk').replace('//evidence.nhs.uk', '//beta.evidence.nhs.uk');
    url += (~url.indexOf('?') ? '&' : '?' ) + 'utm_source=nicesite&utm_medium=banner&utm_campaign=nicebanner';
    var banner = $('<div style="background:#55acee;font-family:Lato,Arial,Helvetica,sans-serif;"><a href="'+url+'" target="_blank"><div class="content" style="width:1170px;margin:0 auto;padding:12px 0;overflow:hidden;"><div style="float:left;"><div style="font-size:24px;color:#fff;font-weight:400!important;line-height:36px;">The new Evidence website will be launching soon</div></div><div style="float:right;line-height:36px;font-size:16px;color:#fff;font-weight:400;background:#3b88c3;padding:0 12px;">Take a look</div></div></a></div>');
    banner.insertBefore('#wrapper');
});
