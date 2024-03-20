function preload(){
  mouse = loadImage ('assets/lazer.jpeg')
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  if (mouseIsPressed ===true){
    background(mouse);
  } else if (mouseIsPressed === false){
    background (240);
    text ('press mouse', 150, height/3);
  }
}

let osc = new Tone.Synth(100, 'sine').toDestination();
let lfo = new Tone.LFO(10, 100, 500).connect(osc.frequency).start();


function mousePressed() { 
  osc.triggerAttack();
}

function mouseReleased() { 
  osc.triggerRelease();
} 



