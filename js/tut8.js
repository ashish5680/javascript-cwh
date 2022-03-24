console.log('This is tutorial 8');
// If Else Conditionals and Switches in JS

console.log('\n');

const age = 128;

const doesDrive = false;

// const vari = 34;





if (age!=19){
    console.log('Age is not 19')
}

if(age !== 65){
    console.log('Age is not 65')
}

else{
    console.log('Age is not 19')
}




console.log('\n');



if (typeof vari !== 'undefined'){
    console.log('Vari is defined');
}

else{
    console.log('Vari is not defined');
}





console.log('\n');





if (doesDrive || age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

console.log(age==45? 'Age is 45': 'Age is not 45');     // Ternary operator







///////////////////////////////////////////////////////////////////////////////////////////////////////








console.log('\n');
console.log('\n');




// Switch Case Statements


switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are of unknown age");
        break;
}         
