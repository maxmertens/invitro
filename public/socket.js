
let socket = io();
let active = 0;
var activeOld = 0;
let touchstart = false;

// When data is 'recieved' do something
socket.on('data', function(val){

    console.log(val);

    if (active === activeOld) {
        touchstart = false;
    } else {
        console.log('not the same');
        $('#Screensaver').addClass("hideScreensaver");
    }

    // Change the active state
    if (val == 1) {
        $('.menu1').addClass('menu-active');
        $('.menu2').removeClass('menu-active');
        $('.menu3').removeClass('menu-active');
        $('.menu4').removeClass('menu-active');

        $('.screen1').addClass('screen-active');
        $('.screen2').removeClass('screen-active');
        $('.screen3').removeClass('screen-active');
        $('.screen4').removeClass('screen-active');

    } else if (val == 2) {
        $('.menu2').addClass('menu-active');
        $('.menu1').removeClass('menu-active');
        $('.menu3').removeClass('menu-active');
        $('.menu4').removeClass('menu-active');

        $('.screen2').addClass('screen-active');
        $('.screen1').removeClass('screen-active');
        $('.screen3').removeClass('screen-active');
        $('.screen4').removeClass('screen-active');

    } else if (val == 3) {
        $('.menu3').addClass('menu-active');
        $('.menu1').removeClass('menu-active');
        $('.menu2').removeClass('menu-active');
        $('.menu4').removeClass('menu-active');

        $('.screen3').addClass('screen-active');
        $('.screen1').removeClass('screen-active');
        $('.screen2').removeClass('screen-active');
        $('.screen4').removeClass('screen-active');
    }  else if (val == 4) {
        $('.menu4').addClass('menu-active');
        $('.menu1').removeClass('menu-active');
        $('.menu2').removeClass('menu-active');
        $('.menu3').removeClass('menu-active');

        $('.screen4').addClass('screen-active');
        $('.screen1').removeClass('screen-active');
        $('.screen2').removeClass('screen-active');
        $('.screen3').removeClass('screen-active');
    }

});






// function screensaver() {
//     //Screensaver
//     var cnt = 0;


//     if (touchstart === true) {
        

//         6 s pause

//         -> show
        
        
//         setInterval(function(){ 
//                 console.log(touchstart);
//                 $('#Screensaver').removeClass("hideScreensaver");
                
            
//         }, 6000);

//     } 
// }

