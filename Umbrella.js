class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.4,
            density: 0,
            friction: 0.1
        }

        this.x = x;
        this.y = y;

        this.animation = loadAnimation("Imgs/Walking-Frame/1.png","Imgs/Walking-Frame/2.png","Imgs/Walking-Frame/3.png","Imgs/Walking-Frame/4.png","Imgs/Walking-Frame/5.png","Imgs/Walking-Frame/6.png","Imgs/Walking-Frame/7.png","Imgs/Walking-Frame/8.png",);

        this.body = Bodies.circle(x,y,110,options);

        World.add(world,this.body);
    }
    
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CORNER);
        animation(this.animation, 0, 0, this.radius, this.radius);
        //ellipseMode(CENTER);
        //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}