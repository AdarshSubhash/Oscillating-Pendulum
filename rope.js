class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);
    }
 
    display(){
        if(this.rope.bodyA){

        
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(6);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}