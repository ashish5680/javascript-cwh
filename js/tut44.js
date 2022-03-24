console.log("This is Tut 44");
// Error Handling and Try/Catch in JavaScript


console.log("\n");




// Pretend this is coming from a server as response
let a = "Ashish Bhai";
a = undefined;





if(a != undefined){
    throw new Error('This is not undefined');     // ase hum custom error throw kar saktee hai  yahi pe aage ka code ruk jaayega
}
else{
    console.log('This is undefined');
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");





// functionHarry();



// Handling the error
try {
    // null.console
    console.log("We are inside try block");
    functionHarry();             // it will give reference error

} 
catch(error) {
    console.log(error)
    console.log("Are you okay?");
    console.log(error.name);     // ye btayega ki konsi trah ka error hai
    console.log(error.message);
    
} 
finally {               // ye chalega hi chalega chahe try mai hoo ya catch mai hoo
    console.log("Finally we will run this")
}