console.log("Ajax tutorial in one video");

console.log('\n');







// // PART 1




// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click', buttonClickHandler)

// function buttonClickHandler() {

//     console.log('You have clicked the fetchBtn');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     xhr.open('GET', 'harry.txt', true);       // true isiliye kiya kuki hum asunchronous request karna chahate hai
//     // GET request matlab ki hum bas URL dege aur hume bta dega ki URL ke andr kya hai 



//     // What to do on progress (optional)
//     xhr.onprogress = function(){        // ye function sirf progress ko track krne ke liye // kabhi spinner ya loader wagara lagana hai uske liye bhi use hota hai
//         console.log('On progress');
//     }



//     // jab bhi state change hoti hai too ye function chalta hai
//     // ye purana function hai but ab onload use karte hai voo new function hai
//     xhr.onreadystatechange = function () {         // Ready state code values in xhr    
//         console.log('ready state is ', xhr.readyState);
//     } 
//     // to know more baout it search Ready state code values in xhr in MDN docs
//     // // value -> state
//     // // 0 -> UNSENT
//     // // 1 -> OPENED
//     // // 2 -> HEADERS_RECEIVED
//     // // 3 -> LOADING
//     // // 4 -> DONE




//     // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200){       // 200 response code hota hai HTTP ka iska matlab hota hai response is OK
//             console.log(this.responseText)
//         }
//         else{
//             console.log("Some error occured")
//         }
//     }



//     // send the request
//     xhr.send();

//     console.log("We are done!");

// }

























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

















// Note: Passwords wagara get request se kabhi ni bhejne chaiye
//       hmesha passwords wagara post request se bhejn chaiye because of security











// Reference of dummy JSON data -> JSONplaceholder.com


// PART 1



let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {

    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();




    ///////////////////////////////////////////////////////////////


    // // Open the object   // USE this for GET Request
    //                  // this is fake json data (from internet)
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);       // true isiliye kiya kuki hum asunchronous request karna chahate hai
    // // GET request matlab ki hum bas URL dege aur hume bta dega ki URL ke andr kya hai 




    // USE THIS FOR POST REQUEST   // We use dummy Rest API example for post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');
    // POST ke andr hum URL dege aur kuch data bhi dege aur voo uss data ke mutabit mujhay response dega


    //////////////////////////////////////////////////////////////////



    // What to do on progress (optional)
    xhr.onprogress = function(){        // ye function sirf progress ko track krne ke liye // kabhi spinner ya loader wagara lagana hai uske liye bhi use hota hai
        console.log('On progress');
    }




    // ye purana function hai but ab onload use karte hai voo new function hai
    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
    // }


    


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){       // 200 response code hota hai HTTP ka iska matlab hota hai response is OK
            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }





    ////////////////////////////////////////////////////////////

    // // for GET Request
    // xhr.send();



    // send the request (for post request)
    params = `{"name":"test34sa45","salary":"123","age":"23"}`;   // ye hum data bhej re hai because post request mai data ko bhi bhejna hota hai
    xhr.send(params);


    /////////////////////////////////////////////////////////////


    console.log("We are done!");

}



















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


























// Part 3


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {

    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', true);


    // What to do when response is ready
    xhr.onload = function () {

        if(this.status === 200){

            let obj = JSON.parse(this.responseText);
            console.log(obj);

            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].name} </li>`;
            }
            list.innerHTML = str;

        }
        else{
            console.log("Some error occured")
        }
         
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

