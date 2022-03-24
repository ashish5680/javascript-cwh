console.log("This is Tut 42");
// Fetch API in JS
// This is new standard, it is modern JS
// fetch is asynchronous



console.log("\n");



// button with id content
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");













// // Part 1:

// function getData(){

//     console.log("Started getData");

//     url = "harry.txt";

//     // jab bhi fetch API use hoti hai doo bar .then use karte hai  -> ek bar resonse.text le ke aana hai and dusari bbar data leke aana hai
//     fetch(url)                // fetch is asynchronous 
//         .then((response) => {
//             console.log("Inside first then");
//             console.log(response.text);
//             return response.text();    // ye bhi promise return krega isko handel krne ke liye bhi dubara .then lagana hoga
//         })
//         .then((data) => {
//             console.log("Inside second then");
//             console.log(data);
//         })

// }





///////////////////////////////////////////////////////////








// Part 2:


// Note: fetch uses get request by default

function getData(){

    console.log("Started getData");

    url = "https://api.github.com/users";

    // jab bhi fetch API use hoti hai doo bar .then use karte hai  -> ek bar resonse.text le ke aana hai and dusari bbar data leke aana hai
    fetch(url)                // fetch is asynchronous 
        .then((response) => {
            console.log("Inside first then");
            return response.json();    // agar mai chahata hu ki ye mujhay object ki form mai dikhaye too use response.json   // json use karte hai too parse kar deta hai
        })
        .then((data) => {
            console.log("Inside second then");
            console.log(data);
        })

}






////////////////////////////////////////////////////////







// console.log("Before getData");
// getData();
// console.log("After getData");






































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




console.log("\n");
console.log("\n");















function postData(){

    url = "https://reqres.in/api/users";

    data = '{"name": "jatin", "job": "leader"}';

    params ={
        method: 'post',
        headers: {                  // kis trah se data aane waala hai
            'Content-Type' : 'application/json'
        },
        // body: JSON.stringify(data)       // is se agar data object hai voo string mai convert hoo jega
        body: data   // data already ek string hai too JSON.stringify likhne ki jrut nahi hai
    }



    // post mai fetch API url ke sath parameters bhi leti hai
    fetch(url, params)                // fetch is asynchronous 
        .then((response) => {
            return response.json();    // agar mai chahata hu ki ye mujhay object ki form mai dikhaye too use response.json   // json use karte hai too parse kar deta hai
        })
        .then((data) => {
            console.log(data);
        })

}




console.log("Before POST data");
postData();
console.log("After POST data");








