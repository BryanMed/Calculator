const buttons = document.querySelectorAll('button');
const display = document.querySelector(".screen>p");

let currentVal = '';
let previousVal = '0';

buttons.forEach((button) => {
  button.addEventListener('click', (e)=>{
    if(e.target.className === 'num'){
      currentVal += e.target.id;
      display.textContent = currentVal;
    }
    else if(e.target.className === 'operator'){
      previousVal = display.textContent;
      currentVal = '';
    }
    else if(e.target.id === 'equal'){
      display.textContent = `${add(previousVal, currentVal)}`;
    }
  });
});


const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Error';

function operate(operator, a, b){
  if(a === '' ) a = '0';
  if(b === '' ) b = '0';
  return operator(parseInt(a), parseInt(b));
}