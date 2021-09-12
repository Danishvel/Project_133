img = "";
Status = " ";
object = [];
function preload(){
    img = loadImage("Electric Item.jpg");
}
function setup() {
    Canvas = createCanvas(640, 420);
    Canvas.position(350, 180);

    Coco = ml5.objectDetector('cocossd', modelloaded);

    randomcolor = '#' + Math.floor(Math.random()*16777215).toString(16);
    randomcolor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
}
function draw() {
    image(img, 0, 0, 640, 420);
    if (Status != "") {
        for (i = 0; i < object.length; i++) {
           document.getElementById("status").innerHTML = "Status : Objects Detected";
           Percent = floor(object[i].confidence * 100);
           noFill();
           stroke(randomcolor);
           rect(object[i].x, object[i].y, object[i].height, object[i].width);
           fill(randomcolor1);
           text(object[i].label + " , " + Percent + "%", object[i].x + 10, object[i].y + 20);
        }
    }
}
function Home() {
    window.location = "index.html";
}
function modelloaded() {
    console.log("Coco SSD Is Loaded Successfully!!");
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    Status = true;
    Coco.detect(img, gotresults);
}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        object = results;
    }
}