
// const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24;

// let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
//     x = setInterval(function() {   
//     let now = new Date().getTime(),
//     	distance = countDown - now;
//     document.getElementById('days').innerText = Math.floor(distance / (day)),
//         document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
//         document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
//         document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
// }, second);

//------- makeTimer js --------//  
function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date(jQuery('#timer').data('end'));
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    jQuery("#days").html(days);
    jQuery("#hours").html(hours);
    jQuery("#minutes").html(minutes);
    jQuery("#seconds").html(seconds);

  }

  setInterval(function () {
    makeTimer();
  }, 1000);
