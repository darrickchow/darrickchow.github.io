var config = 'http://api-console.client-testing.adnxs.net/';

if (!docCookies.hasItem('SESSIONID')) {
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
request = $.ajax({
	type: "GET",
	url: config + "member",
	dataType: "text"
});

request.done(function ( msg ) {
	$(".output").html( msg );
});
}
