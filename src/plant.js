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
  this.rules = {
    a: "F",
    b: "FF+[+F-F-F] - [-F+F+F]"
  };
  }

  generate() {
    this.geometry = new THREE.Geometry();
    this.geometry.vertices.push(
      new THREE.Vector3( 0, -5, -7 ),
      new THREE.Vector3( 0, 5, -7 )
    );

    this.line = new THREE.Line( this.geometry, this.material );
  }
}
