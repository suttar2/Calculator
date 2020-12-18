//listen on the button panel 
//listen on the display
let ButtonPanel = document.getElementById('ButtonPanel');
let displayVal = document.getElementById("Display");

//functions that add, subtract, multiply divide, and operate
let add = (a,b) => (a + b);
let subtract = (a,b) => (a - b);
let multiply = (a,b) => (a * b);
let divide = (a,b) => (a / b);
let operate = (operator, a, b ) => (operator(a,b));

let memory = [];

function clearScreen(){ displayVal.textContent = "" };
function clearMemory(){ memory = [] };
function commitLast(){ memory.push(displayVal.textContent) };
function checkLastPress(){
    //if you just pressed an operation and last entry in memory is not a number, do nothing 
}
function calculate (){
    //loop over the memory array using operate
    //operate using memory[0] and memory[2] with operator at memory[1]
    //repeat untill memory.length == 1
}
let pressButton = ButtonPanel.addEventListener('click', function(btn) {
    let buttonPressed = btn.target.id;

    if (buttonPressed >= 0) {
    displayVal.textContent = displayVal.textContent + buttonPressed
    };
    
    if (buttonPressed == "C") {
        clearScreen();
    };

    if (buttonPressed == "CE") {
        clearScreen();
        clearMemory()
    };

    //use this as model for all other operations once working
    if (buttonPressed == "+") {
        checkLastPress();
        commitLast()
        memory.push(add)
        clearScreen();
    };

    if(buttonPressed == "="){
        commitLast();
        clearScreen();
        calculate()

        console.log(memory);
    };

});



console.log();





    // if (buttonPressed == "+"){
    //     numMemory.push(displayVal.textContent);
    //     clearScreen();
    //     }

    //     if (numMemory.length > opMemory.length){
    //         opMemory.push(add);            
    //     }
    //     console.log(numMemory);
    //     console.log(opMemory);

        // if (buttonPressed == "+") {
    //         memory.push(
    //             displayVal.textContent,
    //             add());
    //     clearScreen();

    //     console.log(memory);
    // };
