var snow=[];
let gravity;
let xOff;
function setup() {
  createCanvas(500,400);
  gravity = createVector(0,0.05);
  xOff=0;
}
function mouseMoved(){
  xOff=mouseX;
}
function draw() {
  background(0);
  if(snow.length<300)
    snow.push(new Snowflake());
  for(let flake of snow)
  {
    flake.applyForce(gravity);
    flake.render(xOff);
    flake.show(xOff);
  }
  for(let i=snow.length-1;i>=0;i--)
  {
    if(snow[i].offScreen())
      snow.splice(i,1);
  }
}