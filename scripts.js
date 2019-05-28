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
    artboard.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`);
  }

// Generate the artboard grid
generateArtboard(num);
generateSquares(gridSize);

// Change color on hover
const square = document.querySelectorAll('.square');

square.forEach((square) => {
	square.addEventListener('mouseenter', (e) => {
		square.classList.add('black');
	})
});

// Reset button
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', (e) => {

while (artboard.firstChild) {
	artboard.removeChild(artboard.firstChild);
	artboard.removeAttribute("style");
}

let num = prompt("Choose the number for the new grid size from 16-100");

if (num != null && num >= 16 && num <= 100) {
   let gridSize = Math.pow(num, 2);

for(var i = 0; i < gridSize; i++) {
  	const div = document.createElement('div');
  	div.classList.add('square');
    artboard.appendChild(div);
  }

   artboard.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`);

// Change color on hover
	const square = document.querySelectorAll('.square');

	square.forEach((square) => {
		square.addEventListener('mouseenter', (e) => {
			square.classList.add('black');
		})
	});
} else { 
   alert("Sorry, I didn't understand. Please press 'Reset' and try again.");
}

});

// Rainbow

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

const rainbowButton = document.querySelector('#rainbow');

rainbowButton.addEventListener('click', (e) => {

const square = document.querySelectorAll('.square');

square.forEach((square) => {
	    square.classList.add('rainbow')
		square.addEventListener('mouseenter', (e) => {
		square.setAttribute('style', `background-color: ${randomHsl()};`);
});
});
});	

// Black and White (default)
const blackWhiteButton = document.querySelector('#b-w');

blackWhiteButton.addEventListener('click', (e) => {
	
const square = document.querySelectorAll('.square');

	square.forEach((square) => {
		square.addEventListener('mouseenter', (e) => {
		square.setAttribute('style', `background-color: rgba(0, 0, 0, 1);`);
		})
	});
});


// Eraser
const eraserButton = document.querySelector('#eraser');

eraserButton.addEventListener('click', (e) => {
	
const square = document.querySelectorAll('.square');

	square.forEach((square) => {
		square.addEventListener('mouseenter', (e) => {
		square.setAttribute('style', `background-color: #fff;`);
		})
	});
});
