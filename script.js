const displayScreen = document.querySelector('.display');
const btnNumbers = document.querySelectorAll('.btn-numbers');


let totalToDisplay = "0"
let clickCounter = 0;

function updateDisplay(){
    displayScreen.textContent = totalToDisplay;
    }


function buttonNumbers(event){
    const Element = event.target;
    if (clickCounter>9)
    {
        clickCounter=1;  
        totalToDisplay = "-ERROR- Only 9 digits at a time...!"
        updateDisplay()
        totalToDisplay = ""
    }
    else
    {
        totalToDisplay += Element.textContent;
        updateDisplay()
        console.log(Element.textContent)
        clickCounter++
        console.log(clickCounter)
    }

}


// Code

updateDisplay()
totalToDisplay = ""

btnNumbers.forEach((Element) => {
    Element.addEventListener('click', buttonNumbers)
});