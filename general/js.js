  // Set the date we're counting down to
  var countDownDate = new Date("June 30, 2024 15:00:00").getTime();
  // Update the countdown every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the countdown date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("number1").innerHTML = days;
    document.getElementById("number2").innerHTML = hours;
    document.getElementById("number3").innerHTML = minutes;
    document.getElementById("number4").innerHTML = seconds;
    // If the countdown is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);