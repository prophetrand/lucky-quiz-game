

var timeLeft = 90;

var countdown;


// consider which function to put this inside of if necessary. Might be fine on the global scope but since countdown was initially declared on the global scope, i can mess with it from inside multiple different functions.
countdown = setInterval(function(){
timeLeft--;

}, 1000);