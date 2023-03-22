let tiles = []
let puzzles
let images = []
let nice = true

function preload() {

  for (i = 0; i < 16; i++) {
    let image = loadImage("assets/img" + i + ".png")
    tiles.push(new tile(image, 400, 400))
  }

  /*

  for (i = 0; i < 4; i++) {
    for (y = 0; y < 4; y++) {
      let image = loadImage("assets/img" + i*i + ".png");
      images.push(image)
      console.log(images[1])
      tiles.push(new tile(400 * i, 400 * y, image, 400, 400))
    }
  }*/
  print(tiles)
  tiles.splice(15)
}

function setup() {
  createCanvas(1600, 1600);
  tiles = shuffle(tiles)
}

function draw() {
  background(220);

  let x = 0
  let y = 0

  for (let i = 0; i < tiles.length; i++) {
    stroke(255)
    strokeWeight(4)
    noFill()
    console.log("tile")
    console.log(x)
    console.log(y)
    let tile = tiles[i]
    image(tile.img, x, y, tile.width, tile.height)
    if (x >= width - width/4) {
      y += height / 4
    }
    if (x < width - width/4) {
      x += width / 4
    } else {
      x = 0
    }
  }
  noLoop()

}

