function handler () {
    const hide = function () {
        $('#img1').hide()
    }
    
    const show = function () {
        $('#img1').show();
    }

    const toggle = function () {
        $('#img1').toggle();
    }

    const fadeIn = function () {
        $('#img1').fadeIn(2000);
    }

    const fadeOut = function () {
        $('#img1').fadeOut(2000);
    }

    const fadeToggle = function () {
        $('#img1').fadeToggle(2000);
    }
    
    $('#btn1').click(hide);
    $('#btn2').click(show);
    $('#btn3').click(toggle);
    $('#btn4').click(fadeIn);
    $('#btn5').click(fadeOut);
    $('#btn6').click(fadeToggle);


}

$('document').ready(handler);