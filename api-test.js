var config = 'http://api-console.client-testing.adnxs.net/';

if (docCookies.getItem("apiToken")==null) {
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
	docCookies.setItem("apiToken",msg['response']['token'],7200);
});
}
else {
request = $.ajax({
	url: config + 'member',
	headers: "Authorization: "+docCookies.getItem("apiToken"),
	dataType: "text"
});

request.done(function ( msg ) {
	$(".output").html( msg );
});
}
