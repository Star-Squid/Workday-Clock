//time-related variables
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var timeAsText = hours + " : " + minutes;

//out of hours title
if (hours >= 18){$("h1").text("stop working")};

//replace 15:00 on the bottom with the hour at loading
$(".currenthour").text(timeAsText);

//update bottom hour every second
function updateTime(){
    var currentTimeUpdate = new Date();
    var hoursUpdate = currentTimeUpdate.getHours();
    var minutesUpdate = currentTimeUpdate.getMinutes();
    var timeAsTextUpdate = hoursUpdate + " : " + minutesUpdate;

    $(".currenthour").text(timeAsTextUpdate);
}

setInterval(updateTime, 1000);
