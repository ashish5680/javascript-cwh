console.log("This is tutorial 59")
// JavaScript Symbols
// Symbols are primitive

console.log("\n");


// Symbols ke aane se phle unique keys banana kaafi muskil hoo jata tha primitive datatype ki waje se, that's why symbol ko introduce kiya gaya

// jab bhi hum Symbol likhte hai too ye ek naya primitive generate karta hai



// Hum primitive datatypes se koi bhi new chiz nahi bana sakte
// iska ye solution hai ki hum joo har bar sybmol banate hai voo unique hota hai too hum uske andr object keys daal sakte hai



// Symbols
const sym1 =  Symbol('My identifier');
const sym2 =  Symbol('My identifier');
// ye sym1 and sym2 dono apne aap mai alag alag hai


console.log('Symbol is ', sym1);
console.log('Type of Symbol is : ', typeof sym1);
console.log(sym1 === sym2);



console.log("\n");



const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);





console.log("\n");
console.log("\n");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";


myObj["name"] = "Good boy"
myObj[4] = "Good int"


console.log(myObj);

console.log(myObj[k1]);
console.log(myObj[k2]);


// hum asa nahi kar sakte kuki asa karne se ye search krega k2 naamak string koo
console.log(myObj.k2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["k2"]


console.log("\n");


console.log(myObj["name"]);
console.log(myObj[4]);






console.log("\n");
console.log("\n");
console.log("\n");




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//  ->  Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}



console.log("\n");


// isme bhi symbols ignore hoo jege
console.log(JSON.stringify(myObj));     // it convert object to string
