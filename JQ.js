const btn = document.querySelector('#btn');

function func1 () {
    $("#img1").fadeToggle(3000);
}

btn.addEventListener('click', func1);
