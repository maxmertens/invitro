
let socket = io();
let active = 0;

// When data is 'recieved' do something
socket.on('data', function(val){
    console.log(val);
    console.log(active);




    // Logic for the active state
    if (val === 'up') {
        console.log('up');

        if (active === 2) {
            active = 0;
        } else {
            active++;
        } 
    } else if (val === 'down') {
        console.log('down');

        if (active === 0) {

            active = 2;
        } else {
            active--;
        } 
    } 

    // Change the active state
    if (active == 0) {
        $('.menu1').addClass('menu-active');
        $('.menu2').removeClass('menu-active');
        $('.menu3').removeClass('menu-active');

        $('.screen1').addClass('screen-active');
        $('.screen2').removeClass('screen-active');
        $('.screen3').removeClass('screen-active');

    } else if (active == 1) {
        $('.menu2').addClass('menu-active');
        $('.menu1').removeClass('menu-active');
        $('.menu3').removeClass('menu-active');

        $('.screen2').addClass('screen-active');
        $('.screen1').removeClass('screen-active');
        $('.screen3').removeClass('screen-active');

    } else if (active == 2) {
        $('.menu3').addClass('menu-active');
        $('.menu1').removeClass('menu-active');
        $('.menu2').removeClass('menu-active');

        $('.screen3').addClass('screen-active');
        $('.screen1').removeClass('screen-active');
        $('.screen2').removeClass('screen-active');
    }
});