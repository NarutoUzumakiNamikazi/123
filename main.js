var diference=0
var pulsoDireitoX=0
var pulsoEsquerdoX=0
function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelload)
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#6C91C2');
    
      document.getElementById("font-size").innerHTML = "Tamanho da fonte será = " + diference +"px";
    textSize(diference);
    fill('#FFE787');
    text('Miguel', 50, 400);
}
function modelload() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
    pulsoEsquerdoX=results[0].pose.leftWrist.x
    pulsoDireitoX=results[0].pose.rightWrist.x
    diference=floor(pulsoEsquerdoX-pulsoDireitoX)
}