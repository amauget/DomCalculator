

function main(){
    //Containers:
    const buttonContainer = document.querySelector('.buttonContainer');
    const digitContainer = document.querySelector('.digitContainer');

    //Functionals:
    const output = document.querySelector('.output');
    const clear = document.querySelector('.clear');
    const backspace = document.querySelector('.backspace');
    const equal = document.querySelector('.equal');
    let numberArray = [];
    const append = document.querySelectorAll('.append');
    
    append.forEach(button =>{
        button.addEventListener('click',() => {
           let number = button.textContent;
           
           numberArray.push(number)
           output.textContent += numberArray[numberArray.length -1];
           //Outputs the most recent push due to index = length -1
           return numberArray;
        })
    })
    equal.addEventListener('click', () => partition(numberArray, output))

}



function partition(userInput, output){
    console.log(userInput)
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
        console.log(userInput)
    }   
};


main();