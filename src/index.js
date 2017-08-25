  var THREE = require('three');
  var QuickSettings = require('quicksettings');
  import Plant from './plant.js';


  function gui() {
    var settings = QuickSettings.create(10, 10, "Plant Visualizer");
    settings.addButton("Generate", generate);
  }

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);


  camera.position.z = 5;

  var plant = new Plant();

function generate() {
  plant.generate();
  scene.add(plant.line);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

gui();
animate();
