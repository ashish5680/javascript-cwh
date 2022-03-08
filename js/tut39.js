console.log("This is tutorial 39");

console.log('\n');

// Promises Basics, Promise.then() & Promise.catch()


// Promise: Best tutorial on promises
// -resolve
// -reject
// -pending  (jab chal raha hai kaam too usse pending state mai bolege)



// Hum promises ko call back function ke substitue ke taur pe istamal karte hai




function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 4000);
    });
}





func1()
    .then(function(){
    console.log("Ashish: Thanks for resolving")
    })
    .catch(function(error){
    console.log("Ashish: Very bad bro. Reason: " + error)
    });