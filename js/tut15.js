console.log('Welcome to tutorial 15');
// Children Parent and Traversing in DOM


console.log('\n');


let cont = document.querySelector('.no');
cont = document.querySelector('.container');

console.log(cont.childNodes);          // ye sab kuch btayega include new line and comment also
console.log(cont.children);         // ye only elements aur tags ko dikhayega  ( In most of the cases we use children)






let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);


// Node types
// 1  ->  for Element
// 2  ->  for Attribute
// 3  ->  for Text Node
// 8  ->  for Comment
// 9  ->   for document
// 10  ->  for docType



console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');








let container = document.querySelector('div.container');   // ye div lelege jiski class container hai
console.log(container);

console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);


console.log(container.children);
console.log(container.childElementCount); // Count of child elements



console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

