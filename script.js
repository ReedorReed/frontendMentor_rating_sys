const clickClick = document.querySelectorAll('.rNums');

for (let i = 0; i < clickClick.length; i++) {
	clickClick[i].addEventListener('click', clickClickBoom);
}

// The above for loop I use the .length function to go through the collection the getElementsByClassName makes.

function clickClickBoom() {
	const computedStyle = window.getComputedStyle(this);
	const currentColor = computedStyle.color;

	// console.log('Clicked element:', this);
	// console.log('Computed color:', currentColor);

	clickClick.forEach((button) => {
		button.style.backgroundColor = '';
		button.style.color = 'rgb(145, 152, 160)';
	});

	if (
		currentColor == 'rgb(145, 152, 160)' ||
		currentColor == 'rgb(255, 87, 34)' ||
		currentColor == 'rgb(37, 45, 55)'
	) {
		this.style.backgroundColor = 'hsl(0, 0%, 100%)';
		this.style.color = 'hsl(213, 19%, 18%)';
	} else {
		this.style.color = 'hsl(213, 19%, 18%)';
	}
}
