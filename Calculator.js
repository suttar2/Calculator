let ButtonPanel = document.getElementById('ButtonPanel');
let displayVal = document.getElementById("Display");


let add = (a,b) => (a + b);
let subtract = (a,b) => (a - b);
let multiply = (a,b) => (a * b);
let divide = (a,b) => (a / b);
let operate = (operator, a, b ) => (operator(a,b));
let runningVal;

let memory = [];

function clearScreen(){ displayVal.innerHTML = "" };
function clearMemory(){ memory = [] };
function commitLast(){ memory.push(displayVal.innerHTML) };
function checkLastPress(){
    //if the last entry in memory is not a number, exit
}
function calculate (){
    //loop over the memory array using operate
    //operate using memory[0] and memory[2] with operator at memory[1]
    //repeat untill memory.length == 1
}
let pressButton = ButtonPanel.addEventListener('click', function(btn) {
    let buttonPressed = btn.target.id;

    if (buttonPressed >= 0) {
    displayVal.innerHTML = displayVal.innerHTML + buttonPressed
    };
    
    if (buttonPressed == "C") {
        clearScreen();
    };

    if (buttonPressed == "CE") {
        clearScreen();
        clearMemory()
    };

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
    };

});



console.log();





    // if (buttonPressed == "+"){
    //     numMemory.push(displayVal.innerHTML);
    //     clearScreen();
    //     }

    //     if (numMemory.length > opMemory.length){
    //         opMemory.push(add);            
    //     }
    //     console.log(numMemory);
    //     console.log(opMemory);

        // if (buttonPressed == "+") {
    //         memory.push(
    //             displayVal.innerHTML,
    //             add());
    //     clearScreen();

    //     console.log(memory);
    // };
