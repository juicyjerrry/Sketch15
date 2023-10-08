function setup() {
  createCanvas(1000, 500);
  background(255);
  textSize(32);
  fill(0);

  // Define the letters and their dot representations
  const letters = {
    'N': [
      'X', '.', '.', '.', 'X',
      'X', 'X', '.', '.', 'X',
      '.', '.', '.', '.', '.',
      'X', '.', '.', 'X', 'X',
      'X', '.', '.', '.', 'X'
    ],
    'O': [
      '.', '.', 'X', 'X', '.',
      '.', 'X', '.', '.', 'X',
      '.', '.', '.', '.', '.',
      '.', 'X', '.', '.', 'X',
      '.', '.', 'X', 'X', '.',
    ],
    'T': [
      'X', 'X', 'X', 'X', 'X',
      '.', '.', 'X', '.', '.',
      '.', '.', '.', '.', '.',
      '.', '.', 'X', '.', '.',
      '.', '.', 'X', '.', '.',
    ],
    'X': [
      'X', '.', '.', '.', 'X',
      '.', 'X', '.', 'X', '.',
      '.', '.', '.', '.', '.',
      '.', 'X', '.', 'X', '.',
      'X', '.', '.', '.', 'X',
    ],
    'I': [
      '.', 'X', 'X', 'X', '.',
      '.', '.', 'X', '.', '.',
      '.', '.', '.', '.', '.',
      '.', '.', 'X', '.', '.',
      '.', 'X', 'X', 'X', '.',
    ],
    'C': [
      '.', '.', 'X', 'X', 'X',
      '.', 'X', '.', '.', '.',
      '.', '.', '.', '.', '.',
      '.', 'X', '.', '.', '.',
      '.', '.', 'X', 'X', 'X',
    ],
  };

  const word = "NONTOXIC";
  const matrixSize = 5; // Size of each letter's matrix
  const spacing = (120); // Spacing between letters

  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    const letterMatrix = letters[letter];

    for (let row = 0; row < matrixSize; row++) {
      for (let col = 0; col < matrixSize; col++) {
        const x = i * spacing + col * 20 + 50;
        const y = row * 20 + 50;
        const index = row * matrixSize + col;
        if (letterMatrix[index] === 'X') {
          ellipse(x, y, 5, 5);
        }
      }
    }
  }
}
