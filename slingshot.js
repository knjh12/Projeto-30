class slingShot{
    constructor(bodyA,pointB){
       var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
 
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB;
    }
    
    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA=null;

    }

    display(){
        if(this.sling.bodyA){
            var posA=this.sling.bodyA.position;
            line(posA.x,posA.y, this.pointB.x,this.pointB.y);
        }
    }

}