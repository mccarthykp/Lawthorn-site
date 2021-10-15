$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $("#nav").addClass("shadow");
    }
    else {
        $("#nav").removeClass("shadow");
    }
});

const emailInput = document.getElementById('email');
const emailButton = document.getElementById('submitButton');
document.addEventListener('input', onInput);

function onInput(e) {
    // if submit button is clicked, append file with input value
}