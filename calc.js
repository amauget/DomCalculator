const buttonContainer = document.querySelector('.buttonContainer');
const digitContainer = document.querySelector('.digitContainer');
const output = document.querySelector('.output')

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
const divide = document.querySelector('#divide')

let math = [];
buttonContainer.addEventListener('click',(event) => {
    let target = event.target;
    
    switch(target.id){
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
        case 'zero':
        case 'plus':
        case 'minus':
        case 'times':
        case 'divide':
            let number = target.textContent;
            math.push(number)
            break;

    }
    console.log(math)
   
})
