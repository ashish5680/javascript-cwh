console.log("This is tutorial 39b");

// Promises Basics, Promise.then() & Promise.catch()


console.log("\n");



// .then ke andr joo function hota hai voo resolve wala hota hai
// .catch wala joo function hai voo reject wala hota hai




// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 5000);
    });
}





function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 3000);
}







let newStudent = { name: "Sunny", subject: "Python" };








enrollStudent(newStudent)
    .then(function() {
        getStudents();
    })
    .catch(function () {
        console.log("Some error occured");
    });


// or we can write it in this type also


// enrollStudent(newStudent)
//     .then(getStudents)
//     .catch(function () {
//         console.log("Some error occured");
//     });






// // getStudents();








// Node:
// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
