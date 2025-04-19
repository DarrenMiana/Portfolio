const navLinks = document.querySelectorAll(".menu .nav-link");

navLinks.forEach(link => { link.addEventListener("click", () => $('.menu-btn').click());

});

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 100) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })


});

