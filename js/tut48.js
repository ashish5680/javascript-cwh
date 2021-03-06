console.log("This is tutorial 48");
// Regular Expressions - Character sets

console.log("\n");


// Regular Expressions:
    // Basic functions 
    // Metacharacter Symbols

// const regex = /^h/i;




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Character Sets - We use []
let regex = /h[a-z]rry/;      // can be any character from a to z
regex = /h[aty]rry/;          // can be an a, t or y
regex = /h[^aty]rry/;        // cannot be any of a, t or y    ( ye char at wala symbol aur uper wala alag alag hai yaha pe joo charAt sybml hai voo not kaa kam karta hai)
regex = /h[^aty]rr[yYu]/;     // cannot be any of a, t or y + can be Y, u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/;  // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /har{2}y/;       // r can occur exactly 2 times
regex = /har{0,2}y/;     // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/        // har exactly two times aana chaiye, and [0-9]r ye exactly three times aana chaiye 



let str = "hirry9 bhai";
str = "harrry bhai";
str = "harhar1r4r5r bhai";




let result = regex.exec(str);
console.log("The result from exec is ", result);





if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
