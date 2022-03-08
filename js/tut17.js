console.log("This is tutorial 17 on events");
// Events and Event Object in JavaScript

console.log('\n');
console.log('\n');



                                                    // event,    function and function ke argument mai event ka object hota hai
document.getElementById("heading").addEventListener("click", function(e) {
  
  let variable;
  console.log("You have clicked the heading");

  console.log(e);




  console.log('\n');



  // e.target ek element deta hai ab uss element pe element ki kuch bhi functions properties run kar sakte hai 

  variable = e.target;
  console.log(variable);


  variable = e.target.className;
  variable = e.target.classList;

  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;          // ye x axis pe position btaayega ki kaha click kiya hai element ke relatively
  variable = e.offsetY;          // ye y axis pe position btaayega ki kaha click kiya hai element ke relatively
 
  variable = e.clientX;          // ye clientX pure browser window ke hisab se btate hai ki kaha click kiya
  variable = e.clientY;          // ye clientY pure browser window ke hisab se btate hai ki kaha click kiya


  console.log(variable);


  // jse hi click krege vase hi redirect kar jega iss page pe
  //   location.href = '//codewithharry.com'

});












// click ke alava aur bhi kaafi saare events hote hai like mouseHover and many more