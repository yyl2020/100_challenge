const result = document.getElementById("result");
let currentValue = result.innerText;
let prevValue = 0;
let prevAction = "";
function enterNumber(number) {
  currentValue += String(number);
  result.innerText = Number(currentValue);
}
function triggerAction(action) {
    saveState(action);
    currentValue = 0
}

function clearNum(){
    currentValue = 0;
    result.innerText = 0;
}
function clearAll(){
    prevValue = 0;
    prevAction = "";
    clearNum()
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
    result.innerText = Number(currentValue);
}