class Bob{
    constructor(x,y,r){
     var options={
         density:1,
         friction:0.3,
         restitution:1
     }
     
     this.body=Bodies.circle(x,y,r,options)
     //this.width=w;
     this.radius=r;
     World.add(world,this.body);
    }
   
    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     //var width=this.width;
     //var height=this.height;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(RADIUS);
     fill("blue");
     ellipse(0,0,this.radius,this.radius);
     pop();
    }

    fly(){
        Matter.Body.applyForce(this.body,this.body.position,{x:200,y:200})
    }
   
   }