/**
 * Overall, target for the following
 * 1. press button, display number to the screen in order from left to right
 * 2. press =, show the total result
 * 3. press AC, clear the screen
 * 4. press C, delete the last number/character
 */

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('#result')

let textToDisplay = '';
const symbols = ["/", "*", "-", "+"];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        displayElement.style.background = '';
        displayElement.style.color = '';;

        const val = btn.innerText;
        console.log(textToDisplay);

        console.log(textToDisplay[0]);


        if (textToDisplay.length < 1 && symbols.includes(val)) return;

        if (
            symbols.includes(val) &&
            symbols.includes(textToDisplay[textToDisplay.length - 1])
        ) {
            textToDisplay = textToDisplay.slice(0, -1) + val;
            return display(textToDisplay);
        }
        // when = clicked
        if (val === "=") {
            if (!textToDisplay.length) return;
            if (symbols.includes(textToDisplay[textToDisplay[length - 1]])) {
                textToDisplay = textToDisplay.slice(0, -1);
            }
            return onTotal();
        }

        if (val === "AC") {
            return resetDisplay();
        }
        if (val === 'C') {
            textToDisplay = textToDisplay.slice(0, -1);
            return display(textToDisplay);
        }

        if (val === '.' && textToDisplay.includes('.v')) return;

        textToDisplay = textToDisplay + val;
        display(textToDisplay);

    })
})

// show clicked button to the screen
const display = toDisplay => {
    displayElement.innerText = toDisplay || '0.00'
}

// calculate total value 
const onTotal = () => {
    const randVal = randomNumber();

    if (randVal > 0) {
        displayElement.style.background = 'red'
        displayElement.style.color = 'white'
        displayElement.classList.add('prank')
        displayElement.addEventListener('animationed', () => {
            displayElement.classList.remove('prank');
        });
    }

    const total = eval(textToDisplay) + randVal;
    display(total);
    textToDisplay = '';
}

//reset the display area
const resetDisplay = () => {
    display('0.00')
    textToDisplay = '';
}

const randomNumber = () => {
    const val = Math.floor(Math.random() * 10)
    return val < 5 ? val : 0;
} 