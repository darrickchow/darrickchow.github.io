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
alert("already logged in"+docCookies.getItem("apiToken"));
}

docCookies.setItem("test","test");
alert(docCookies.getItem("test"));