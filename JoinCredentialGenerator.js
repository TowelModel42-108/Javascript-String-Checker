//TeamSkeet.com Join Now button grab and click
  var joinButton = document.body.querySelector(".joinnowbutton, a");

//credentials

//form fields

//Join page Create Button element
  var createButton = document.getElementById("btnSubmit");

//TRYING TO MAKE THIS BETTER
  function waitLoad(){
    while (createButton === false){
      console.log("Waiting for load.")
    }
    if (createButton != undefined){
      console.log("Yo, that shit button is loaded.");
      window.onload(console.log("Page Fully Loaded"));
  }
}



//MEAT N' PODADOES
var queries = ['#username','#password', '#email'];
var login = [];

  function generateCreds(){
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var email = '';
    var username = '';
    var password = '';
    var string = '';
    for(var ii=0; ii<8; ii++){
        // username += chars[Math.floor(Math.random() * chars.length)];
        password += chars[Math.floor(Math.random() * chars.length)];
        string += chars[Math.floor(Math.random() * chars.length)];
      }
      // username = "a" + string;
      email = "a" + string + "@domain.com";
      username = "a" + string;
      login = [username, password, email];
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
    var button = document.getElementById("btnSubmit")
    button.click();
  }
  generateCreds();
  displayCreds();
  populateForm(queries, login);


//login here
  function paperLogin(){
    var credentials= ["USERNAME_HERE", "PASSWORD_HERE"]
    var fields= [ "#username","#password"]
    var button= document.getElementById("login-button");
    for (var i=0; i< credentials.length; i++){
      document.querySelector(fields[i]).value = credentials[i];
    }
    button.click();
  }
paperLogin();

  function paperCashLogin(){
      var credentials= ["USERNAME_HERE", "PASSWORD_HERE"]
      var fields= [ "#login_email","#login_password"]
      // var button= document.getElementsByClassName("button secondary");
      var button = document.getElementsByTagName("input");
      for (var i=0; i< credentials.length; i++){
        document.querySelector(fields[i]).value = credentials[i];
      }
      button[2].click();
    }
  paperCashLogin();

// ///control
// joinButton.click();
//
// waitLoad();
//
//
// createButton.click();

//populate form fields
//click "Create"
