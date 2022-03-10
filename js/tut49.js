console.log("This is tutorial 49");
// Shorthand Character Classes (Regular Expressions)

console.log("\n");





// Character classes
let regex = /\war/;     // \w word character -->  _(underscore) or alphabet or numbers
regex = /\w+d1r/;       // \w+ means one or more word characters
regex = /\Wbhai/;       // \W  means Non word character
regex = /\W+bhai/;      // \W+ means more than one Non word character

regex = /number \d999/; // \d means exactly any one digit
regex = /number \d+/;   // \d+ means more than one digit
regex = /\D999/;        // \D means non digit
regex = /\D+999/;       // \D+ means more than one non digit

regex = /\ska number/;  // \s means Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
regex = /\Ska number/;  // \S means Match non whitespace character
regex = /\S+ka number/; // \S+ means Match one or more than one non whitespace character

regex = /4r5r\b/;       // \b means word boundary  -->  means 4r5r ke baad space aana chaiye



// Assertions
regex = /h(?=y)/;       // iska matlab h ke baad exactly y hona chaiye
regex = /h(?!=y)/;    // iska matlab h ke exactly baad y nahi hona chaiye 



const str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";






let result = regex.exec(str);
console.log("The result from exec is ", result);




if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}