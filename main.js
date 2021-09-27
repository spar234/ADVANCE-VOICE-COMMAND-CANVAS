x = 0;
y = 0;
apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.log(Event);

var content = Event.results[0][0].transcript;

document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
if(content == "apple")
{
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "apple";
    draw_circle = "set";
}
if(content =="apple")
{
    x = Math.floor(Math.random() * 900);
    x = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "apple";
    draw_rect = "set";
}

function setup() {
    canvas = createCanvas(900, 600)
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        cricle(x, y, radius);
        document.getElementById("status").innerHTML = "apple";
         draw_circle = "";
    }
}
  
if(draw_rect == "set")
{
    radius = Math.floor(Math.random() * 100);
    cricle(x, y, 70,50);
    document.getElementById("status").innerHTML = "apple.";
     draw_rect = "";
}

document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
if(content == "Apple")
for(var i = 1; i <= to_number; i++)
{
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
     Image(apple.jpg,x,y,50,50);
}

var rawImg = new Image();
loadImage(rawImg, 'apple.jpg').done(function(img){
});
