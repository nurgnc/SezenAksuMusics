
export default function sketch(p){
    var r=200;
    var tempM=0;
    var R,G,B;
    var secondCanvas;
    var x=0;
    p.setup = () => {
      p.createCanvas(600, 600);
      p.noStroke();
      p.angleMode(p.DEGREES);
      //song = sound.loadSound('assets/lucky_dragons_-_power_melody.mp3');
      secondCanvas = p.createGraphics(2*r,2*r);
    }

    function drawPoint(X,Y){
      p.strokeWeight(5);
      p.point(X,Y)
      p.strokeWeight(1);
    }
    
    p.draw = () => {
      //p.background(R,G,B)
      secondCanvas.background(R,G,B)
      x += 1;
        secondCanvas.text(p.day()+"."+p.month()+"."+p.year(),x,r/5)
      if(x>2*r)
        x=0;
      secondCanvas.stroke('black')
      //secondCanvas.line(x,0,x,2*r)
      p.image(secondCanvas,300-r,300-r)
      var s = p.second();
      
      var m = p.minute();
      var h = p.hour();
      if(m!==tempM)
      {
       // p.background(p.map(s,0,60,0,255),p.map(m,0,60,0,255),p.map(h,0,12,0,255));
       R = p.random()*255
       G = p.random()*255
       B = p.random()*255
       p.background( R, G, B);
       tempM=m;
      }
      
    //  console.log(s)
    p.fill(0,255,255,88)
      
    p.ellipse(300,300,2*r,2*r);
      
    p.fill('yellow')
    p.translate(300,300)
    p.fill('red')
    p.text('12',-10,-(r-15))
    p.text('3',(r-12),6)
    p.text('6',-4,(r-5))
    p.text('9',-(r-4),6)
    for(var i =0;i<12;i++){
      p.fill('black')
      p.strokeWeight(5);
      p.point(r*(p.cos(90-i*30).toFixed(10)),-r*(p.sin(90-i*30).toFixed(10)))
    }
    p.strokeWeight(1);
    p.textSize(15);
    p.fill(0, 0, 255);
    p.text(s, -8, -10);
      
    var angleS = 90-s*6;
    var angleM = 90-m*6;
    var angleH = 90-h*30;
    var temp = p.map(angleM,0,360,0,30);
    p.line(0,0,r*(p.cos(angleS).toFixed(10)),-r*(p.sin(angleS).toFixed(10)))//second
    p.line(0,0,(r-15)*(p.cos(angleM).toFixed(10)),-(r-15)*(p.sin(angleM).toFixed(10)))//minute
    drawPoint((r-15)*(p.cos(angleM).toFixed(10)),-(r-15)*(p.sin(angleM).toFixed(10)))
    p.line(0,0,(r-55)*(p.cos(angleH+temp).toFixed(10)),-(r-55)*(p.sin(angleH+temp).toFixed(10)))//hour
    drawPoint((r-55)*(p.cos(angleH+temp).toFixed(10)),-(r-55)*(p.sin(angleH+temp).toFixed(10)))

    p.fill('Black')
    p.stroke('black')
    
   // p.rect(-r/6,-r/6-20,2*r/6,-r/6)
    p.textAlign(p.CENTER);
    
    p.textFont('Georgia', [r/10])
    if(s%2===0)
    p.text(h+':'+m,0,-r/3)
    else
    p.text(h+' '+m,0,-r/3);
    p.textAlign(p.LEFT);
     
    }

    /*p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        p.fill(newProps.color);
    }*/
}