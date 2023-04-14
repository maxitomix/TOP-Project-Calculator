const displayScreen = document.querySelector('.display');
const btnNumbers = document.querySelectorAll('.btn-numbers');
const btnOperands = document.querySelectorAll('.btn-operands');
const btnClear = document.getElementById('button_Clear');
const btnDivision = document.getElementById('button_Division');
const btnMultiply = document.getElementById('button_Multiply');
const btnSubstract = document.getElementById('button_Substract');
const btnAdd = document.getElementById('button_Add');
const btnEqual = document.getElementById('button_Equal');
const btnDecimal = document.getElementById('button_Decimal');


let totalToDisplay = "0"
let clickCounter = 0;
let accumulator = 0;
let lastOperation = "start"

function updateDisplay(){
    displayScreen.textContent = totalToDisplay;
    }
function pullDisplay(){
    totalToDisplay = displayScreen.textContent;
}

function buttonNumbers(event){
    const Element = event.target;
    if (clickCounter>9)
    {
        clickCounter=1;  
        totalToDisplay = "-ERROR- Only 9 digits at a time...!"
        updateDisplay()
        totalToDisplay = "0"
    }
    else
    {
        totalToDisplay += Element.textContent;
        updateDisplay()
        console.log(Element.textContent)
        clickCounter++
        // console.log(clickCounter)
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
    accumulator = 0;
    totalToDisplay = "";
});

btnEqual.addEventListener('click',()=>{
    pullDisplay();
    console.log(totalToDisplay);
    console.log(accumulator);
    switch (lastOperation){
        case "add": 
                    pullDisplay();
                    accumulator = accumulator + parseInt(totalToDisplay);
                    break;
    }   

    totalToDisplay = accumulator;
    updateDisplay();
    lastOperation = "equal";
    console.log("last Operation:",lastOperation)
    
});

btnAdd.addEventListener('click',()=>{
    if (lastOperation==="equal")
        {
            lastOperation = "add";
            totalToDisplay = "0";
            console.log("last Operation:", lastOperation)
            updateDisplay();
        }

    pullDisplay();
    console.log("display captured: ",totalToDisplay);
    console.log("accumulator: ",accumulator);
    accumulator = accumulator + parseInt(totalToDisplay);
    totalToDisplay = accumulator;
    updateDisplay();
    totalToDisplay = "";
    lastOperation = "add";
    console.log("last Operation:",lastOperation)

});