//Containers:
const buttonContainer = document.querySelector('.buttonContainer');
const digitContainer = document.querySelector('.digitContainer');

//Functionals:
const output = document.querySelector('.output');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const equal = document.querySelector('.equal');
const append = document.querySelectorAll('.append');
const operator = document.querySelectorAll('.operator')

//Operators:
const multiply = document.querySelector('#times');
const divide = document.querySelector('#divide');
const add = document.querySelector('#plus');
const subtract = document.querySelector('#minus');

let numberArray = [];

keyToButton();
eventListeners();

function keyToButton(){
    document.addEventListener('keydown',(event) => {
        const keyOperators = ['+','-','*','/'] 
        console.log(event.key)
        if(event.key >= 0 && event.key <= 9 || event.key === '.'){
            numbersAppend(event.key, numberArray)
        }
        else if(keyOperators.includes(event.key)){
            
            let operation = null;
            switch(event.key){
                case '+':
                case '-':
                case '*':
                    operation = event.key
                    break;
                case '/':
                    operation = '÷';                
            }
            operatorAppend(operation, numberArray);
        }
        else{
            switch(event.key){
                case 'Enter':
                    negativeFirstNum();
                    break;
                case 'Delete':
                    numberArray.length = 0;
                    output.textContent = '';
                    break;
                case 'Backspace':
                    numberArray.pop()
                    //removes last element of array, except for previous answer which deletes entirely.
                    output.textContent = numberArray.join('');

            }
        }
    })
}
function operatorAppend(operator, numberArray){
    const allOperators = ['+','-','*','÷'] 
        const multDiv = ['*','÷']
        const plusMultDiv = ['+','*','÷']
        const minusPlus = ['-','+']
        let count = numberArray.filter(item => item === '*' || item === '÷').length;
        if (operator === '-') {
            if(count > 1){
                console.log('HERE' + numberArray);
                numberArray.pop();
                
                output.textContent = numberArray.join('')
                return numberArray;
            }
            // If numberArray is empty or the last element is an operator, treat '-' as a negative sign
            if (numberArray.length === 0 || multDiv.includes(numberArray[numberArray.length - 1])) {
                numberArray.push(operator);
                output.textContent = numberArray.join('');
                return numberArray;
                
            }
        }
        if((operator === numberArray[numberArray.length-1]) || (minusPlus.includes(numberArray[numberArray.length-1]) && allOperators.includes(operator))){
            numberArray.pop()
            // numberArray.push(operator)
            output.textContent = numberArray.join('')
            return numberArray
            
        }
        if((operator !== '-' && numberArray.length === 0)||(allOperators.includes(numberArray[numberArray.length -1]) && operator !== '-') || (operator === '-' && minusPlus.includes(numberArray[numberArray.length -1]) || operator ==='+' && minusPlus.includes(numberArray[numberArray.length -1]))){
            // if operation doesn't start with '-'              if previous entry to operation is '*' or '÷' and current operation entry is other than '-'
            if (count = 1){
                if(multDiv.includes(operator)){
                    numberArray.pop();
                    numberArray.push(operator);
                    output.textContent = numberArray.join('');
                    return numberArray;
                    
                }
                else{
                    //accounts for division
                    console.log('2nd count');
                    return null;

                }
                
            }    
                
             //Multiplier still appending to array at this LINE!!!!!!!!!!!!!!!!!!
             
        }
        if (allOperators.includes(operator)) {
            calculate(numberArray, operator);
        }
        numberArray.push(operator)
        console.log(numberArray)
        output.textContent = numberArray.join('')
        return numberArray
}


function eventListeners(){
    append.forEach(button =>{
        button.addEventListener('click',() => {
            numbersAppend(button.textContent);    
        })
    })
    operator.forEach(button =>{
        button.addEventListener('click', () =>{
            let operator = button.textContent;
            operatorAppend(operator, numberArray);
       })
    })
    equal.addEventListener('click', () => {
        negativeFirstNum() // moved to function to allow processing to occur for consecutive operation calculation (ie. -2 + 2 + 3)
    })
    clear.addEventListener('click',() =>{
        numberArray.length = 0;
        output.textContent = ''
    })
    backspace.addEventListener('click',() => {
        numberArray.pop()
        output.textContent = numberArray.join('');
    })
}

function numbersAppend(input){
    if(typeof(numberArray[numberArray.length -1]) === 'number'){
        //disables ability to type numbers onto previous answer.
        return null;
    }
    else{
        let number = input;
        numberArray.push(number)
        output.textContent = numberArray.join('');
        //Outputs the most recent push due to index = length -1
    }
    return numberArray;
}

function negativeFirstNum(){
    const allOperators = ['+','-','*','÷'] 
        let negNum = null;
        let restOfArray = null;
        for(let i = 1; i <= numberArray.length; i++){
            if(allOperators.includes(numberArray[i])){
                if(numberArray[0] === '-'){
                    negNum = parseFloat(numberArray.slice(1,i).join('')) * -1
                    restOfArray = numberArray.slice(i)
                    numberArray.length = 0;
                    numberArray.splice(0,0,negNum, ...restOfArray)
                }
            }
        }
        for(let i = 0; i <= allOperators.length; i++){
            //condition had to search allOperators instead. It was triggering in prior loop before numberArray[i] could reach operator.
            if(!numberArray.includes(allOperators[i]) && numberArray[0] === '-'){
                //conditional for a single negative number and no operator.
                negNum = parseFloat(numberArray.slice(1,).join('')) * -1
                numberArray.length = 0;
                numberArray.push(negNum);
                
        }
        calculate(numberArray, output)}
}

function calculate(userInput, output){
    if(userInput.length === 1){
        let answer = parseFloat(userInput[0])
        userInput.length = 0;
        return userInput.push(answer) //push leaves Number dataType intact
        //number conversion utilized to identify what has passed through calculate function
    }
    let operators = ['+','-','*','÷'];
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

    for(let i =0; i < userInput.length; i++){
        if(userInput[i] === op){
            let position = (parseFloat(i));
            a = ((userInput.slice(0,position)).join()).replaceAll(',','');
            //In order: slice at index of 0 through i, join into string, remove all commas, and convert to int.

            b = (userInput.slice(position + 1)).join().replaceAll(',','');
            //b adds 1 to position to omit operator.
            a = decimal(a), b = decimal(b)
            //adds contition to handle decimal entry without a leading zero

            function decimal(num){
                if(num[0]=== '.'){
                    num = num.replace('.','0.')
                }
                else if(num[0] === '-'){
                    num.replace('-','');
                    (parseFloat(num) * -1);
                }
                return parseFloat(num);
            }
        }
    }
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a,b) => a * b,
        "÷": (a,b) => a / b
      };
    if(op in this.methods){
        let answer = this.methods[op](a,b);
        userInput.length = 0;
        output.textContent = answer;
        userInput.push(answer);
        return (userInput)
    }   
};