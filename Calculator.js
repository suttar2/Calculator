//listen on the button panel 
//listen on the display
let ButtonPanel = document.getElementById('ButtonPanel');
let displayVal = document.getElementById("NumDisplay");

//functions that add, subtract, multiply divide, and operate
let add = (a,b) => (a + b);
let subtract = (a,b) => (a - b);
let multiply = (a,b) => (a * b);
let divide = (a,b) => (a / b);
let operate = (operator, a, b ) => (operator(a,b));

let memory = [];

function clearScreen(){ displayVal.textContent = null};
function clearMemory(){ memory = [] };
function commitLast(){ memory.push(displayVal.textContent) };
function checkLastPress(){ return displayVal.textContent };
function calculate(arr){return operate(arr[1], parseInt(arr[0]), parseInt(arr[2]))};

    //loop over the memory array using operate
    //operate using memory[0] and memory[2] with operator at memory[1]
    //repeat untill memory.length == 1

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

    if (buttonPressed == "X") {
        checkLastPress();
        commitLast()
        memory.push(multiply)
        clearScreen();
    };

    if(buttonPressed == "="){
        commitLast();
        clearScreen();
        displayVal.textContent = calculate(memory);
        console.log(memory)
    };

});

console.log(memory);
//console.log(operate(add, 34, 2)); // calling the function directly seems to actually add






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
