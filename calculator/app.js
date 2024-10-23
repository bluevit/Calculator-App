var input = document.getElementById("inputField");
function getValue(buttonValue) {  
    input.value += buttonValue;
}
  
function clrAll() {
  
    input.value = "";
}
  
function deleteChar() {
  
    input.value = input.value.slice(0, -1);
}
  
function squareNum() {
  
    input.value = input.value * input.value;
}
  
function equal() {
    if (!input.value) {
      input.value = "syntax error";
    } else {
      input.value = eval(input.value);
    }
}