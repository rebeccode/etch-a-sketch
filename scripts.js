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

// Change color on hover
const square = document.querySelectorAll('.square');

square.forEach((square) => {
	square.addEventListener('mouseenter', (e) => {
		square.classList.add('black')
	})
});

// Reset button
// const resetButton = document.querySelector(#'reset');

// resetButton.addEventListener('onclick'), (e) => {

// delete all existing divs with class square
// add a prompt to enter a new number
// put the new number through the functions above to output a new grid


// }