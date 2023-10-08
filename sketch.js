function setup() {
  createCanvas(400, 200);
  background(255);
  noStroke();
  fill(255, 0, 0); // Red color for dots
}

function draw() {
  let dotSize = 20; // Size of each dot

  // Define the positions for the letter "N"
  let nDots = [
    createVector(50, 50),
    createVector(50, 90),
    createVector(50, 130),
    createVector(70, 70),
    createVector(90, 90),
    createVector(110, 110),
    createVector(130, 50),
    createVector(130, 90),
    createVector(130, 130)
  ];

  // Define the positions for the letter "O"
  let oDots = [
    createVector(180, 90),
    createVector(180, 50),
    createVector(200, 50),
    createVector(220, 50),
    createVector(240, 90),
    createVector(240, 130),
    createVector(220, 130),
    createVector(200, 130)
  ];

  // Define the positions for the letter "N" (again)
  let n2Dots = [
    createVector(290, 50),
    createVector(290, 90),
    createVector(290, 130),
    createVector(310, 70),
    createVector(330, 90),
    createVector(350, 110),
    createVector(370, 50),
    createVector(370, 90),
    createVector(370, 130)
  ];

  // Draw dots for the letter "N"
  for (let dot of nDots) {
    ellipse(dot.x, dot.y, dotSize, dotSize);
  }

  // Draw dots for the letter "O"
  for (let dot of oDots) {
    ellipse(dot.x, dot.y, dotSize, dotSize);
  }

  // Draw dots for the second letter "N"
  for (let dot of n2Dots) {
    ellipse(dot.x, dot.y, dotSize, dotSize);
  }

  noLoop(); // Stops draw loop after one frame
}
