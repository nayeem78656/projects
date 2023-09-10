
let result = document.getElementById("result");

function addNumber(num) {
  result.value += num;
}

function addOperator(operator) {
  result.value += operator;
}

function clearResult() {
  result.value = "";
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  result.value = eval(result.value);
}
function percent(){
  result.value = eval(result.value+"/100");
}