var sketsh= function(p){

var diaa= [];

p.setup= function(){
  p.createCanvas(500,500);
  for(var i=0; i<10; i++){
    var x= p.random(p.width);
    var y= p.random(p.height);
    var r= p.random(5,50);
    diaa[i]= new Diaa(x,y,r);
   }
 }
 p.draw= function(){
   p.background(0);
   for(var i=0; i<diaa.length; i++){
     diaa[i].show();
     diaa[i].move();
     diaa[i].bounce();
   }
 }
 class Diaa{
   constructor(x,y,r){
     this.x= x;
     this.y=y;
     this.r= r;
   }
   show(){
     p.noFill();
     p.strokeWeight(2);
     p.stroke(255);
     p.ellipse(this.x, this.y, this.r*2, this.r*2);
   }
   move(){
     this.x+= p.random(-1,1);
     this.y+= p.random(-1,1);
   }
   bounce(){
     if(this.x>p.width || this.x<0){
       this.x= p.random(p.width);
     }
     if(this.y> p.height || this.y<0){
       this.y= p.random(p.height);
     }
   }
 }
}
var myp5= new p5(sketsh);
