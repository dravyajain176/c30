class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255 ;
    

  }
 display(){
   console.log(this.body.speed)
   if(this.body.speed<3){
    super.display();
   }
   else{
     World.remove(world,this.body);
     push();
     this.visiblity =  this.visiblity - 5;

    tint(255,this.visibility);
    image(this.image,this.body.positionX,this.body.positionY,50,50);
    pop();
    }
 }
};
