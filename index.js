
function updateTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var timeAsText = hours + " : " + minutes;
    var smallTimeAsText = hours + " : 0" + minutes;
    
//update bottom hour
    if (minutes < 10){
        $(".currenthour").text(smallTimeAsText);
    } else {$(".currenthour").text(timeAsText);
};

//out of hours title
    if (hours >= 18){$("h1").text("stop working")};

//change gradient on big dome

//change gradient on small dome
}

setInterval(updateTime, 1000);