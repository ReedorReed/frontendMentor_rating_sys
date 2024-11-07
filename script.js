const clickClick = document.querySelectorAll('.rNums');
let selectedRating;

for (let i = 0; i < clickClick.length; i++) {
	clickClick[i].addEventListener('click', clickClickBoom);
}

// The above for loop I use the .length function to go through the collection the getElementsByClassName makes.

function clickClickBoom() {
	const computedStyle = window.getComputedStyle(this);
	const currentColor = computedStyle.color;

	// Reset all ratings to default style
	clickClick.forEach((button) => {
		button.style.backgroundColor = '';
		button.style.color = 'rgb(145, 152, 160)';
	});

	// Update selected rating styling
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

	// Set selected rating
	selectedRating = this.textContent;
}

const submitButton = document.querySelector('.submit');
const thankYouCard = document.querySelector('.thankYou');
const ratingCard = document.querySelector('.rCard');

submitButton.addEventListener('click', thankYou);

function thankYou() {
	if (!selectedRating) {
		alert('Please select a rating.');
	}

	// Hide the rating card and display the thank you card
	ratingCard.style.display = 'none';
	thankYouCard.style.display = 'flex';

	// Update the selected rating text in the thank you card
	const selectedRatingText = document.querySelector('.selected');
	selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
}
