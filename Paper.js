class Paper
{
constructor(x,y)
{
var options ={
'isStatic' : false,
'restituion':0.3,
'friction' :0.5,
'density':1.3
}
this.body = Bodies.circle(100,400,2,options);
World.add(world,this.body);
}
display()
{
var pos   = this.body.position;
ellipseMode(RADIUS);
fill("red");
ellipse(pos.x,pos.y,this.width,this.height);

}
}