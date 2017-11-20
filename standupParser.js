// var dataString = "[9:43 AM] Darwin B: LF: FS-266, T: FS-266, FS AB TEST SPECS[6:11 PM] https://paperstreet.atlassian.net/browse/SR-790 JanMike Clark: MAR-419, MAR-420, MAR-421 - resolved PSSD-2642 - resolved, pending deployment MET-68 - resolved [6:12 PM] Sheerwood John Caday: MAR-408 - in progress [6:13 PM] Darwin B: FS-266 - done FS-269 - documenting steps]"
var dataString = prompt("Copy and paste the text to be checked for JQL here.")
var dataArray = dataString.split(" ");
var issueKeys=[]
// split();
// search():
//indexOf();
//String(object);
// .push(dataArray).indexOf("-")
//
for(i=0;i < dataArray.length; i++){
  if (dataArray[i].length > 1 == true){
      if (dataArray[i].includes("-") == true){
        if (dataArray[i].includes("https://paperstreet.atlassian.net/browse/") == true){
          var keyURL = dataArray[i].split("/").slice(-1)[0];
          issueKeys.push(keyURL);
      } else {issueKeys.push(dataArray[i]);
          }
    }
  }
}


//need to make this line remove special characters like that floating dot in Hipchat or extraneous commas
var jqlQuery = ("issueKey in("+ issueKeys.toString()+")").replace(/(\r\n|\n|\r)/gm,"").replace(" ", "%20").replace("·","").replace(",","");
//must also add whitelisting RegEx so it denies strings that do not match rather than those that do the search - only integers and ABCs accepted.
//RegEx code: [\w ]    and     [^\W_]

// console.log(issueKeys)
// example URL: https://paperstreet.atlassian.net/issues/?jql=order%20by%20lastViewed%20DESC
console.log("This is your JQl Link for the parsed text.");
console.log("https://paperstreet.atlassian.net/issues/?jql=" + jqlQuery + ")")
// }
// console.log(dataArray)
// console.log("Your JQL query: issueKey in ("+ dataArray +")")
