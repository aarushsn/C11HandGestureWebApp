//  https://teachablemachine.withgoogle.com/models/n14awPh4X/


Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality :100
    });

    camera=document.getElementById("camera");

Webcam.attach('#camera');
    

    function takeSnapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        });}

        console.log(ml5.version);

        classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n14awPh4X/model.json',modelLoaded);

        function check(){
            img=document.getElementById('captured_image');
            classifier.classify(img, gotResult)
        }

        function gotResult(error,results){
            if(error){
                console.error(error);
            }else{
                console.log(results);
                document.getElementById("result_emotion_name").innerHTML=results[0].label;
                document.getElementById("result_emotion_name2").innerHTML=results[1].label;
                prediction1=results[0].label;
                prediction2=results[1].label;
                speak();
                if(prediction1=="Peace"){
                    document.getElementById("update_emoji").innerHTML="&#x270C;";
                }
                if(prediction1=="Nice"){
                    document.getElementById("update_emoji").innerHTML="&#x1F44C;";
                }
                if(prediction1=="Thumbs up"){
                    document.getElementById("update_emoji").innerHTML="&#x1F44D;";
                }
                if(prediction2=="Peace"){
                    document.getElementById("update_emoji2").innerHTML="&#x270C;";
                }
                if(prediction2=="Nice"){
                    document.getElementById("update_emoji2").innerHTML="&#x1F44C;";
                }
                if(prediction2=="Thumbs up"){
                    document.getElementById("update_emoji2").innerHTML="&#x1F44D;";
            }
        }
    }