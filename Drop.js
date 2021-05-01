class Drop{
    constructor(x,y){
        var options={
            friction:0.001,
            restitution:0.1
        }
        this.rain=Bodies.circle(x,y,5,options)
        World.rain=(world,this.rain)
        this.radius=5;
    }
    updateY(){
        if(this.rain.position.y>height){
            Matter.body.set.position(this.rain,{x:random(0,350),y:random(0, 400)})
        }
    }
    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y, this.radius, this.radius);
    }

}