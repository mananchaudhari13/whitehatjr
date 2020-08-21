class Dustbin{
constructor(x,y,width,height){
    var options = {
isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2,


  
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.w= width
this.h=height
}
display(){
  var pos= this.body.position
  rectMode (CENTER)
  rect  (pos.x,pos.y,this.w,this.h)
}


}