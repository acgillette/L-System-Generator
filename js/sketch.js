var gui;
var systems = ['Koch Island', 'Koch Triangle', 'Koch Islands and Lakes', 'Gosper Curve'];
var data = {
  island: {
    axiom: "F-F-F-F",
    angle: 90,
    rules: [
      ruleOne = {
        a: "F",
        b: "F+FF-FF-F-F+F+FF-F-F+F+FF+FF-F"
      }
    ],
    len: 200,
    n: 2
  }
};
var bgcolor;

function getRandomColor() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = "hsl(" + hue + ", 100%, 87.5%)";
  return pastel;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(getRandomColor());


  gui = createGui('L-System Visualizer');
  gui.addGlobals('systems');
  gui.addButton('Change background color', getRandomColor);


  noLoop();
}

function draw() {
  background(getRandomColor());
  switch(systems) {
    case 'Koch Island':
      var system = new LSystem(data.island);
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
