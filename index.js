//time-related variables
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var timeAsText = hours + " : " + minutes;

//out of hours title
if (hours >= 18){$("h1").text("stop working")};

//replace 15:00 on the bottom with the hour at loading
$(".currenthour").text(timeAsText);

//a function that will update bottom hour
function updateTime(){
    // var currentTime = new Date()
    // var hours = currentTime.getHours()
    // var minutes = currentTime.getMinutes()
    // if (minutes < 10){
    //     minutes = "0" + minutes
    // }
    // var t_str = hours + ":" + minutes + " ";
    // if(hours > 11){
    //     t_str += "PM";
    // } else {
    //     t_str += "AM";
    // }
}

//call an update for bottom hour every second
// setInterval(updateTime, 1000);
// setInterval(addSeconds, 1000);