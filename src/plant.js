var THREE = require('three');

export default class Plant {
  constructor() {
    this.material = new THREE.LineBasicMaterial({
  	color:  0xffffff
    });

  this.geometry = new THREE.Geometry();
  this.geometry.vertices.push(
    new THREE.Vector3( 0, -5, -7 ),
    new THREE.Vector3( 0, 5, -7 )
  );

  this.line = new THREE.Line( this.geometry, this.material );

  }
}
