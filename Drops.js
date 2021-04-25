class Drops{
    constructor(x, y) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipse(pos.x, pos.y, 5);

        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,10)})
        }
    }
}