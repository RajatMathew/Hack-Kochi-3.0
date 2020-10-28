var date = new Date();
setInterval( () => {
    var date = new Date();
    document.getElementById("timer").innerText = "The clock is ticking! It's " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " right now.";
}, 1000);
