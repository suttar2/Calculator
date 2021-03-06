//listen on the button panel and listen on the display
const buttonPanel = document.getElementById('ButtonPanel');
const displayVal = document.getElementById("NumDisplay");

//functions that add, subtract, multiply divide, and operate
const add = (a,b) => (a + b);
const subtract = (a,b) => (a - b);
const multiply = (a,b) => (a * b);
const divide = (a,b) => (a / b);
const modulus = (a,b) => (a % b);
const operate = (operator, a, b ) => (operator(a,b));

//set memory as an empty array to start
let memory = [];
let lastOperation = [];

//clears screen turning display to null
function clearScreen(){ displayVal.textContent = null};

//resets all memory stored in memory array
function clearMemory(){ memory = [] };

//pushes the information on the display into the memory
function commitLast(){ memory.push(displayVal.textContent) };

function doOperator(func){
    commitLast();
    clearScreen();
    memory.push(func);
    calculate(memory);
};

//calculate function - takes an array with at least 3 items. and runs the operate function on it using the operator in array position 1 
function calculate(arr){
    if (arr.length >= 3) {
        let result = operate(arr[1], parseFloat(arr[0]), parseFloat(arr[2]))
        
        arr.splice( 0, 3 , result );
        
        if (arr.length > 2) {
            calculate(arr)
        };
        displayVal.textContent = memory[0]
    };
};

    //maybe add the below later?
    //loop over the memory array using operate
    //operate using memory[0] and memory[2] with operator at memory[1]
    //repeat untill memory.length == 1


//make a new variable called pressButton, it get's defined when a button is pressed. It listens for a click on a button
let pressButton = buttonPanel.addEventListener('click', function(btn) {
    //button pressed get's defined as the ID of the button being pressed. 
    
    let buttonPressed = btn.target.id;

    if (memory.length >= 3){calculate(memory)};

    if (buttonPressed >= 0 && buttonPressed <= 9) {
        displayVal.textContent = displayVal.textContent + buttonPressed
    };// if it's a number value our display will show it and if isn't empty, concat it

    if (buttonPressed === ".") {
        displayVal.textContent = displayVal.textContent + "."
    };

    if (buttonPressed === "C") {
        clearScreen(); //if it's clear, clear the screen
    };
    
    if (buttonPressed === "CE") {
        clearScreen();
        clearMemory();
    };//if it's clear E clear screen and memory. Is that what that button does on regular calculators?

    //if it's adding, commit the value in displayval to memory commit the add function to memory, and then clear the screen
    //use this as model for all other operations once working - did that. it works
    if (buttonPressed === "+") {doOperator(add)};
    if (buttonPressed === "-") {doOperator(subtract)};
    if (buttonPressed === "X") {doOperator(multiply)};
    if (buttonPressed === "/") {doOperator(divide)};
    if (buttonPressed === "%") {doOperator(modulus)};

    //if equal is pressed, commit the displayVal to memory, Clear the screen, and then calculate the memory. 
    if(buttonPressed === "="){
        if (memory.length > 1){

        commitLast();
        clearScreen();
        calculate(memory);
        displayVal.textContent = memory[0];
        clearMemory();
        };
        
       

    };

});