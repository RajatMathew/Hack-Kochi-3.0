var date = new Date();
setInterval( () => {
    var date = new Date();
    var h = date.getHours();
    var s = date.getMinutes();
    if(date.getHours() >= 13){h -= 12;}
    if(date.getMinutes() <=9){s = "0" + s.toString();}
    document.getElementById("timer").innerText =  h + ":" + date.getMinutes() + ":" + date.getSeconds() + " to go!";
}, 1000);
