  var THREE = require('three');
  var QuickSettings = require('quicksettings');
  import Plant from './plant.js';

  var settings = QuickSettings.create(10, 10, "Plant Visualizer");
  settings.addButton("Generate", generate);

  var plant = new Plant();
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  scene.add(plant.line);

  camera.position.z = 5;

function generate() {
  console.log("button");
}

function animate() {
  requestAnimationFrame(animate);
  camera.lookAt(plant.line.position);

  renderer.render(scene, camera);
}

animate();
