class tile {
    constructor(x,y,img){
        this.x=x
        this.y=y
        this.img=img
    }
    display(){
        stroke(255)
        strokeWeight(4)
        noFill()
        image=(this.img, this.x, this.y)
    }
    
}