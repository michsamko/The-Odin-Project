/* 

Create previousNumber variable
Create nextNumber variable
Create lastResult variable

Press button number 1
firstNumber = 1
Change previousNumber the same as firstNumber
If result isn't empty then
Change previousNumber the same as result

Press button operator +
operator = '+'

Press button number 2
secondNumber = 2
Change nextNumber the same as secondNumber


Press button back
If secondNumber isn't empty and result is empty
output.value = firstNumber 


Press button operator +
firstNumber = 3
secondNumber = 0
operator = '+'


Press button back
If secondNumber is empty then
output.value = previousNumber
secondNumber = ''


Press button number 1
secondNumber = 1
firstNumber = 3
operator = '+'

Press button back
If secondNumber isn't empty and result isn't empty then
output.value = previousNumber
secondNumber = ''


Press button operator +
firstNumber = 4
secondNumber = 0
operator = '+'


Press button back
If secondNumber is empty and result isn't empty then
output.value = previousNumber
secondNumber = ''


Press button number 1
firstNumber = 4
secondNumber = 1
operator = '+'

Press button equal
firstNumber = 5
secondNumber = ''
operator = ''



Create 3 variables:
firstNumber = ''
operator = ''
secondNumber = ''

Create a variable result = '';

output = display entered numbers and calculations


Press button number 1 -> If operator is empty (operator === '') then { 
firstNumber = firstNumber + 1 (firstnumber = "1")
Change output the same as firstNumber (output = firstNumber = "1") 
} If operator isn't empty (operator !== '') then {
secondNumber = secondNumber + 1 (secondNumber = "1")
Change output the same as secondNumber (output = secondNumber = "1") 
}


Press button operator '+'
Check if button operator pressed before
If operator is empty then 
Change operator to pressed button operator (operator = '+')
else
If operator isn't empty and
firstNumber isn't empty and
secondNumber isn't empty then
Create tempOperator and change tempOperator the same as operator
Call function equal() like a button equal is pressed
Change operator the same as tempOperator
Change tempOperator to empty string
else if
firstNumber isn't empty and
operator isn't empty then
Change operator to pressed button operator (operator = '+')
else
Do nothing


Create a function equal() {
Change firstNumber and secondNumber from string to integer and
Call function operate(operator) and
Change result from integer to string and
Change output the same as result (output = result) and
Change firstNumber the same as result (firstNumber = result) and
Reset operator to empty string -> operator = '' and
Reset secondNumber to empty string -> secondNumber = '' 
}


Create a function operate(operator) {
	switch (operator) {
		case '+':
			return (result = firstNumber + secondNumber);
		case '-':
			return (result = firstNumber - secondNumber);
		case '*':
			return (result = firstNumber * secondNumber);
		case '/':
			return (result = firstNumber / secondNumber);
		default:
			return (result = 'Invalid operator');
	}
}


Pres button equal 
If operator isn't empty and
firstNumber isn't empty and
secondNumber isn't empty and if
operator !== '/' and secondNumber !== 0
call function equal() 
If operator === / and secondNumber === 0 then 
alert('You cannot divide on 0')
secondNumber = ''

*/

let firstNumber = '';
let operator = '';
let secondNumber = '';

let result = '';

let output = document.getElementById('output');

const buttonDigit = document.querySelectorAll('.digit');

buttonDigit.forEach((button) => {
	button.addEventListener('click', () => {
		if (operator === '') {
			firstNumber = firstNumber + button.value;
			output.value = firstNumber;
		} else if (operator !== '') {
			secondNumber = secondNumber + button.value;
			output.value = secondNumber;
		}
	});
});

const buttonOperator = document.querySelectorAll('.calculator__key--operator');

buttonOperator.forEach((button) => {
	button.addEventListener('click', () => {
		if (operator === '') {
			operator = button.value;
		} else if (operator !== '' && firstNumber !== '' && secondNumber !== '') {
			let tempOperator;
			tempOperator = operator;
			equal();
			operator = tempOperator;
			tempOperator = '';
		} else if (firstNumber !== '' && operator !== '') {
			operator = button.value;
		} else {
			// Do nothing
		}
	});
});

/*  */

function operate(operator) {
	switch (operator) {
		case '+':
			return (result = firstNumber + secondNumber);
		case '-':
			return (result = firstNumber - secondNumber);
		case '*':
			return (result = firstNumber * secondNumber);
		case '/':
			return (result = firstNumber / secondNumber);
		default:
			return (result = 'Invalid operator');
	}
}

function equal() {
	firstNumber = +firstNumber;
	secondNumber = +secondNumber;
	operate(operator);
	result = '' + result;
	output.value = result;
	firstNumber = result;
	operator = '';
	secondNumber = '';
}

const buttonEqual = document.querySelectorAll('.calculator__key--enter');

buttonEqual.forEach((button) => {
	button.addEventListener('click', () => {
		if (
			operator !== '' &&
			firstNumber !== '' &&
			secondNumber !== '' 
		) {
			equal();
		}
		if (operator === '/' && secondNumber === '0') {
			firstNumber = NaN;
			secondNumber = NaN;
			operator = NaN;
			result = NaN;
			output.value = NaN;
		}
	});
});

const acButton = document.getElementById('AC');
acButton.addEventListener('click', () => {
	firstNumber = '';
	operator = '';
	secondNumber = '';
	result = '';
	output.value = '';
});

const dotButton = document.getElementById('dot');
dotButton.addEventListener('click', () => {
	if (operator === '' && !firstNumber.includes('.')) {
		if (firstNumber === '') {
			firstNumber = '0.';
		} else {
			firstNumber = firstNumber + '.';
		}
		output.value = firstNumber;
	} else if (operator !== '' && !secondNumber.includes('.')) {
		if (secondNumber === '') {
			secondNumber = '0.';
		} else {
			secondNumber = secondNumber + '.';
		}
		output.value = secondNumber;
	}
});

// Add a “backspace” button, so the user can undo their last input if they click the wrong number.

const undoButton = document.querySelector('.calculator__undo');
undoButton.addEventListener('click', () => {
	if (secondNumber !== '') {
		secondNumber = secondNumber.slice(0, -1);
		output.value = secondNumber;
	} else if (operator !== '') {
		operator = '';
	} else if (firstNumber !== '') {
		firstNumber = firstNumber.slice(0, -1);
		output.value = firstNumber;
	}
});
