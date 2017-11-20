var storyPoints = document.getElementsByClassName("customfield_10004");
var arr =[];
for(i in storyPoints){
	arr.push(storyPoints[i].innerText);
}


arr = arr.filter(function(n){ return n != undefined });

arr = arr.map(Number);

var total=0;
for(var i in arr) { total += arr[i]; }
 
