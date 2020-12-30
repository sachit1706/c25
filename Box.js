class Box extends BaseClass{
  constructor(x,y,width,heigth){
    super(x,y,width,heigth);
    this.image = loadImage("sprites/wood1.png");
  }
  display(){
   
    super.display();
  }
}