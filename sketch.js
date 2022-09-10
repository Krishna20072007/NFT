function setup() {
  createCanvas(500, 500);
  bg();
  mouth();
  eye();
  nose();
  ellipse(width / 2, height / 2, 450);
}

function bg() {
  background(random(255), random(255), random(255));
}

function mouth() {
  angleMode(DEGREES);
  strokeWeight(random(4, 6));
  noFill();
  arc(
    width / 2,
    height / 1.75,
    (width / 2) * 1.5,
    height / 1.75,
    random(350, 370),
    random(170, 190)
  );
}

function eye() {
  noFill();
  strokeWeight(5);
  let eye_one = new circ(
    width / 3,
    height / 3,
    width / random(4, 5),
    height / random(4, 5)
  );
  let pupil_one = new circ(width / random(4, 5));
  let iris_one = ellipse((width * 2) / 3, height / 3, width / random(6, 11));

  let eye_two = new circ(
    (width * 2) / 3,
    height / 3,
    width / random(4, 5),
    height / random(4, 5)
  );
  let pupil_two = new circ(width / random(4, 5));
  let iris_two = ellipse(width / 3, height / 3, width / random(6, 11));

  eye_one.show();
  pupil_one.show();

  eye_two.show();
  pupil_two.show();
}

function nose() {
  line(
    width / 2,
    height / 2 + random(10, 30),
    width / 2,
    height / 2 - random(10, 50)
  );
}

class circ {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    noFill();
    ellipse(this.x, this.y, this.w, this.h);
  }
}
