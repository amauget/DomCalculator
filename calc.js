//Containers:
const buttonContainer = document.querySelector('.buttonContainer');
const digitContainer = document.querySelector('.digitContainer');

//Functionals:
const output = document.querySelector('.output');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const equal = document.querySelector('.equal');
const append = document.querySelectorAll('.append');

let numberArray = [];
eventListeners();


function eventListeners(){
    //numerical/operator button values:
    append.forEach(button =>{
        button.addEventListener('click',() => {
            let number = button.textContent;
            //if last index of (numberArray !== +,*, / ) && (last 2 index of numberArray !== -) 
             
            numberArray.push(number)
            output.textContent += numberArray[numberArray.length -1];
            //Outputs the most recent push due to index = length -1
            return numberArray;
        })
    })
    equal.addEventListener('click', () => partition(numberArray, output))

    clear.addEventListener('click',() =>{
        numberArray.length = 0;
        output.textContent = ''
    })

    backspace.addEventListener('click',() => {
        numberArray.pop()
        //removes last element of array, except for previous answer which deletes entirely.
        output.textContent = (numberArray.toString()).replace(',','');
        
    })
}


function partition(userInput, output){
    
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
                    console.log((parseFloat(num) * -1));
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


