console.log("This is tutorial 37");

// Call Back Function yani function ke andr function

// Call back functions synchronously bhi hoo sakte hai asynchronously bhi hoo sakte hai
// synchronous functions -> forEach loop
// asynchronous functions -> setTimeOut , fetch functions


console.log('\n');


// Here, I micic the server like response
// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
];
















// // Part 1


// // yaha setTimeOut isiliye use kiya kuki jase hi hum server pe request bhejege too voo kuch time legi ab let say voo 8 second legi too humne apne setTimeOut mai 8 sec. kaa tym dedege taaki voo 8 sec. baad chale

// function enrollStudent(student){
//     // ab ye kaam asynchronously hoga
//     setTimeout(function() {           // setTimeout kheta hai ki aap jo kar rahe hai vo karte rahe mai iske andr kaa saman luga background mai 8 second baad kuki iske end mai 8 sec. likha hai
//         students.push(student);
//         console.log("Student has been enrolled");
//         // callback();
//     }, 8000);   // 1 second baad saman luga, matlab abhi se 1 sec. baad ye function chalega
// }




// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);          //  ye function 5 sec. baad chalega
// }




// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);
// getStudents();




























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





































// Part 2


// yaha setTimeOut isiliye use kiya kuki jase hi hum server pe request bhejege too voo kuch time legi ab let say voo 8 second legi too humne apne setTimeOut mai 8 sec. kaa tym dedege taaki voo 8 sec. baad chale

function enrollStudent(student, callback){
    // ab ye kaam asynchronously hoga
    setTimeout(function() {           // setTimeout kheta hai ki aap jo kar rahe hai vo karte rahe mai iske andr kaa saman luga background mai 8 second baad kuki iske end mai 8 sec. likha hai
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 8000);   // 1 second baad saman luga, matlab abhi se 1 sec. baad ye function chalega
}




function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);          //  ye function 5 sec. baad chalega
}




let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
getStudents();



