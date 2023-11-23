// sticky navbar
var navbar = document.getElementById('navbar');
var navbarHeight = $('#navbar').height();

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// scroll suave
$('a.nav-link').on('click', function(event) {
    event.preventDefault();

    var target = $(this.hash);

    $('html, body').animate({
        scrollTop: target.offset().top - navbarHeight -30
    }, 500);
});


