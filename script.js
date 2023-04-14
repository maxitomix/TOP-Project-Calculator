const displayScreen = document.querySelector('.display');
const btnNumbers = document.querySelectorAll('.btn-numbers');
const btnOperands = document.querySelectorAll('.btn-operands');
const btnClear = document.getElementById('button_Clear');
const btnDivision = document.getElementById('.button_Division');
const btnMultiply = document.getElementById('.button_Multiply');
const btnSubstract = document.getElementById('.button_Substract');
const btnAdd = document.getElementById('.button_Add');
const btnEqual = document.getElementById('.button_Equal');
const btnDecimal = document.getElementById('.button_Decimal');



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

btnOperands.forEach((Element) => {
    Element.addEventListener('click', () =>
    {
        console.log(Element.textContent)
    })
});

btnClear.addEventListener('click',()=>{
    console.log("ClearClear");
    totalToDisplay = "0";
    clickCounter = 0;
    updateDisplay();
    totalToDisplay = ""
});