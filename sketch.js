const tiles = []
let puzzles
let images = []
let nice = true

function preload(){
  for (i=0; i<15; i++) {
    let image = loadImage("assets/img_"+i+".png");
images.push(image)
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let tile of tiles){
    tile.display();
  }
if (nice=true){
  tiles.push(new tile(width/4,length/4,random(images)))
}
}
