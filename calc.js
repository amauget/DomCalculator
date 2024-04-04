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
eventListeners();

function eventListeners(){
    //numerical/operator button values:
    
    append.forEach(button =>{
        button.addEventListener('click',() => {
            let number = button.textContent;
          
            numberArray.push(number)
            output.textContent = numberArray.join('');
            //Outputs the most recent push due to index = length -1
            return numberArray;
       
        })
    })
    operator.forEach(button =>{
        button.addEventListener('click', () =>{
            const multDivide = ['*','÷']

            let operator = button.textContent
            
            if((operator !== '-' && numberArray.length === 0)||(multDivide.includes(numberArray[numberArray.length -1]) && operator !== '-')){
            // if operation doesn't start with '-'              if previous entry to operation is '*' or '÷' and current operation entry is other than '-'
                return null
            }
            
            output.textContent += operator;
            return numberArray.push(...operator)
            
       })
        
    })
    equal.addEventListener('click', () => {
        const allOperators = ['+','-','*','÷'] //subtraction removed to meet negative conditions
        let negNum = null;
        let restOfArray = null;
        for(let i = 1; i <= numberArray.length; i++){
            console.log(numberArray[i])
            
            if(allOperators.includes(numberArray[i])){
                if(numberArray[0] === '-'){
                    console.log(numberArray[i])
                    negNum = parseFloat(numberArray.slice(1,i).join('')) * -1
                    restOfArray = numberArray.slice(i)
                    numberArray.length = 0;
                    numberArray.splice(0,0,negNum, ...restOfArray)
                    console.log('first condition')
                    console.log('negNum: ' + negNum)
                    console.log('restOfArray: ' + restOfArray)
                }
            }
        }

        for(let i = 0; i <= allOperators.length; i++){
            if(!numberArray.includes(allOperators[i]) && numberArray[0] === '-'){
                negNum = parseFloat(numberArray.slice(1,).join('')) * -1
                numberArray.length = 0;
                numberArray.push(negNum);
                console.log('second condition')
                console.log(negNum)
        }
        partition(numberArray, output)}
    
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


function partition(userInput, output){
    // console.log(userInput)
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

    for(i in userInput){
        if(userInput[i] === op){
            let position = (parseInt(i));
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
        // output.textContent =
        let answer = this.methods[op](a,b);
        userInput.length = 0;
        output.textContent = answer;
        userInput.push(answer);
        return (userInput)
    }   
};


