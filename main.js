function preload() {

}
function setup() {
 canvas = createCanvas(640, 480);
 canvas.position(110, 250);
 rect(30, 20, 600, 450);
 fill(255, 204, 100);
 circle(40, 40, 80);
 fill(255, 204, 100);
 circle(600, 40, 80);
 fill(255, 204, 100);
 circle(600, 440, 80);
 fill(255, 204, 100);
 circle(40, 440, 80);
 video = createCapture(VIDEO);
 video.hide();
}
function draw() {
    
    image(video, 0, 0, 640, 450);
}
function take_snapshot() {
    save('student_name.png');
}
