console.log("This is Tut 43");
// Async/ Await in JavaScript





console.log("\n");



function ashish(){
    return "ashish";
}

let ash = ashish();
console.log(ash);


///////////////////////////////////////////////////////////////////////////////////



console.log("\n");








async function ashish2(){
    return "ashish";
}

let ash2 = ashish2();
console.log(ash2);




///////////////////////////////////////////////////////////////////////////////////






console.log("\n");
console.log("\n");











// async await ki help se fetch mai doo bar .then nahi lagana padega


// function ke aage jase hi async laga diya too voo function promise return karega
async function harry(){         // async ek promise ko return karta hai to hum async ke andr ek promise ke resolve hone ka wait kar sakta hu
    
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');

    console.log('before response');
    const users = await response.json();
    console.log('users resolved');

    return users;

    // return "harry";
}




console.log("Before calling harry")
let a = harry();
console.log("After calling harry")

console.log("This is a Promise " , a);   // ye a ek promise hai 

a.then(data => console.log(data))

console.log("Last line of this js file")