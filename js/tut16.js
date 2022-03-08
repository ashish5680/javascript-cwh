console.log('this is tut 16');

// Create Remove and Replacing Elements



console.log('\n\n');




// CREATING

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);



// Add a class name and id name to the li element
element.className = 'childul';
element.id = 'createdLi';
                      //key    //value
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';


console.log(element);


 
// How to fit this in DOM
let ul = document.querySelector('ul.this');
ul.appendChild(element);

console.log(ul);

console.log(element);








////////////////////////////////////////////////////////////////////////////////////////////


console.log('\n');
console.log('\n');








// REPLACING

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';

let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);


// Replace element with elem2
element.replaceWith(elem2);

console.log(elem2);




let myul = document.getElementById('myul');

 // jo replace karna hai use phle likhna hai aur jis se replace karna hai voo baad mai likhna hai
myul.replaceChild(element, document.getElementById('fui'));

console.log(myul);











////////////////////////////////////////////////////////////////////////////////////////////








console.log('\n');
console.log('\n');









// REMOVING

myul.removeChild(document.getElementById('lui'));





let pp = elem2.getAttribute('class');
console.log(pp);


let pr = elem2.hasAttribute('href');    // ye true ya false return karega btayega ki href name ka attribte hai ki nahi
elem2.removeAttribute('id');            // ye id wala attribute remove kar dega
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);













// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"
