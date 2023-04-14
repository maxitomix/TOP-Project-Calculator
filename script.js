let totalToDisplay = "0"


const displayScreen = document.querySelector('.display');

function updateDisplay(){
    displayScreen.textContent = totalToDisplay;
}
updateDisplay()
totalToDisplay = ""

const btnNumbers = document.querySelectorAll('.btn-numbers');
let clickCounter = 0;
btnNumbers.forEach((Element) => {
    Element.addEventListener('click', ()=>{
        
            if (clickCounter>9)
            {
                clickCounter=1;  
                totalToDisplay = "-ERROR- Only 9 digits at a tine...!"
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

        
    })
});