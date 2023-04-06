function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(1000, 300)

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function gotPoses(results) {
    console.log("hiiii");
}