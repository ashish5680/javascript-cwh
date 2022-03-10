console.log("This is Tut 65 -> Project 7.0");
console.log("\n");


let screen = document.getElementById("screen");

buttons = document.querySelectorAll('button');     // I use querySelectorAll to select all buttons 

let screenValue = '';



for(item of buttons){

    item.addEventListener('click', (e) => {

        buttonText = e.target.innerText;
        console.log('Button text is : ' , buttonText);

        
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;       // ye variable hai
            screen.value = screenValue;        // ye DOM element hai
        }

        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }

        else if(buttonText == '='){
            screen.value = eval(screenValue);    // eval function se joo screenValue hogi voo evaluate hoo jegi
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    });

}

