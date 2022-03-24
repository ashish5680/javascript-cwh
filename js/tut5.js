// Type conversion and Type Coercion
console.log('Welcome to tut5');


console.log('\n');
console.log('\n');


// String mai convert karne kaa faida ye hai ki hum String functions wagara laga sakte hai


let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));




console.log('\n');




let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));





console.log('\n');






let date = String(new Date());
console.log(date, (typeof date));





console.log('\n');




let arr =  [1,2,3,4,5];
console.log(arr.length, (typeof arr));


let arr1 =  String([1,2,3,4,5]);
console.log(arr1.length, (typeof arr1));








console.log('\n');
console.log('\n');







let i = 75;
console.log(i.toString());
console.log("Type of i is: " + (typeof i));
console.log("Type of i is: " + (typeof i.toString()));









console.log('\n');
console.log('\n');









let stri = Number("3434");
console.log(stri, (typeof stri));

let strj = Number("343d4");         // iske liye NaN aayega , means not a number
console.log(strj, (typeof strj));

let strk = Number(false);                 // true is 1 , and false is 0
console.log(strk, (typeof strk));

let strl = Number([1,2,3,4,5,6,7,8,9]);             // iske liye bhi NaN aayega , not a number
console.log(strl, (typeof strl));








console.log('\n');
console.log('\n');





  // parseInt se Integer (Number) mai convert hoo jega
let number = parseFloat('34.098');     // Iska type change hoo ke Float ban jega, ase hi parseInt bhi hota hai
console.log(number);
console.log(number.toFixed(2), (typeof number));      // .toFixed(), isme jitna number daalege utne hi decimal number dikhayega round of karke





console.log('\n');
console.log('\n');






//////////////////////////////////////////////////////////////////////////////////////////////







// Type coercion






let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);




// JavaScript mai agar hum number ko string mai concat karte hai too Joo number mai voo automatically string mai type cast hoo ke concat hoo jega

let mystr1 = "698";
let mynum1 = 34;

console.log(mystr1 + mynum1);
