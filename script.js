const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const displayRes = document.querySelector('.result');
const displayOp = document.querySelector('.operation');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const erase = document.querySelector('#erase');

let currentVal = '';
let previousVal = '';
let operation = undefined;

erase.addEventListener('click', (e) => {
  currentVal = currentVal.slice(0, -1);
  console.log(currentVal);
  displayRes.textContent = currentVal;
});

clear.addEventListener('click', () => {
  currentVal = '';
  previousVa = '';
  operation = undefined;
  displayRes.textContent = currentVal;
});

numbers.forEach(button => {
  button.addEventListener('click', e =>{
    if(e.target.value === '.' && currentVal.includes('.')) return;
    currentVal += e.target.value;
    displayRes.textContent = currentVal;
  });
});

operators.forEach(button => {
  button.addEventListener('click', e => {
    if(currentVal === '') return;
    if(previousVal !== ''){
      let res;
      if(currentVal === '') return;
        res = operate(operation, currentVal, previousVal);
        currentVal = res;
        operation = undefined;
        previousVal = '';
    }
    switch(e.target.id){
      case 'add':
        operation = add;
      break;

      case 'substract':
        operation = substract;
      break;

      case 'multiply':
        operation = multiply;
      break;

      case 'divide':
        operation = divide;
      break;
    }
    previousVal = currentVal;
    currentVal = '';
    displayRes.textContent = previousVal;
  });
});


equal.addEventListener('click', (e) => {

  let res;
  if(previousVal === '' || currentVal === '') return;
  res = operate(operation, currentVal, previousVal);
  currentVal = res;
  operation = undefined;
  previousVal = '';
  displayRes.textContent = currentVal;
});

function operate(operator, a, b){
  return operator(parseFloat(a), parseFloat(b)).toFixed(2);
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? 'Error' : b/a; 

