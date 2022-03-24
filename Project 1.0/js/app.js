 
console.log("Welcome to notes app. This is app.js");

console.log('\n');

showNotes();       // page reload hone pe saare notes dikh jege



// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(e) {

  let addTxt = document.getElementById("addTxt");

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));      // string mai isiliye convert kiya kuki local storage mai string mai hi set karna hota hai
  addTxt.value = "";                 // local storage mai set karne ke baad iski value ko blank kar dena hai
  
  console.log(notesObj);

  showNotes();

});




// Note : Local Storage ke andr string ke andr hi set karna padta hai thats why array ko string mai convert kar ke daalte hai local storage mai







// Function to show elements from localStorage
function showNotes() {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);          // ye humne notes ko array mai retrieve kar liya
  }

  let html = "";

  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });


  // note: ye button mai onclick ek attribute hota hai jisne function ko call kiya hua hai


  let notesElm = document.getElementById("notes");

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }

}













// Function to delete a note
function deleteNote(index) {

//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);        // splice phela argument leta hai start ki starting index kon si h and dusara argument ki kitne element remove karna chahate hai
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}




















// Search a Note
let search = document.getElementById('searchTxt');
                       // input matlab jase jase input karta rahuga vase vase input event fire hota rahega
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();

    // console.log('Input event fired!', inputVal);

    let noteCards = document.getElementsByClassName('noteCard');
    
    
    Array.from(noteCards).forEach(function(element){

        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";          // it means ye show hoga 
        }
        else{
            element.style.display = "none";         // it means ye show nahi hoga
        }
        // console.log(cardTxt);
    });

});









/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 