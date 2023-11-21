noseX = 0;
noseY = 0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/bYZh87H5/clownnose-1.png');
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}



function modelLoaded()
{
    console.log('Modelo cargado');
}

function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY,30, 30);
}

function take_snapshot(){    
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.x - 5;
        noseY = results[0].pose.y - 5; bv
        console.log("nose Y = " + noseY);
    }
}