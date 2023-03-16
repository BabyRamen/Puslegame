class tile {
    constructor(x,y,img,width,height){
        this.x=x
        this.y=y
        this.img=img
        this.width=width
        this.height=height
    }
    display(){
        stroke(255)
        strokeWeight(4)
        noFill()
        image(this.img, this.x, this.y,this.width,this.height)
    }
    
}