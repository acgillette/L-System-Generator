var gui;
var systems = ['Koch Island', 'Koch Triangle', 'Koch Islands and Lakes', 'Gosper Curve'];
var data = {
  axiom: "F-F-F-F",
  angle: 90,
  rules: [
    ruleOne = {
      a: "F",
      b: "F+FF-FF-F-F+F+FF-F-F+F+FF+FF-F"
    }
  ],
  len: 50,
  n: 2
};



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);


  gui = createGui('L-System Visualizer');
  gui.addGlobals('systems');

  noLoop();
}

function draw() {
  background(51);
  switch(systems) {
    case 'Koch Island':
      var system = new LSystem(data);
      system.generateSentence();
      break;
    default:
      console.log("Not implemented");
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
