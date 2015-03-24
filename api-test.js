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
	docCookies.setItem("token",msg,7200);
});
}
else {
request = $.ajax({
	url: config + 'member',
	dataType: "text"
});

request.done(function ( msg ) {
	$(".output").html( msg );
});
}
