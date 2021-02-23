//import * as p5 from "p5"

//import "p5/lib/addons/p5.sound"
//import * as ml5 from "ml5"
export default function sketch(p5){
    //window.p5 = p5
    //let mySound;
    p5.setup = () => {
        let cnvs = p5.createCanvas(600, 600);
        cnvs.mousePressed(canvasPressed);
        // song = p.loadSound('vazgeçtim')
        //video = createCapture(VIDEO);
        //video.hide();
        p5.background(255,0,0);
    }

    p5.draw = () => {
      p5.text("NUR",p5.height/2,450)
      p5.textSize(100)
    }

    p5.preload = () =>{
        //p5.soundFormats('mp3', 'ogg');
        //mySound = p5.loadSound('vazgeçtim');
    }

    const canvasPressed = () => {
        // playing a sound file on a user gesture
        // is equivalent to `userStartAudio()`
        //mySound.play();
        alert("tıklandı")
    }
}