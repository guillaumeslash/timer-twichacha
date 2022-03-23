// Do calculation of remaining seconds before 8am only between 7am and 8am everyday

// get current time
const currentTime = new Date();
let timer = 600;

// If it's 7:XX am
if (currentTime.getHours() === 7) {
  timer = ((60 - currentTime.getMinutes()) * 60) - currentTime.getSeconds();
}

document.getElementById("timer").innerHTML = "XX:XX";

const interval = setInterval(function() {
   if (timer > 0) {
      timer--;
      document.getElementById("timer").innerHTML = toTime(timer).substring(3);
   }
   else {
      clearInterval(interval);
   }
}, 1000);


const addMins = (mins) => {
  timer = timer + 60*mins;
}

const removeMins = (mins) => {
  if (timer > 60) {
    timer = timer - 60*mins;
  }

}

const toTime = (seconds) => {
   var date = new Date(null);
   date.setSeconds(seconds);
   return date.toISOString().substr(11, 8);
}
