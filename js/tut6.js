console.log('We are at tut 6');
// Strings: Properties, Methods and Template Literals in JS


console.log('\n');



const name = 'Ashish';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);            // ye + operator bas string concatination karta hai



console.log('\n');


// String Concatination 

let html;
html  = "<h1> this is heading</h1>" +
        "<p> this is My para</p>";

html = html.concat('this', ' str2');        // iss concat method mai age kitni bhi string de sakte hai
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
console.log(html.substring(1,6));         // ye 1 se le kar 5 tak ki substring de ga
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