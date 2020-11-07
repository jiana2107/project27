class Rope{
    constructor(bodyA, pointB,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            pointB:{x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(3);
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    //fly(){
     // this.chain.bodyA=null;}

    }
    
