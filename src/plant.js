var THREE = require('three');
var LSystem = require('lindenmayer');


export default class Plant {
  constructor() {
    this.material = new THREE.LineBasicMaterial({
  	color:  0xffffff
    });
    this.len = 10;
  }

  generate() {
    this.geometry = new THREE.Geometry();
    this.geometry.vertices.push(
    new THREE.Vector3(0, -5, -7),
    new THREE.Vector3(0, this.len, -7)
  );


    this.line = new THREE.Line( this.geometry, this.material );
  }
}
