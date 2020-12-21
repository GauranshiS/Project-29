class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA=this.polygon;
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }
   
    attach(body){

    this.sling.bodyA= polygonBody;
    
    }

    display(){
       
    }
    
}