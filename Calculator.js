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

//set memory as an empty array to start
let memory = [];


//functions 

//clears screen turning display to null
function clearScreen(){ displayVal.textContent = null};

//resets all memory stored in memory array
function clearMemory(){ memory = [] };

//pushes the information on the display into the memory
function commitLast(){ memory.push(displayVal.textContent) };

//checks the type of the last item in the array. 
function checkLastPress() {console.log(memory[-1].typeof)};

//Thought I should make a function to check for integers - realized it was better to make one that checks the type
//function checkInt(){typeOf( memory[-1] == int );

//Thought I should make a function that checks if something in the memory is a function - same as above
//function checkFunc(){ }

//calculate function - takes an array with at least 3 items. and runs the operate function on it using the operator in array position 1 
function calculate(arr){
    let result = operate(arr[1], parseInt(arr[0]), parseInt(arr[2]))
    memory.splice( 0, 3 , parseInt(result) );

};
    //maybe add the below later?
    //loop over the memory array using operate
    //operate using memory[0] and memory[2] with operator at memory[1]
    //repeat untill memory.length == 1


//make a new variable called pressButton, it get's defined when a button is pressed. It listens for a click on a button
let pressButton = ButtonPanel.addEventListener('click', function(btn) {
    //button pressed get's defined as the ID of the button being pressed. 
    let buttonPressed = btn.target.id;

    // if it's a number value our display will show it and if isn't empty, concat it
    if (buttonPressed >= 0 && buttonPressed <= 9) {
    displayVal.textContent = displayVal.textContent + buttonPressed
    };
    
    //if it's clear, clear the screen
    if (buttonPressed == "C") {
        clearScreen();
    };
    //if it's clear E clear screen and memory. Is that what that button does on regular calculators?
    if (buttonPressed == "CE") {
        clearScreen();
        clearMemory();
    };

    //if it's adding, commit the value in displayval to memory commit the add function to memory, and then clear the screen
    //use this as model for all other operations once working
    if (buttonPressed == "+") {
        commitLast();
        memory.push(add);
        clearScreen();
    };

    //same as above
    if (buttonPressed == "X"){
        commitLast();
        memory.push(multiply);
        clearScreen();
    };

    //if equal is pressed, commit the displayVal to memory, Clear the screen, and then calculate the memory. 
    if(buttonPressed == "="){
        console.log(memory);

//        if (checkLastPress !== null){commitLast()};
//        if (memory[1].typeOf == {commitLast()})
        commitLast();

        clearScreen();
        
        console.log(memory[1].typeOf)

        calculate(memory);
        
        console.log(memory);
        
        displayVal.textContent = memory[0];
//        if memory.length console.log(typeof(memory[0]))
    };

});


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
