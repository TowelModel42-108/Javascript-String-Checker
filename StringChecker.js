
CURRENT ITERATION:

var site = document.documentElement.innerHTML;
var regex = "https://join-hits.teamskeet.com/";
site.match(regex)


function checkString(site);

/////
////
/////THE WORKBENCH STARTS HERE
var url = "http://newgrounds.com/"


{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://google.com/", false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var xhr = new XMLHttpRequest();
xhr.onload = function() {
  console.log(this.responseXML.title);
}

xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
///THE WORKBENCH ENDS HERE
//////
/////
/////

///Receiving an HTTP request
var regex = "https://join-hits.teamskeet.com/"
function checkAjax(){
var xhr = new XMLHttpRequest();

xhr.onload = function("https://join.teensloveblackcocks.com/signup/signup.php?step=signup&nats=NDA2Ni42OC42NC41ODIuMC4wLjAuMC4w&switched=1&strack=0&tpl=join_mobile") {

console.log(this.responseXML.title);
}


xhr.open("GET", site);

xhr.responseType = "document";

xhr.send();

console.log(xhr.responseXML.match(regex));
//////username randomizer
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var username = '';
for(var ii=0; ii<8; ii++){
     username += chars[Math.floor(Math.random() * chars.length)];
}
 console.log(username)
///

//////email randomizer code from stackoverflow
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for(var ii=0; ii<8; ii++){
     string += chars[Math.floor(Math.random() * chars.length)];
}
var email = (string + '@domain.com');
console.log("Email:" + email)
////


///////username generator
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var username = '';
for(var ii=0; ii<8; ii++){
     username += chars[Math.floor(Math.random() * chars.length)];
}
 console.log("Username:" + username)
///


////password generator
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var password = '';
for(var ii=0; ii<8; ii++){
     password += chars[Math.floor(Math.random() * chars.length)];
}
 console.log("Password:" + password)
///


//////auto-fill the form and hit submit button
var login = [username, password, email];
var queries = ['#username','#password', '#email']


///loop through form elements and write "foo" in each field
var formElements = document.getElementsByTagName('input');

for (var i=0; i< queries.length; i++){
	document.querySelector(queries[i]).value = login[i];
}

document.getElementById("btnSubmit").click()
