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
let accumulator = undefined;
let lastOperation = "start"
let newInput = 0;
let operand = "start"
let total = 0;
let equalToggle = 0 ;

function updateDisplay(){
    displayScreen.textContent = totalToDisplay;
    }
function pullDisplay(){
    totalToDisplay = displayScreen.textContent;
}

function allClear(){
    totalToDisplay = "0";
    clickCounter = 0;
    updateDisplay();
    accumulator = undefined;
    totalToDisplay = "";
    lastOperation = "Clear";
    console.log("last Operation:",lastOperation)
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
        console.log("Add to Display:",Element.textContent)
        clickCounter++
        console.log("Click count: ",clickCounter)

        // console.log(clickCounter)
    }

}


// Code

updateDisplay()
totalToDisplay = ""

btnNumbers.forEach((Element) => {
    Element.addEventListener('click', buttonNumbers)
});


btnClear.addEventListener('click',allClear);

btnOperands.forEach((Element) => {
    Element.addEventListener('click', () =>
    {
    console.log(Element.textContent);
    operand = Element.textContent;
    if (operand != "Clear")
    {       
            clickCounter = 0;
            pullDisplay();
            newInput = Math.abs(parseInt(totalToDisplay));
            console.log("new input:",newInput);
            console.log("operand:",operand);
            console.log("last operation:",lastOperation);
            if (equalToggle === 1)
            {
                accumulator = undefined;
                equalToggle = 0;
            }

            if (operand === "=")
            {
                operand = lastOperation;
                console.log("operand =:",operand);
                equalToggle = 1;
            }    
            if (accumulator === undefined)
            {
                accumulator = newInput;
                lastOperation = operand;
            }
            else
            {
                switch (operand)
                {
                    case "+": 
                            accumulator = accumulator + newInput
                            console.log("acumulator +",accumulator);
                            lastOperation = "+";
                            break;

                    case "-": 
                            accumulator = accumulator - newInput
                            console.log("acumulator +",accumulator);
                            lastOperation = "-";
                            break;
                }
            }
            totalToDisplay = accumulator;
            updateDisplay()
            totalToDisplay = ""
        }
    }) 
});


// btnEqual.addEventListener('click',()=>{
//     pullDisplay();
//     console.log(totalToDisplay);
//     console.log(accumulator);
//     switch (lastOperation){
//         case "add": 
//                     pullDisplay();
//                     accumulator = accumulator + parseInt(totalToDisplay);
//                     break;
//         case "add": 
//                     pullDisplay();
//                     accumulator = accumulator - parseInt(totalToDisplay);
//                     break;
//     }   

//     totalToDisplay = accumulator;
//     updateDisplay();
//     lastOperation = "equal";
//     console.log("last Operation:",lastOperation)
    
// });

// btnAdd.addEventListener('click',()=>{
//     console.log("Start Add. Last Operation and Acumulator:", lastOperation, accumulator)
//     if (lastOperation==="equal")
//         {
//             lastOperation = "add";
//             totalToDisplay = "0";
//             console.log("last Operation update:", lastOperation)
//             updateDisplay();
//             totalToDisplay = "";
//         }

//     pullDisplay();
//     console.log("display captured: ",totalToDisplay);
//     console.log("accumulator initial: ",accumulator);
//     newInput = Math.abs(parseInt(totalToDisplay));
//     accumulator = accumulator + newInput;
//     console.log("accumulator final: ",accumulator);
//     console.log("Total to Display: ",accumulator);
//     totalToDisplay = accumulator;
//     updateDisplay();
//     totalToDisplay = "";
//     lastOperation = "add";
//     console.log("last Operation update:",lastOperation)
//     console.log("End Add. Last Operation and Acumulator:", lastOperation, accumulator)

// });

// btnSubstract.addEventListener('click',()=>{
//     console.log("Start substarct. Last Operation and Acumulator:", lastOperation, accumulator)
//     if (lastOperation==="equal")
//         {
//             lastOperation = "substract";
//             totalToDisplay = "0";
//             console.log("last Operation update:", lastOperation)
//             updateDisplay();
//             totalToDisplay = "";
//         }

//     pullDisplay();
//     console.log("display captured: ",totalToDisplay);
//     console.log("accumulator initial: ",accumulator);
//     newInput = Math.abs(parseInt(totalToDisplay));
//     console.log("new input: ",newInput);
//     accumulator = accumulator - newInput;
//     console.log("accumulator final: ",accumulator);
//     console.log("Total to Display: ",accumulator);
//     totalToDisplay = accumulator;
//     updateDisplay();
//     totalToDisplay = "";
//     lastOperation = "substract";
//     console.log("last Operation update:",lastOperation)
    



//     console.log("End substarct. Last Operation and Acumulator:", lastOperation, accumulator)

// });