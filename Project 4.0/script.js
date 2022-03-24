console.log("This is project 4");
// Form Validation using Regular Expression

console.log("\n");



const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validEmail = false;
let validPhone = false;
let validUser = false;



// ye hum isiliye kar re hai taaki initially space naa aaye
$('#failure').hide();
$('#success').hide();




// console.log(name, email, phone);





// ^ means must start with
// $ means must end with



// agar name id ke input tag ke bahar click krege too blur event chalega

name.addEventListener('blur', ()=>{
    console.log("name is blurred");

    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;             // ^[a-zA-Z] iska matlab first character jooo hoo voo alphabet hoo   and end with ([0-9a-zA-Z]){2,10}$ because we write $ at the end
    let str = name.value;
    console.log(regex, str);

    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');          // Note: ye is-invalid bootstrap ki form validation ki class hai
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
});






email.addEventListener('blur', ()=>{

    console.log("email is blurred");

    // Validate email here
               //   _  -  .  0-9   a-z  A-Z   ye sab accepted hai   and + means one or more of these
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);

    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});








phone.addEventListener('blur', ()=>{

    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);

    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
});









let submit = document.getElementById('submit');


submit.addEventListener('click', (e)=>{

    e.preventDefault();        // is se form submit karne ke baad page reload nahi hoga

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');

        success.classList.add('show');
        // failure.classList.remove('show');

        //jQuery Methods
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');

        failure.classList.add('show');
        // success.classList.remove('show');

        //jQuery Methods
        // $('#success').alert('hide');      
        $('#success').hide();
        $('#failure').show();
    }

});
