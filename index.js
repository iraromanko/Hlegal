
$(document).ready(function(){

    $('.slider').slick(
        {
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToShow:1,
        }
    );

    $('.anchor').on('click', function (event) {
        event.preventDefault();
        const id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });  /*для плавного перехода по ссылкам */

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.mobile-menu');
    let body = document.querySelector('body');
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('overlay-active');
    })
});

function onShadowClick() {
    $('.publications-lists-wrapper').toggleClass('opened');
}

function closeMobileMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.querySelector('.menu-btn').classList.toggle('active');
    document.querySelector('body').classList.toggle('overlay-active');
}
