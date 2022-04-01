var video="";
var stat="";

function preload(){
video = createVideo('video.mp4');
video.hide();
}

function setup(){
canvas = createCanvas(360,360);
canvas.center();

}

function draw(){
image(video,0,0,360,360);
}

function start(){
   od =  ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById('e').innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log('model loaded');
    stat= true;
    video.loop();
    video.volume(0);
    video.speed(1)
}
