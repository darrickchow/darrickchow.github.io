var config = 'http://api-console.client-testing.adnxs.net/';
var report = '{"report":    {        "format": "csv",        "report_interval": "yesterday","columns":["brand","geo_country","site","imps","revenue"],   "filters": [{"imp_type":"resold"}], "report_type": "seller_brand_review"    }}';
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
	url: config + "report",
	data: report,
	dataType: "json"
});

request.done(function ( msg ) {
	$(".output").html( msg );
});
}
