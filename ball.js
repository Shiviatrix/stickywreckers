class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'frictionAir':0,
            'density':5.0,
            'motion':2,
            'slop':10,
            'torque':1,
            'speed':3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}