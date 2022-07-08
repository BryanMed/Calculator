const buttons = document.querySelectorAll('button');
const display = document.querySelector(".screen>p");

let displayVal = '';
let previousVal = '0';

buttons.forEach((button) => {
  button.addEventListener('click', (e)=>{
    if(e.target.className === 'num'){
      displayVal += e.target.id;
      display.textContent = displayVal;
    }
    else if(e.target.className === 'operator'){
      displayVal =  `${add(previousVal, displayVal)}`;
      display.textContent = displayVal;
      previousVal = displayVal;
      displayVal = '';
    }
    else if(e.target.id === 'equal'){
      displayVal = `${add(previousVal, displayVal)}`;
      display.textContent = displayVal;
      previousVal = displayVal;
      displayVal = '';
    }
  });
});


const add = (a, b) => parseInt(a) + parseInt(b);
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Error';

function operate(operator, a, b){
  return operator(a, b);
}