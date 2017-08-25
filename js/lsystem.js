class LSystem {
  constructor(data) {
    this.axiom = data.axiom;
    this.angle = radians(data.angle);
    this.n = data.n;
    this.rules = data.rules;
    this.sentence = this.axiom;
    this.len = data.len;
  }

  generateSentence() {
    var nextSentence = "";
    for(var i = 0; i < this.n; i++) {
        for(var j = 0; j < this.sentence.length; j++) {
          var current = this.sentence.charAt(j);
          var found = false;

          for(var k = 0; k < this.rules.length; k++) {
            if (current == this.rules[k].a) {
              found = true;
              nextSentence += this.rules[k].b;
              break;
            }
          }

          if(!found) {
            nextSentence += current;
          }
        }
        this.sentence = nextSentence;
        this.drawSystem();
        this.len *= 0.25;
      }
  }

  drawSystem() {
    background(51);
    resetMatrix();
    translate(width/4, height/1.30);
    stroke(255);
    for(var i = 0; i < this.sentence.length; i++) {
      var current = this.sentence.charAt(i);

      if(current === "F" || current == "R") {
        line(0, 0, 0, -this.len);
        translate(0, -this.len);
      } else if (current === "+") {
        rotate(this.angle);
      } else if (current === "-") {
        rotate(-this.angle);
      } else if (current === "f") {
        translate(0, -this.len);
      }
    }
  }
}
