Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
}
);
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot () {
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'"/>';
});
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LJLcd5mA9/model.json",modelloaded);
function modelloaded () {
    console.log("modal loaded");
}
function check () {
    img=document.getElementById("captureimage");
    classifier.classify(img,gotResult);
}
function gotResult (error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("objectname").innerHTML=results [0].label;
        document.getElementById("objectaccuracy").innerHTML=results [0].confidence.toFixed(3); 
    }
}
