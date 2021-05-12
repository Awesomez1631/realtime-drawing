nosex = 0;
nosey = 0;
difference = 0;
left_wrist_x = 0;
right_wrist_x = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,160);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nose x = " + nosex + " nose y = " + nosey);
    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x = results[0].pose.rightWrist.x;
    difference = floor(left_wrist_x - right_wrist_x);
    console.log("left wrist x = " + left_wrist_x + " right wrist x = " + right_wrist_x + " difference = " + difference);
}
}
function draw(){
    background('#969a97');
    document.getElementById("square_side").innerHTML = "width and height of the square will be " + difference + "px";
    fill('#ffff00');
    stroke('#ffff00');
    square(nosex,nosey,difference);
}
