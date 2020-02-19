class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
attach(body){
this.sling.bodyA = body;
}
    fly(){
        this.sling.bodyA = null;
    }
    

    display(){
        image(this.sling1,200,30);
        image(this.sling2,175,35);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x > 200){
                stroke(84,39,15);
            strokeWeight(2)
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-10);
        image(this.sling3,pointA.x-20,pointA.y-10,10,20);    
            }
            else{
            stroke(84,39,15);
            strokeWeight(6);
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-10);
        image(this.sling3,pointA.x-20,pointA.y-10,10,20);
            }
        }
    }
    
}