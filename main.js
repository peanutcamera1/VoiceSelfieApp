var speechrecognition=window.webkitSpeechRecognition;
var recognition= new speechrecognition();

function start() {
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult= function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textarea").innerHTML=content;
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        take_selfie();
        save();
    }, 5000); 
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

function take_selfie() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save() 
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.hrf = image;
    link.click();
}