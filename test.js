Array.prototype.vag = function () {
  var n = this;
  var nn = [];
  for (let i = 0; i < n.length - 1; i++) {
    nn.push(n[i]);
  }
  return nn;
}

class Snake {
  constructor(x, y) {
    createCanvas(900, 900);
    frameRate(20);
    this.score = 0;
    this.body = [createVector(0, 0)]
    this.vel = createVector(20, 0);
    this.new_food();
  }

  update() {
    this.bite();
    this.move();
    this.eat();
  }
  write_score() {
  }

  game_over() {
  }

  show() {
    background(50);

    this.body.forEach((pos) => {
      fill("white");
      rect(pos.x, pos.y, 20, 20);
    });

    fill('red');
    rect(this.food.x, this.food.y, 20, 20);
    this.write_score();
  }

  bite() {
  }

  dir(key) {
  }

  move() {
 
  }

  addbody() {
    var array = this.body;
    var x = this.body[0].x + this.vel.x;
    var y = this.body[0].y + this.vel.y;
    var head = [createVector(x, y)];
    head.push(...array.vag(), this.body[this.body.length - 1]);
    this.body = head;

  }

  new_food() {

  }

  eat() {
    if (dist(this.body[0].x, this.body[0].y, this.food.x, this.food.y) == 0) {
      this.new_food();
      this.addbody();
      this.score++;
    }
  }
}

