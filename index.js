
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

    //change gradient on main dome


    document.documentElement.style
    .setProperty('--timeasdegree', mainDomeDeg);

    //change gradient on small dome
    document.documentElement.style
    .setProperty('--minutesasdegree', smallDomeDeg);                                                  
};
  
//initialize the main event
updateTime();
setInterval(updateTime, 10000);

//this will change the themes
function setTheme (theme) {document.documentElement.className = theme};
//this ensures the egg is the default
setTheme('eggtheme');

//sliding effect for colour option tiles
$('.spin').on('click', function(){
    $('.spin-in').toggleClass('show2');
});

//dialogue popup
// $(function() {
//     // this initializes the dialog (and uses some common options that I do)
//     $("#dialog").dialog({
//       autoOpen : false, modal : true, show : "blind", hide : "blind"
//     });
  
//     // next add the onclick handler
//     $("#contactUs").click(function() {
//       $("#dialog").dialog("open");
//       return false;
//     });
//   });

$(document).ready(function () {
    $('#dialog').dialog({
        autoOpen: false,
        title: 'Basic Dialog'
    });
    $('#contactUs').click(function () {
        $('#dialog').dialog('open');
    });
});


//Custom Appointment button behaviour
$('.spin-app').on('click', function(){

    //obtain start and end time
    var userStartHour = window.prompt("Enter the appointment starting hour 9 - 17 (e.g. 15)");
    var userStartMinute = window.prompt("Enter the appointment starting minutes 0 - 59 (e.g. 30)");

    var userEndHour = window.prompt("Enter the appointment ending hour 9 - 17");
    var userEndMinute = window.prompt("Enter the appointment ending minutes 0 - 59");

    // convert time to degrees (userStart to appStart)
    var degFromUserHour = ((userStartHour - 9) * 20);
    var degFromUserMinute = userStartMinute / 3;
    var appStart = Math.floor(degFromUserHour + degFromUserMinute) + "deg";

    var degFromUserHour2 = ((userEndHour - 9) * 20);
    var degFromUserMinute2 = userEndMinute / 3;
    var appEnd = Math.floor(degFromUserHour2 + degFromUserMinute2) + "deg";


    //create gradient stops in appointment layer
    document.documentElement.style
    .setProperty('--app-start', appStart);

    document.documentElement.style
    .setProperty('--app-end', appEnd);
});
