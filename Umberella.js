class  Umberella { 
    constructor(x,y){
        var options= {
            isStatic:true
        }
        this.image=loadImage("Walking Frame/walking_1.png")
        this.Umberella=Bodies.circle(x, y, 50, options)
        this.radius=50;
        World.add=(world,this.umberella);

    }
    display(){
        var pos=(this.umberella.position)
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 300, 300)
    }
}