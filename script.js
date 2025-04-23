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
        if (this.scrollY > 1500) {
            $('.scroll-up-btn').addClass("lols");
        }else{
            $('.scroll-up-btn').removeClass("lols");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    var typed = new Typed ("#typed", {
        strings: ["Frontend Developer", "Freelancer", "Vlogger", "Youtuber"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    var typed = new Typed (".typing", {
        strings: ["Frontend Developer", "Freelancer", "Vlogger", "Youtuber"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },

            600:{
                items:2,
                nav:false
            },

            1000:{
                items: 3,
                nav: false
            }
        }
    })


});

