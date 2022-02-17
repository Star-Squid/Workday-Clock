
//the "I do everything here" function
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
    if (hours >= 18){$("h1").text("stop working")}
    else if (hours < 9){$("h1").text("preparing for the day...")}
    else {$("h1").text("Workday Clock")};

    //convert time to degree of dome
    var degFromHour = ((hours - 9) * 20);
    var degFromMinute = minutes / 3;
    var mainDomeDeg = Math.floor(degFromHour + degFromMinute) + "deg";
    var smallDomeDeg = minutes * 3 + "deg";

    console.log("Main degrees:" + mainDomeDeg + " Small degrees:" + smallDomeDeg);

    //change gradient on main dome


    document.documentElement.style
    .setProperty('--timeasdegree', mainDomeDeg);

    //change gradient on small dome
    document.documentElement.style
    .setProperty('--minutesasdegree', smallDomeDeg);                                                  
};
                                                
updateTime();
setInterval(updateTime, 10000);