// Select Artboard div
const artboard = document.querySelector('#artboard');

// Artboard size squared
let num = 16;
let gridSize = Math.pow(num, 2);

// Create square divs in artboard
function generateSquares() {
  for(var i = 0; i < gridSize; i++) {
  	const div = document.createElement('div');
  	div.classList.add('square');
    artboard.appendChild(div);
  }
}

// Make artboard a square shape
 function generateArtboard() {
    artboard.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr);`);
  }

// Generate the artboard grid
generateArtboard(num);
generateSquares(gridSize);
