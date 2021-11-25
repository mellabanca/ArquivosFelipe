class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.redline = [];
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
    var position = [this.body.position.x,this.body.position.y];
    this.redline.push(position);
  }
    for(var I = 0; I < this.redline.length; I ++){
      image(this.smoke,this.redline[I][0], this.redline[I][1]);
    }
    
  }
}