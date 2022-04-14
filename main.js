function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(900, 140);
    video = createCapture(VIDEO);
    video.size(350, 350);
    posenet = ml5.poseNet(video, modelLoded);
    posenet.on("pose", gotPoses);
}

function modelLoded() {
    console.log("model_Loded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
    }
}

function draw() {
    background("#cf4011");
}