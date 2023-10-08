function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  fill(255, 0, 0); // Red color for dots
  
  let gridSize = 10; // Size of each grid cell
  let rows = 10;    // Number of rows
  let cols = 10;    // Number of columns

  // Calculate the starting position to center the matrix
  let startX = (width - gridSize * cols) / 2;
  let startY = (height - gridSize * rows) / 2;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Calculate the position of each dot based on grid cell size and current row/column
      let x = startX + j * gridSize;
      let y = startY + i * gridSize;

      // Draw a red dot at the calculated position
      ellipse(x + gridSize / 2, y + gridSize / 2, 5, 5);
    }
  }

  noLoop(); // Stops draw loop after one frame
}
