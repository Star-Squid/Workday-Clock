
//all automatic time-based behaviour
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

//change themes
function setTheme (theme) {document.documentElement.className = theme};

//ensure that 'egg' is the default theme
setTheme('eggtheme');

//sliding effect for colour option tiles
$('.spin').on('click', function(){
    $('.spin-in').toggleClass('show2');
});

//dialog popup
$(function() {
  $( "#dialog-form" ).dialog({
    dialogClass: "no-close",
    autoOpen: false,
    modal: true,
    hide: true,
    closeOnEscape: true,
    buttons: [
      {
        text: "close",
        click: function() {
          $( this ).dialog( "close" );
        }
      }
    ]
  });
  $( "#obtain-time" ).click(function() {
    $( "#dialog-form" ).dialog( "open" );

    //on 'submit' prevent all data disappearing, just close the dialog 
    appForm.addEventListener("submit", function(event){
    event.preventDefault();
    $( "#dialog-form" ).dialog( "close" );
  })

 });
});


//form to submit appointment time
var appForm = document.getElementById('submit-time');

appForm.addEventListener('submit', (event) => {
    var start = appForm.elements['userStart'].value;
    var end = appForm.elements['userEnd'].value;

    //extract separate hours and minutes from user submission
    var separateStart = start.split(':');
    var separateEnd = end.split(':');

    var userStartHour = separateStart[0];
    var userStartMinute = separateStart[1];

    var userEndHour = separateEnd[0];
    var userEndMinute = separateEnd[1];

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