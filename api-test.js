var config = 'http://api-console.client-testing.adnxs.net/';

if (docCookies.getItem("token")==null) {
var username = prompt('username');
var password = prompt('password');
var auth = '{"auth": {"username" : "' + username + '","password" : "' + password + '"}}';
var request = $.ajax({
	url: config + 'auth',
	method: "POST",
	data: auth,
	dataType: "json"
});

request.done(function( msg ) {
	$(".output").html( msg['response']['token'] );
	docCookies.setItem('SESSIONID',msg['response']['token'],7200,'/','darrickchow.github.io');
});
}
else {
$.ajaxPrefilter(function( options ) {
    if ( !options.beforeSend) {
        options.beforeSend = function (xhr) { 
            xhr.setRequestHeader('Authorization', docCookies.getItem('SESSIONID'));
        }
    }
});
request = $.ajax({
	url: config + 'member',
	dataType: "text"
});

request.done(function ( msg ) {
	$(".output").html( msg );
});
}
