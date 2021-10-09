function setup() {
    canvas = createCanvas(300, 300 );
    canvas.center();
    video = createCapture(VIDEO);
    video.size(250,250);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video, 25,25, 250, 250);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("Object_name").innerHTML = results[0].label;
      document.getElementById("Object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
  }