 function preload() {
  rainbowImage = loadImage(rainbow.png)

 }

 function setup() {
  createCanvas(500,500);

 box = createSprite(250, 250, 20, 20);
 }

 function draw() {
 if (keyIsDown(RIGHT_ARROW)){
  background("blue")
 }

 if (keyIsDown(LEFT_ARROW)){
  background("red")
 }

 if (keyIsDown(UP_ARROW)){
  background("pink")
 }

 if (keyIsDown(DOWN_ARROW)){
  background("yellow")
 }

 drawSprites()
}




