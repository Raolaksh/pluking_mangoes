class Mango{

    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.body = Bodies.circle(x, y, r, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }

    display(){
        var mangoPos = this.body.position;
        push();
        translate(mangoPos.x, mangoPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 90, 90);
        pop();
    }
}
