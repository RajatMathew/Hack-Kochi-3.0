var date = new Date();
setInterval( () => {
    var date = new Date();
    var h = date.getHours();
    var s = date.getMinutes();
    if(date.getHours() >= 13){h -= 12;}
    if(date.getMinutes() <=9){s = "0" + s.toString();}
    document.getElementById("timer").innerText =  h + ":" + date.getMinutes() + ":" + date.getSeconds() + " to go!";
}, 1000);



var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(seconds > 12)
  {
       seconds -= 12;
  }
  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s left!";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
  }
}, 1000);
