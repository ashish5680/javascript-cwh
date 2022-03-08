console.log("Welcome to tutorial 24");
// Date Object : Date and Time in JS

console.log('\n');


let today = new Date();
console.log(today);
console.log(typeof today);
console.log(today.getTime());       // it tells the number of seconds from 1970




console.log('\n');
console.log('\n');





let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');     // MM/DD/YYYY
console.log(otherDate);




console.log('\n');




let a;

a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();

// a = otherDate.getTime();       // it tells the number of seconds from the date given
// a = otherDate.getMilliseconds();
// a = otherDate.getMonth();

console.log(a);




otherDate.setDate(23);
otherDate.setMonth(0);   // 0 matlab January
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);

console.log(otherDate);
 