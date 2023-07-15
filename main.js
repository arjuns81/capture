var x=0;
var y=0; 
var width=0;
var height=0;
var drawCircle="";
var drawRectangle="";
var radius=0;

var screen_width=[0];
var screen_height=[0];
Sr=window.webkitSpeechRecognition;
Recognition=new Sr();
to_number=Number(content);

function start(){
    document.getElementById("status").innerHTML="Say circle or rectangle";
    Recognition.start();
}
Recognition.onresult=function (event){
    console.log(event);
     content=event.results[0][0].transcript;
     document.getElementById("status").innerHTML="the speech is recognised as:  "+content;

     
    if(content=="rectangle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*600);
        width=Math.floor(Math.random()*100);
        height=Math.floor(Math.random()*100);
        document.getElementById("status").innerHTML="The rectangle is being drawn";
        drawRectangle="drawing";
    }
    if(content=="Circle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*600);
        radius=Math.floor(Math.random()*100);
        document.getElementById("status").innerHTML="The circle is being drawn";
        drawCircle="drawing";
    } 
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(drawRectangle=="drawing"){
rect(x,y,width,height);
    }
    
        if(drawCircle=="drawing"){
    circle(x,y,radius);
        }
}