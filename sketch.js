function setup() {
  createCanvas(505, 505);
  background(255); // Set the background to white
  noLoop();
  
  let dotSize = 5;
  let dotSpacing = 5;
  
  for (let x = 0; x < width; x += dotSpacing) {
    for (let y = 0; y < height; y += dotSpacing) {
      fill(0); // Set fill color to black
      noStroke(); // No outline for dots
      ellipse(x, y, dotSize, dotSize); // Draw a dot
    }
  }
}

function draw() {
  textSize(120); // Adjust the font size as needed
  fill(255); // Set the text color to match the background
  textAlign(CENTER, CENTER);
  
  text("NON", width / 2, height / 2 - 50); // Adjust the vertical position as needed

  // Position and draw "TOXIC" below "NON"
  text("TOXIC", width / 2, height / 2 + 50); // Adjust the vertical position as needed
}
