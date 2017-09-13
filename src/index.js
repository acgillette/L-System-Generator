  const THREE = require('three');
  const QuickSettings = require('quicksettings');
  import Plant from './plant.js';


  function gui() {
    const settings = QuickSettings.create(10, 10, "Plant Visualizer");
    settings.addButton("Generate", generate);
  }

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);


  camera.position.z = 5;

  const plant = new Plant();
  plant.generate();

  function generate() {
    console.log("hi");
  }

  function animate() {
    requestAnimationFrame(animate);
    // plant.line.rotation.y += 0.01;
    // camera.lookAt(plant.line.position);

    renderer.render(scene, camera);
  }

  gui();
  animate();
