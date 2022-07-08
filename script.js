const buttons = document.querySelectorAll('button');
const display = document.querySelector(".screen>p");

let currentVal = '';
let previousVal = '';
let currentOperator = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e)=>{
    if(e.target.className === 'num'){
      currentVal += e.target.id;
      display.textContent = currentVal;
    }
    else if(e.target.className === 'operator'){
      switch(e.target.id){
        case 'add':
          currentOperator = add;
        break;

        case 'substract':
          currentOperator = substract;
        break;

        case 'multiply':
          currentOperator = multiply;
        break;

        case 'divide':
          currentOperator = divide;
        break;

        case 'operator':
          currentOperator = clear;
        break;
      }
      previousVal = display.textContent;
      currentVal = '';
    }
    else if(e.target.id === 'equal'){
      display.textContent = `${operate(currentOperator, previousVal, currentVal)}`;
    }

    else if (e.target.id === 'clear'){
      currentVal = '';
      previousVal = '';
      currentOperator = '';
      display.textContent = currentVal;
    }
  });
});


function operate(operator, a, b){
  if(a === '' ) a = '0';
  if(b === '' ) b = '0';
  return operator(parseInt(a), parseInt(b));
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Error';