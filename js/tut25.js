console.log('Tutorial 25 Exercise 2 JavaScript Soltion');

// Creating an Editable Div Exercise 2: Solution

console.log('\n');

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/






// Create a new Element
let divElem = document.createElement('div');


// Add text to that Element

let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode('This is my element. Click to edit');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);





// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding:23px;');





// Grab The main Container
let container = document.querySelector('.container');

let first = document.getElementById('myfirst');








// Insert the element before element with id first
container.insertBefore(divElem, first);


console.log(divElem, container, first);







// add event listener to the divElem
divElem.addEventListener('click', function () {

    // ye sirf tab chalega agar isse nahi listen kiya hai too
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){     // if we click first time then its length is zero
    let html = elem.innerHTML;        // iss divElem ki innerHTML copy hooo jegi html mai 
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }


    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });

});


