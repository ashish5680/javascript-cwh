console.log('We are at tut 6');

console.log('\n');



const name = 'Ashish';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);



console.log('\n');


// String Concatination 

let html;
html  = "<h1> this is heading</h1>" +
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);






console.log('\n');
console.log('\n');




console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(-4));       // ye last ke 4 de dega
console.log(html.slice(4))     // ye stating ke 4 chord ke baaki saare print kar dega
console.log(html.slice(0, 4))     // ye stating ke 4 de dega
console.log(html.split('>'));      // is se > is se string ke tut jegi aur array mai chale je ge tukde
console.log(html.replace('this', 'it'));







console.log('\n');
console.log('\n');





// Template Literals -> `

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

console.log(myHtml);            

document.body.innerHTML = myHtml;      // is se browser pe HTML likhi aa jegi




//   `  this is a backtik, we use this if we want to write some variable, and $ hum tab lagayege jab hum koi variable use krna chahate hai