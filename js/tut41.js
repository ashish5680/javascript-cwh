console.log("This is Tutorial 41");

// Arrow Functions in JavaScript



console.log("\n");



// Normal Regular Functions
// function ashish(){
//     console.log("This is the best person ever");
// }
// const ash = function (){
//     console.log("This is the best person ever");
// }

// ashish();
// ash();




// This is the ARROW FUNCTIONS
const me =  () => {
    console.log("This is the best person ever");
}

me();









// function returning something
const greet = function() {
    return "Good Morning"
}
console.log(greet());



const greeting = () => {
    return "Good Morning"
}
console.log(greeting());



// One liners do not require braces and return keyword
const greeting2 = () => "Good Morning 2";
console.log(greeting2());










console.log("\n");












// object return karvate waqt round braces dene jruri hai
const obj = () => ({name: "harry"});
console.log(obj());



// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramtere
const obj2 = name => "Good Morning " + name;
console.log(obj2("Ashish"));



// ek se jada argument mai arguments mai round braces lagane honge
const obj3 = (name, ending) => "Good Morning " + name + " " + ending;
console.log(obj3("Ashish", "bye"));