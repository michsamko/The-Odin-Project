let container = document.getElementById('container');

let rows = 16;
let columns = 16;

function sketch(rows, columns) {
	let widthContainer = container.offsetWidth;
	let heightContainer = container.offsetHeight;
	for (let i = 0; i < rows; i++) {
		let row = document.createElement('div');
		row.classList.add('row');
		row.style.width = widthContainer / rows - 2 + 'px';
		row.style.height = heightContainer / columns - 2 + 'px';
		container.appendChild(row);

		for (let x = 0; x < columns; x++) {
			let column = document.createElement('div');
			column.classList.add('column');
			column.style.width = widthContainer / rows - 2 + 'px';
			column.style.height = heightContainer / columns - 2 + 'px';
			row.appendChild(column);
			column.addEventListener('mouseenter', () => {
				column.style.backgroundColor = 'black';
			});
		}
	}
}

function deleteSketch() {
	document.querySelectorAll('.row').forEach((el) => el.remove());
}

sketch(rows, columns);

let resizeBtn = document.querySelector('#sizeBtn');
resizeBtn.addEventListener('click', () => {
	let resizeInput = document.getElementById('resizeInput');
	let inputValue = resizeInput.value;
	if (!isNaN(inputValue) && inputValue > 1 && inputValue < 100) {
		deleteSketch();	
		sketch(inputValue, inputValue);
	} else {
		alert('Enter a number between 2 - 100');
	}
});
