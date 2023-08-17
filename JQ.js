const btn = document.querySelector('#btn');

function onClick () {
    /* Accessing an element by tag name */
    // $('elementTagName').action()
    // document.getElementByTagName('elementTagName')
    // $('div').css('background-color', 'orange');
    
    /* Accessing an element by id */
    // $('#elementId').action()
    // document.getElementById('#elementId')
    // $('#p1').css('font-style', 'italic');

    /* Accessing an element by classname */
    //$('.elementClassName').action()
    // document.getElementByClassName('.elementClassName')
    // $('.para').css('font-style', 'italic');

    // $('#div1,#div2').css('background-color', 'green');
    // jquery provides the ease to work on multiple attributes at the same time as shown
    // $('#div1, li').css('background-color', 'purple');
    // $('div  p').fadeToggle();
    // $('p:first').fadeToggle();
    $('li:even').fadeToggle();
}

btn.addEventListener('click', onClick);
