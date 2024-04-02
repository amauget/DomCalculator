//Containers:
const buttonContainer = document.querySelector('.buttonContainer');
const digitContainer = document.querySelector('.digitContainer');

//Number Variable Declaration:
const one = document.querySelector('#one');
const two = document.querySelector('#two')
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

//Operators:
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const divide = document.querySelector('#divide');
const decimal = document.querySelector('#decimal');

//Functionals:
const output = document.querySelector('.output');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');


let userInput = (prompt('input:')).split('')
output.textContent = partition(userInput)


function partition(userInput){
    let operators = ['+','-','*','/'];
    let op = ''

    for (o in operators){
        for(i in userInput){
            if (userInput[i] === operators[o]){
                op = userInput[i];
            }
        }
    }
    let a = [];
    let b = [];

    for(i in userInput){
        if(userInput[i] === op){
            let position = (parseInt(i));
            console.log(position + ': index')
            a = parseInt(((userInput.slice(0,position)).join()).replaceAll(',',''));
            //In order: slice at index of 0 through i, join into string, remove all commas, and convert to int.
            console.log(a)
            b = parseInt(((userInput.slice(position + 1)).join()).replaceAll(',',''));
            //b adds 1 to position to omit operator.
            console.log(b)
        }
    }
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a,b) => a * b,
        "/": (a,b) => a / b
      };
    if(op in this.methods){
        return this.methods[op](a,b)
    }
};
  
  



    // const operateTask = [
    //      {oper:'+', then: a + b}, {oper:'-', then: a - b}, {oper:'*', then: a * b}, {oper:'/', then: a / b}
    // ]
    


// buttonContainer.addEventListener('click',(event) => {
//     let target = event.target;
    
//     switch(target.id){
//         case 'one':
//         case 'two':
//         case 'three':
//         case 'four':
//         case 'five':
//         case 'six':
//         case 'seven':
//         case 'eight':
//         case 'nine':
//         case 'zero':
//         case 'plus':
//         case 'minus':
//         case 'times':
//         case 'divide':
//             let number = target.textContent;
//             math.push(number)
//             break;

//     }
    
   
