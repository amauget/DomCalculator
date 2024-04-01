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
            console.log(target.textContent);
            break;
    }
})
