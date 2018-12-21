
let socket = io();
let active = 0;
var activeOld = 0;
let touchstart = false;
// When data is 'recieved' do something

socket.on('data', function(val){
    // console.log(val);
    // console.log(active + ":" + activeOld);


    // Logic for the active state
    if (val < 255) {
        active = 3;
    } else if (val > 255 && val < 511) {
        active = 2;
    } else if (val > 511 && val < 767) {
        active = 1;
    } else if (val > 767) {
        active = 0;
    }



    if (active === activeOld) {
        touchstart = false;
        console.log('same');

    } else {
        console.log('not the same');
        $('#Screensaver').addClass("hideScreensaver");
    }

     activeOld = active;

    


    // Change the active state
    if (active == 0) {
        $('.menu1').addClass('menu-active');
        $('.menu2').removeClass('menu-active');
        $('.menu3').removeClass('menu-active');
        $('.menu4').removeClass('menu-active');

        $('.screen1').addClass('screen-active');
        $('.screen2').removeClass('screen-active');
        $('.screen3').removeClass('screen-active');
        $('.screen4').removeClass('screen-active');

    } else if (active == 1) {
        $('.menu2').addClass('menu-active');
        $('.menu1').removeClass('menu-active');
        $('.menu3').removeClass('menu-active');
        $('.menu4').removeClass('menu-active');

        $('.screen2').addClass('screen-active');
        $('.screen1').removeClass('screen-active');
        $('.screen3').removeClass('screen-active');
        $('.screen4').removeClass('screen-active');

    } else if (active == 2) {
        $('.menu3').addClass('menu-active');
        $('.menu1').removeClass('menu-active');
        $('.menu2').removeClass('menu-active');
        $('.menu4').removeClass('menu-active');

        $('.screen3').addClass('screen-active');
        $('.screen1').removeClass('screen-active');
        $('.screen2').removeClass('screen-active');
        $('.screen4').removeClass('screen-active');
    }  else if (active == 3) {
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

