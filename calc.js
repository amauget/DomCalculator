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

let numberArray = [];

// alert("Welcome! The minus key also functions for negative values")
keyToButton();
eventListeners();

function keyToButton(){
    document.addEventListener('keydown',(event) => {
        if(event.key >= 0 && event.key <= 9){
            console.log(event.key)
        }
    })
}

function eventListeners(){
    append.forEach(button =>{
        //DEBUGGING NOTE: ADD CONDITIONAL TO HANDLE TEXT INPUTS WHEN A PREVIOUS ANSWER IS PRESENT.
        button.addEventListener('click',() => {
            if(typeof(numberArray[numberArray.length -1]) === 'number'){
                return null;
            }
            else{
                let number = button.textContent;
                numberArray.push(number)
                output.textContent = numberArray.join('');
                //Outputs the most recent push due to index = length -1
            }
            return numberArray;
        })
    })
    operator.forEach(button =>{
        button.addEventListener('click', () =>{
            const allOperators = ['+','-','*','÷'] 
            const multDiv = ['*','÷']
            const plusMultDiv = ['+','*','÷']
            const minusPlus = ['-','+']
            let operator = button.textContent
            console.log(numberArray.length-1)
            if((operator === numberArray[numberArray.length-1]) || (minusPlus.includes(numberArray[numberArray.length-1]) && allOperators.includes(operator))){
                
               numberArray.pop()
               numberArray.push(operator)
                output.textContent = numberArray.join('')
                return numberArray
                
            }
            if((operator !== '-' && numberArray.length === 0)||(multDiv.includes(numberArray[numberArray.length -1]) && operator !== '-') || (operator === '-' && minusPlus.includes(numberArray[numberArray.length -1]) )){
            // if operation doesn't start with '-'              if previous entry to operation is '*' or '÷' and current operation entry is other than '-'
                return null
            }
            for(let i = 1; i <= numberArray.length; i++){
                if((plusMultDiv.includes(numberArray[i]) && operator !== '-')|| (minusPlus.includes(numberArray[i]))){
                    calculate(numberArray, output)
                    output.textContent += operator;
                    console.log('if triggered')
                    return numberArray.push(...operator)
                }
            }
            output.textContent += operator;
            return numberArray.push(...operator)
       })
    })
    equal.addEventListener('click', () => {
        const allOperators = ['+','-','*','÷'] 
        let negNum = null;
        let restOfArray = null;
        for(let i = 1; i <= numberArray.length; i++){
            if(allOperators.includes(numberArray[i])){
                if(numberArray[0] === '-'){
                    console.log(numberArray[i])
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
                negNum = parseFloat(numberArray.slice(1,).join('')) * -1
                numberArray.length = 0;
                numberArray.push(negNum);
                
        }
        calculate(numberArray, output)}
    })
    clear.addEventListener('click',() =>{
        numberArray.length = 0;
        output.textContent = ''
    })
    backspace.addEventListener('click',() => {
        numberArray.pop()
        //removes last element of array, except for previous answer which deletes entirely.
        output.textContent = numberArray.join('');
    })
}
function calculate(userInput, output){
    console.log(userInput)
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


