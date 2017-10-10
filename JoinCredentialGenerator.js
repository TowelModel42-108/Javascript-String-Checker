
///credential generator
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
var username = '';
var password = '';
for(var ii=0; ii<8; ii++){
     username += "a" + chars[Math.floor(Math.random() * chars.length)];
     password += chars[Math.floor(Math.random() * chars.length)];
     string += chars[Math.floor(Math.random() * chars.length)];
}
var email = (string + '@domain.com');



//display in console
console.log("Username:" + username)
console.log("Password:" + password)
console.log("Email:" + email)

//populate form fields
var login = [username, password, email];
var queries = ['#username','#password', '#email']

for (var i=0; i< queries.length; i++){
  document.querySelector(queries[i]).value = login[i];
}

//click "Create"
document.getElementById("btnSubmit").click();
