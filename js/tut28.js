console.log("This is tutorial 28");

console.log('\n');
console.log('\n');


// Object literal : Object.prototype se start karega
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}
console.log(obj);















// Note: We should never edit the Main Object.prototype
// and we cannot do this like: obj.protoptye isko change nahi kar sakte

////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('\n');
console.log('\n');
















// Make Obj with Constructor

// Phle iss constructor ka prototype banega phir uske andr joo main object hai uska
function Obj(givenName){
    this.name = givenName

    this.run = function(){
        console.log('Start run');
    }
}



// Note : We can only edit our made constructor prototype 

// ab agar prototype ko change karna chahate hai and if we want to add functions in prototype
// Here we add the functions in Obj Constructor Prototype
Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}


let obj2 = new Obj("Rohan Das");
console.log(obj2);



obj2.setName("ash");
console.log(obj2.getName());