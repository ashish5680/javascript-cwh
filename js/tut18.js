console.log('This is tut 18');


console.log('\n');
console.log('\n');
console.log('\n');







let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);




function func1(e) {
    console.log("Thanks", e);
    e.preventDefault();             // agar koi default behavour hai aur usse bypass karna hai too we use this
    // humarabutton ka default behavour ye hota hai ki hum button click krege too form submit hoo jega, aur uss behaviour se bachne ke liye I want to use e.prevantDefault() function
}

function func2(e) {
    console.log("Thanks its a double click", e);
    e.preventDefault();
}

function func3(e) {
    console.log("Thanks its a mouse down ", e);
    e.preventDefault();
}













document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log('You entered class "no" of first Element')
});

document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log('You exited class "no" of first Element')
});









// document.querySelector('.container').addEventListener('mousemove', function(e){
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
//     console.log('You triggered mouse move event')
// });









// rgb ki value 0 to 255 mai se hoti hai