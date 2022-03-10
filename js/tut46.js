console.log("This is Tutorial 46");        // this is like a string literal
// JavaScript Regular Expressions and related Functions

console.log("\n");








// regular expression se hum kuch matching karva sakte hai kuch functions ka istamal karke

// ase forward slashes ke bich mai kuch likh dege too voo regular expression literal ban jega mai kuch matching karvauga kuch functions ka istamal karke
let reg = /harry/;    //This is a regular expression literal in JS
// reg = /harry/g; // g means global flag   -->    is se ye hoga ki ahar hum puri string mai search kar re hai too jab dusari bar check krege too voo dusara btayega
// reg = /harry/i; // i means case insensitive       -->   isme agar capital hoo tab bhi match hooo jega small hai tab bhi match hoo jega  agar kuch HarRy asa kuch hai tab bhi match hoo jega
// ye g ya i joo hai voo flag hai 



console.log(reg);
console.log(reg.source);      // forwad slash ke bich mai kya likha hai ye voo bta dega



console.log("\n");


////////////////////////////////////////////////////////////////////////////////////////////////////////////



let s = "This is great code with harry and also harRy bhai"


// Functions to match expressions :

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. exec() - This function will return an array for match or null for no match    -->    ye null isiliye return humari suvidha ke liye karta hai taki hum while loop laga ske uski condition null tak laga ske
let result = reg.exec(s);         // ye bta dega ki kon se index mai harry moduj hai
console.log(result);

result = reg.exec(s);                // ye dusari bar run kiya 
console.log(result); 

result = reg.exec(s);
console.log(result);   // ---> We can use multiple exec with global flag


console.log("\n");



if (result) {                    // in sabko result ke andr isiliye daal dege agar kuch galat hua too result.input result.index error thro nahi krega
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n");
console.log("\n");



// 2. test() - Returns true or false
let result2 = reg.test(s);
console.log(result2);  // --> This will only print true if the "reg" is there in the string "s"




////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ye jitne match hone unte matches ka array return kr dega

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg) // ---> This is right           // is ko hum ulta lagate hai
console.log(result3);




////////////////////////////////////////////////////////////////////////////////////////////////////////////




// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
console.log(result4);



////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);




////////////////////////////////////////////////////////////////////////////////////////////////////////////
