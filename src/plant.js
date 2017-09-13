import THREE from 'three';
import LSystem from  'lindenmayer';


export default class Plant {
  constructor() {
    this.lsystem = new LSystem({
      axiom: 'F',
      productions: {
        'F': 'FF+[+F-F-F] - [-F+F+F]'
      }
    });
  }

  generate() {
    this.lsystem.iterate(3);
  }
}
