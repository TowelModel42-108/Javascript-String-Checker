//submissived SA video trailer

<div data-setup...>
  <video id="preview_html5_api" class="vjs-tech" style="width: 100%; height:420px;" preload="auto" poster="https://cdn.teamskeetimages.com/design/tour/sub/tour/pics/shae_celestine/video.jpg" data-setup="{}" src="blob:http://www.submissived.com/e2d7e03b-2564-4a70-b03f-fac547a6fe17">

      <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser
      that <a href="http://videojs.com/html5-video-support/" target="_blank" class="vjs-hidden" hidden="hidden">supports HTML5 video</a>
      </p>
  </video>
  <button class="vjs-big-play-button" type="button" aria-live="polite" title="Play Video" aria-disabled="false"><span class="vjs-control-text">Play Video</span></button>

<div class="vjs-mouse-display" data-current-time="0:27" style="left: 91px;"></div>


<div class="vjs-play-progress vjs-slider-bar" data-current-time="0:37" style="width: 35.38%;"><span class="vjs-control-text"><span>Progress</span>: 0%</span></div>

</div>


var playButton = document.getElementsByClassName("vjs-big-play-button")[0]

var play = document.getElementsByClassName("vjs-play-control vjs-control vjs-button")[0]

playButton[0].click();


// It's the click that triggers the video


//grab all IDs
var allElements = document.getElementsByTagName("*");
var allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  if (el.id) { allIds.push(el.id); }
}

for (i = 0, n = allIds.length; i <n; ++i){
    var player = videojs(allIds[i]);
	if (player != undefined) {break;}
}

player.play();
//snippets from video.js
var myPlayer = videojs('some-player-id');

myPlayer.src("http://www.example.com/path/to/video.mp4");
myPlayer.ready(function() {
  // set current time to 2 minutes into the video
  myPlayer.currentTime(120);

  // get the current time, should be 120 seconds
  var whereYouAt = myPlayer.currentTime();
});

//teamskeet.com/t1/ trailer init


var playerIDs = ["preview", "video", "trailer", "scene"]

 i = 0;
while (i < playerIDs.length, play){
  var player = videojs(playerIDs[i]);
  i++;}
  function play(){
  if (player != undefined){
    player.ready(function(){
    player.play();
    player.currentTime(30);
  }); //setstheplayer at a certain time.
  }
}
}

// player.on("ready", function(){

player.ready(function(){
player.play();
player.currentTime(30);
}); //setstheplayer at a certain time.

//for more info visit http://docs.videojs.com/tutorial-player-workflows.html

///some working code for just trailers
var playerIDs = ["preview", "video", "trailer", "scene"]
 i = 0;
while (i < playerIDs.length){
  var player = videojs(playerIDs[i]);
  i++;
  if (player != undefined){
    break;
  }
}
// player.on("ready", function(){
player.ready(function(){
player.play();
player.currentTime(30);
}); //setstheplayer at a certain time.
//for more info visit http://docs.videojs.com/tutorial-player-workflows.html
