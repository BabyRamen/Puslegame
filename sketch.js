const tiles = []
let puzzles
let images = []
let nice = true

function preload() {
  for (i = 0; i < 4; i++) {
    for (y = 0; y < 4; y++) {
      let image = loadImage("assets/img" + i*i + ".png");
      images.push(image)
      tiles.push(new tile(400 * i, 400 * y, images[1], 400, 400))
    }
  }
  print(tiles)
}

function setup() {
  createCanvas(1600, 1600);
}

function draw() {
  background(220);

  for (let tile of tiles) {
    
    tile.display(); 
  }

}
