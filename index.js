
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




//form for appointment times collection
const form  = document.getElementById('submit-time');

form.addEventListener('submit', (event) => {
    var getstart = form.elements['userStart'];
    var getend = form.elements['userEnd'];

    var start = getstart.value;
    var end = getend.value;

    console.log(start + " " + end);
});

//dialogue popup
// $(function(){
//     $("#obtain-time").on('click',function(e){
//         e.preventDefault();
//        $("#dialog-form").dialog();
//      });
//   });

//   $( "#obtain-time" ).button().on( "click", function() {
// dialog.dialog( "open" );
// });

$(function() {
  $( "#dialog-form" ).dialog({
    dialogClass: "no-close",
    autoOpen: false,
    modal: true,
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
 });
});

// $( function() {
//     var dialog, form,
 
//       emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
//       name = $( "#name" ),
//       email = $( "#email" ),
//       password = $( "#password" ),
//       allFields = $( [] ).add( name ).add( email ).add( password ),
//       tips = $( ".validateTips" );
 
//     // function updateTips( t ) {
//     //   tips
//     //     .text( t )
//     //     .addClass( "ui-state-highlight" );
//     //   setTimeout(function() {
//     //     tips.removeClass( "ui-state-highlight", 1500 );
//     //   }, 500 );
//     // }
 
//     // function checkLength( o, n, min, max ) {
//     //   if ( o.val().length > max || o.val().length < min ) {
//     //     o.addClass( "ui-state-error" );
//     //     updateTips( "Length of " + n + " must be between " +
//     //       min + " and " + max + "." );
//     //     return false;
//     //   } else {
//     //     return true;
//     //   }
//     // }
 
//     // function checkRegexp( o, regexp, n ) {
//     //   if ( !( regexp.test( o.val() ) ) ) {
//     //     o.addClass( "ui-state-error" );
//     //     updateTips( n );
//     //     return false;
//     //   } else {
//     //     return true;
//     //   }
//     // }
 
//     function submitHours() {
//       var valid = true;
//       allFields.removeClass( "ui-state-error" );
 
//       valid = valid && checkLength( name, "start", 1, 2 );
//       valid = valid && checkLength( email, "end", 1, 2 );
 
//       if ( valid ) {
//         // $( "#users tbody" ).append( "<tr>" +
//         //   "<td>" + name.val() + "</td>" +
//         //   "<td>" + email.val() + "</td>" +
//         //   "<td>" + password.val() + "</td>" +
//         // "</tr>" );
//         console.log('ok');
//         dialog.dialog( "close" );
//       }
//       return valid;
//     }
 
//     dialog = $( "#dialog-form" ).dialog({
//       autoOpen: false,
//       dialogClass: "no-close",
//       height: 400,
//       width: 350,
//       modal: true,
//       buttons: {
//         "Submit hours": submitHours,
//         Cancel: function() {
//           dialog.dialog( "close" );
//         }
//       },
//       close: function() {
//         form[ 0 ].reset();
//         allFields.removeClass( "ui-state-error" );
//       }
//     });
   
//     form = dialog.find( "form" ).on( "submit", function( event ) {
//       event.preventDefault();
//       submitHours();
      
//     });
 
//     $( "#obtain-time" ).button().on( "click", function() {
//       dialog.dialog( "open" );
//     });
//   } );


//Custom Appointment button behaviour
// $('.spin-app').on('click', function(){

//     //obtain start and end time with prompts
//     var userStartHour = window.prompt("Enter the appointment starting hour 9 - 17 (e.g. 15)");
//     var userStartMinute = window.prompt("Enter the appointment starting minutes 0 - 59 (e.g. 30)");

//     var userEndHour = window.prompt("Enter the appointment ending hour 9 - 17");
//     var userEndMinute = window.prompt("Enter the appointment ending minutes 0 - 59");

    // // convert time to degrees (userStart to appStart)
    // var degFromUserHour = ((userStartHour - 9) * 20);
    // var degFromUserMinute = userStartMinute / 3;
    // var appStart = Math.floor(degFromUserHour + degFromUserMinute) + "deg";

    // var degFromUserHour2 = ((userEndHour - 9) * 20);
    // var degFromUserMinute2 = userEndMinute / 3;
    // var appEnd = Math.floor(degFromUserHour2 + degFromUserMinute2) + "deg";


    // //create gradient stops in appointment layer
    // document.documentElement.style
    // .setProperty('--app-start', appStart);

    // document.documentElement.style
    // .setProperty('--app-end', appEnd);
// });
