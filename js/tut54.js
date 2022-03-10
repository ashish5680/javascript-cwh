console.log("This is tutorial 54");
// Alarm Clock in JavaScript




const alarmSubmit = document.getElementById('alarmSubmit');



// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);         // setAlarm is a function



var audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3');



// function to play the alarm ring tone
function ringBell() {
    audio.play();
}



// This function will run whenever alarm is set from the UI
function setAlarm(e) {

    e.preventDefault();
    
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();


    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);

    if(timeToAlarm >= 0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }

}
