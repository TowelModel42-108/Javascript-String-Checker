//TeamSkeet.com Join Now button grab and click
  var joinButton = document.body.querySelector(".joinnowbutton, a");

//credentials
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var email = '';
  var username = '';
  var password = '';
  var string = '';

//form fields
  var login = [username, password, email];
  var queries = ['#username','#password', '#email'];

//Join page Create Button element
  var createButton = document.getElementById("btnSubmit");

//functions
  function waitLoad(Skeet){
    while (createButton === false){
      console.log("Waiting for load.")
    }
    if (createButton != undefined){
      console.log("Yo, that shit is loaded.")
      window.onload(skeet)
  }

  function generateCreds(){
    for(var ii=0; ii<8; ii++){
        username += chars[Math.floor(Math.random() * chars.length)];
        password += chars[Math.floor(Math.random() * chars.length)];
        string += chars[Math.floor(Math.random() * chars.length)];
      }
      email = "a" + string + "@domain.com";
    }

    function displayCreds()
    {
      console.log("Username:" + username);
      console.log("Password:" + password);
      console.log("Email:" + email);
    }

  function populateForm(queries, login){
    for (var i=0; i< queries.length; i++){
      document.querySelector(queries[i]).value = login[i];
    }
  }


///control flow
joinButton.click();

waitLoad();

generateCreds();
displayCreds();
populateForm(queries, login);

createButton.click();

//populate form fields
//click "Create"
