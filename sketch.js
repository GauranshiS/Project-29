    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var polygon;
    var slingShot;

    function preload() {

        polygon_Img=loadImage("polygon.png")
    }

    function setup(){
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;

        polygon = Bodies.circle(50,200,10);
        World.add(world,polygon);

        imageMode(CENTER);
        image(polygon_Img,polygon.position.x,polygon.position.y);

        ground = new Ground(600,height,1200,20);
        platform = new Ground(150, 305, 300, 170);

        //Level 1

        box1 = new Box(500,600,70,70);
        box2 = new Box(730,600,70,70);
        box3 = new Box(760,600,70,70);
        box4 = new Box(290,600,70,70);
        box5 = new Box(820,600,70,70);
        box6 = new Box(850,600,70,70);
        box7 = new Box(880,600,70,70);
        
        // Level 2

        box8 = new Box(810,160,70,70);
        box9 = new Box(810,160,70,70);
        box10 = new Box(810,160,70,70);
        box11= new Box(810,160,70,70);
        box12= new Box(810,160,70,70);

        // Level 3

        box13 = new Box(810,160,70,70);
        box14 = new Box(810,160,70,70);
        box15 = new Box(810,160,70,70);
        
        // Level top

        box16 = new Box(810,160,70,70);
        
        slingShot = new Slingshot(polygon,{x:150,y:200});
    }

    function draw(){
        background(100,20,20);
        Engine.update(engine);
        strokeWeight(4);
        box1.display();
        box2.display();
        ground.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        box15.display();

    
        slingShot.display();    
    }

    // Whenever an Event occurs, it gets called automatically .
    function mouseDragged(){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }


    function mouseReleased(){
        slingShot.fly();
    }

    function keyPressed(){
        if(keyCode===32){

        slingShot.attach(polygon);
        
        }
    }
    