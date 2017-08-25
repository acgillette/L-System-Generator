var THREE = require('three');

//Alphabet: F + - [ ]
//Axion: F
//Rules: F -> FF+[+F-F-F] - [-F+F+F]
//Angle: 25
// if(current === "F") {
//   line(0, 0, 0, -len);
//   translate(0, -len);
// } else if (current === "+") {
//   rotate(angle);
// } else if (current === "-") {
//   rotate(-angle);
// } else if (current === "[") {
//   push();
// } else if (current === "]") {
//   pop();
// }
// }

export default class Plant {
  constructor() {
    this.material = new THREE.LineBasicMaterial({
  	color:  0xffffff
    });

  this.axiom = "F";
  this.angle = 25;
  this.rules = [
     {
      a: "F",
      b: "FF+[+F-F-F] - [-F+F+F]"
    }
  ];
  this.len = 100;
  this.sentence = this.axiom;
  }

  generateSentence() {
    this.len *= 0.5;

    var nextSentence = "";
    for(var i = 0; i < this.sentence.length; i++) {
      var current = this.sentence.charAt(i);
      var found = false;

      for(var j = 0; j < this.rules.length; j++) {
        if (current == this.rules[j].a) {
          found = true;
          nextSentence += this.rules[j].b;
          break;
        }
      }

      if(!found) {
        nextSentence += current;
      }
      console.log(nextSentence);
    }
    this.sentence = nextSentence;
  }

  generate() {
    this.generateSentence();
    this.geometry = new THREE.Geometry();
    this.geometry.vertices.push(
      new THREE.Vector3( 0, -5, -7 ),
      new THREE.Vector3( 0, 5, -7 )
    );

    this.line = new THREE.Line( this.geometry, this.material );
  }
}
