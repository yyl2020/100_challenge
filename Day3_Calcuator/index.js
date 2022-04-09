const result = document.getElementById("result");
let currentValue = result.innerText;
let prevValue = 0;
let prevAction = "";
function enterNumber(number) {
  currentValue += String(number);
  result.innerText = Number(currentValue);
}
function triggerAction(action) {
    switch (action) {
        case "+":
        case "-":
        case "*":
        case "/":
            saveState(action);
            currentValue = 0
            break;
    }
}

function clearNum(){
    console.log(1111);
    currentValue = 0;
    result.innerText = 0;
}
function clearAll(){
    currentValue = 0;
    prevValue = 0;
    prevAction = "";
    result.innerText = 0;
}
function equal () {
    if (prevAction === "+") {
        result.innerText = currentValue = prevValue + Number(currentValue);
    }else if (prevAction === "-") {
        result.innerText = currentValue = prevValue - Number(currentValue);
    }else if (prevAction === "*") {
        result.innerText = currentValue = prevValue * Number(currentValue);
    }else if (prevAction === "/") {
        result.innerText = currentValue = prevValue / Number(currentValue);
    }
}
function saveState (action) {
    prevAction = action;
    prevValue = Number(currentValue);
}
function deleteOne(){
    currentValue = result.innerText.slice(0, -1);
    console.log(currentValue);
    result.innerText = Number(currentValue);
}