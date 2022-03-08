console.log("This is Tutorial 47");        // this is like a string literal
// Regular Expressions - Metacharacters in JavaScript 

console.log("\n");



let regex = /harrsdfgy/;

// Lets look into some meta-character symbols
regex = /^harrdc/;      // ^ means expression will match if string starts with
regex = /harry$/;      // $ at the end of the string means "string ends with"
regex = /h.rry/;      //matches any one character     // matlab agar . ki jagh koi bhi chjaracter aa jega too match hoo jegi
regex = /h*rry/;      //matches any 0 or more characters
regex = /ha?rryi?t/;    // ? after character means that character is optional -->  like a? means a optional hai
regex = /h\*rry/        //  \* means matlab joo actual wala star hai hum uski baat kar re hai


let str = "h*rry means codewith"; // 




let result = regex.exec(str);
console.log("The result from exec is ", result);




if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
