class Snowflake{
  constructor(){
  this.pos=createVector(random(-10,width+10),random(-height));
    this.vel=createVector(0,0);
    this.acc=createVector();
    this.r=random(2,20);
    this.angle = random(TWO_PI);
    this.xOff=0;
  }
  render(mousex){
    fill(255);
    noStroke();
    let sx = map(mousex,0,width,-10,10);
    circle(this.pos.x+sx,this.pos.y,this.r*2);
  }
  applyForce(force){
    this.acc.add(force);
  }
  show(mousex){
    let sx = map(mousex,0,width,-10,10);
    this.xOff = sin(this.angle)*0.005*sx*this.r;
    this.vel.add(this.acc);
    this.vel.mult(map(this.r,2,20,0.95,1.02));
    this.pos.y+=this.vel.y;
    this.acc.mult(0);
    this.pos.x+=this.xOff;
  }
  offScreen(){
      return (this.pos.y>height+this.r);
  }
}
