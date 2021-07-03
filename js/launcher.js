class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:10

        }
        this.pointB = pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    fly()
    {
        this.launcher.bodyA=null;
    }

    

    display(){
        if(this.launcher.bodyA){
          var pointA= this.launcher.bodyA.position;
          var pointB=this.pointB;
          push();
          strokeWeight(4);
          line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        else{
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
        pop();
       
        
    }

    


    
}