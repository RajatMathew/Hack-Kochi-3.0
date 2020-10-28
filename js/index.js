var date = new Date();
setInterval( () => {
    var date = new Date();
    var h = date.getHours();
    if(date.getHours() >= 13){h -= 12;}
    document.getElementById("timer").innerText = "The clock is ticking! It's " + h + ":" + date.getMinutes() + ":" + date.getSeconds() + " right now.";
}, 1000);
