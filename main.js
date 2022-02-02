var prediction1="" ;
var prediction2="" ;

Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera=document.getElementById("camera") ;
Webcam.attach(camera) ;
function snap(){
Webcam.snap(function(data_uri)
{
    document.getElementById("snapshot").src=data_uri;
}
);
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SvSOvv4fs/model.json',model_loaded);
function model_loaded(){
    console.log("model is loaded") ;
}
function check(){
    img=document.getElementById("snapshot") ;
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
if (error){
    console.error(error)
}
else {
    console.log(results);
    prediction1=results[0].label
    prediction2=results[1].label
    document.getElementById("emo_name1").innerHTML=prediction1
    document.getElementById("emo_name2").innerHTML=prediction2

    if(prediction1=="happy"){
        document.getElementById("emoji1").innerHTML="&#128522;";

    }if(prediction1=="sad"){
        document.getElementById("emoji1").innerHTML="&#128532;";

    }if(prediction1=="angry"){
        document.getElementById("emoji1").innerHTML="&#128545;";


    }
    if(prediction2=="happy"){
        document.getElementById("emoji2").innerHTML="&#128522;";

    }if(prediction2=="sad"){
        document.getElementById("emoji2").innerHTML="&#128532;";

    }if(prediction2=="angry"){
        document.getElementById("emoji2").innerHTML="&#128545;";
    }

}
}