let clickClick = document.querySelectorAll('span.rNums');

clickClick.onclick = clickClickBoom();

function clickClickBoom() {
	if (
		clickClick.style.color == 'hsl(217, 12%, 63%, 0.1)' ||
		'hsl(25, 97%, 53%)'
	) {
		clickClick.style.backgroundColor = 'hsl(0, 0%, 100%)';
		clickClick.style.color = 'hsl(213, 19%, 18%)';
	} else {
		clickClick.style.color = 'hsl(213, 19%, 18%)';
	}
}
