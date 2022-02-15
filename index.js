
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

    if (minutes < 5){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 10){
        $(".main-dome").addClass(".for5to10");     
    } else if (minutes < 15){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 20){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 25){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 30){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 35){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 40){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 45){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 50){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 55){
        $(".main-dome").addClass(".for5to10");
    } else if (minutes < 60){
        $(".main-dome").addClass(".for5to10");
    } else {
        console.log(minutes)
    };


//change gradient on small dome

}

setInterval(updateTime, 1000);