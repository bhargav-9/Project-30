class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    
    }
    display(){
     if(this.body.speed<3){ 
      var angle=this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle)
      rectMode(CENTER)
      rect(0,0,50,50);
      imageMode(CENTER)
      image(this.image,0,0,50,50)

      pop() }
    
     else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
     }
     
  }
}

