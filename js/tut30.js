console.log("This is tutorial 30");
//Prototype inheritance in javascript

console.log('\n');
console.log('\n');




const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}





// // This creates harry object
// let harry = Object.create(proto);
// harry.name = "harry";
// harry.role = "Programmer";
// harry.changeName("Harry2")
// console.log(harry);


// Alternative syntax


// This also creates harry object
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Harry2")
console.log(harry1)











/////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');








// ES6 mai claases ka concept aaya baad mai phle inheritance ka joo concept tha voo prototype ki help se hum inherit karte the ek object se dusare object ke andr






// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}




// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}


// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj);
console.log(harryObj.slogan())


console.log('\n');



// Programmer
function Programmer(name, salary, experience, language) {
                 // iska joo first argument hai this iska matlab hai iss constructor ke context mai name, salary and experience de doo
    Employee.call(this, name, salary, experience);           // mai programmer ko inherit karne jaa raha hu Employee se
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;



let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);


