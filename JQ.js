// Using normal javascript
// const btn = document.querySelector('#btn');
// const onClick = function () {
//     const img = document.querySelector('#img1');
//     img.style.width = '500px';
// }
// btn.addEventListener('click', onClick);

// Using jQuery
$('document').ready(function () {
    // Click events
    // const onClick = function () {
    //     $('#img1').css('width', '500px');
    // }
    // $('#btn').dblclick(onClick);

    // Mouse events
    const onMouseEnter = function () {
        $('#img1').css('width', '500px');
    };
    // $('#img1').mouseenter(onMouseEnter);

    const onMouseLeave = function () {
        $('#img1').css('width', '250px');
    };
    // $('#img1').mouseleave(onMouseLeave);

    $('#img1').hover(onMouseEnter, onMouseLeave);
})
