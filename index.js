//out of hours title
if (hours >= 18){$("h1").text("stop working")};

//time-related variables
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var timeAsText = hours + " : " + minutes;


// var currentHour = document.getElementsByClassName("currenthour")[0];

// console.log(currentHour);

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

//replace 15:00 on the bottom with the hour at loading
$(".currenthour").text(timeAsText);




// setInterval(updateTime, 1000);
// setInterval(addSeconds, 1000);