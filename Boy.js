class Boy{

    constructor(x,y,width,height){
        
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("images/boy.png")

        World.add(world, this.body);
    }

    display(){
        var boyPos = this.body.position;
        push();
        translate(boyPos.x, boyPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 250,250);
        pop();
    }
}
