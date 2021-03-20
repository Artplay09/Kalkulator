const input1 = document.getElementById('tema');
const input2 = document.getElementsByClassName('input')[0];
const input3 = document.getElementsByClassName('operation_glav')[0];


const go = document.getElementById('go');


function  addNumbers(e){
   let input = e.target.value
   if(input != undefined){
       input1.value += input
   }
}

function addOperation_glav(e){
    let operation_glav = e.target.textContent;
    if(operation_glav != undefined){
        input1.value += operation_glav;
    }
    
}
function kalkulator() {
    let result = eval(input1.value);
    input1.value = result;
}

input3.addEventListener('click', (e) => addOperation_glav(e));
input2.addEventListener('click', (e) => addNumbers(e));
go.addEventListener('click', kalkulator);