$(document).ready(function () {

    /* -------------Slider------------- */
    /* Индекс слайда по умолчанию */
    var slideIndex = 1;
    var slideInterval = 4000;
    var switchInterval = setInterval(plusSlide, slideInterval);

    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }
    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);
    }
    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    /* Основная функция слайдера */
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("slider-dots_item");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

    }
    $('.prev').click(function (e) {
        minusSlide()
    });
    $('.next').click(function (e) {
        plusSlide()
    });
    $('.slider-dots_item').click(function (e) {
        let n = $(this);
        let currentPos = parseInt(n.data('pos'));
        currentSlide(currentPos);
    });
    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(plusSlide, slideInterval);
    });
    /* -------------Slider-end------------- */

});