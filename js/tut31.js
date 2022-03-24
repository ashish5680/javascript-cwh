console.log('This is tutorial 31.js');
// ES6 Classes and Inheritance

console.log('\n');



// Class is just a blueprint


class Employee {

    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    // ab ye saare functions prototype mai jaayege
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2020 - this.experience;
    }


    static add(a, b){    // ye method mai bina class ka object banaye use kar sakta hu
        return a + b;
    }

}





class Programmer extends Employee{

    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);        // iska matlab iski parent class ka constructor call hoga
        this.language = language;
        this.github = github;
    }

    favourateLanguage(){
        if(this.language == 'python'){
            return "python";
        }
        else{
            return "JavaScript";
        }
    }

    static multiply(a, b){    // mai static method mai this ka use nahi kar sakta so that mai usse bahar se bhi access kar saku
        return a*b;
    }

}






// Note: Constructor voo function hota hai jab bhi object create hota hai 





let harry = new Employee("Harry", 56, "Division");
console.log(harry);
console.log(harry.joiningYear());

console.log(Employee.add(34, 5));





let rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420");
console.log(rohan);
console.log(rohan.favourateLanguage());
console.log(Programmer.multiply(5, 7));


console.log('\n');

console.log(Programmer.add(5, 8));
console.log(rohan.slogan());


