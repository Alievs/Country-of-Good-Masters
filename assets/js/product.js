import '../styles/product.scss';

import './components/product_popup';


import $ from 'jquery';

$(document).ready(function(){

    //  gallery  Slider
    /* Индекс слайда по умолчанию */
    var slideIndex = 1;
    var popupSlideIndex = 0;
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
        let slides = document.getElementsByClassName("item");
        let dots = document.querySelectorAll(".gallery-sub_img");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        slides[slideIndex -1].style.display = "block";
        dots[slideIndex -1].classList.add('active');

        //popup слайдер
        popupSlideIndex = slideIndex;
        currentPopupSlide(popupSlideIndex);
    }
    $('.prev').click(function() { minusSlide() });
    $('.next').click(function(){ plusSlide() });

    $('.gallery-sub_item').click(function() {
        let n = $(this);
        let currentPos = parseInt(n.data('pos'));
        currentSlide(currentPos);
    });
    //  gallery  Slider-end

    // Popup Slider
    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function popupPlusSlide() {
        popupSlides(popupSlideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function popupMinusSlide() {
        popupSlides(popupSlideIndex -= 1);
    }

    /* Устанавливает текущий слайд */
    function currentPopupSlide(n) {
        popupSlides(popupSlideIndex = n);
    }
    /* Основная функция слайдера */
    function popupSlides(n) {
        let popSlides = document.getElementsByClassName("popup-image");

        if (n > popSlides.length) {
            popupSlideIndex = 1;
        }
        if (n < 1) {
            popupSlideIndex = popSlides.length;
        }
        for (let i = 0; i < popSlides.length; i++) {
            popSlides[i].style.display = "none";
        }
        popSlides[popupSlideIndex-1].style.display = "block";

    }
    $('.popup-prev').click(function() { popupMinusSlide() });
    $('.popup-next').click(function(){ popupPlusSlide() });
    // Popup Slider-end

    //desc - read more
    var descHeight = $('#desc').height();
    if (descHeight > 197){
        $('.read-next').css({display: 'block'});
        $('.read-next').on('click', function () {
            $('#desc').css({maxHeight: 'unset'});
            $('.read-next').css({display: 'none'});
        })
    }
    //desc-read more-----end

    // Related Slider
    var positionRelated = 0;
    var elementsInSlider = $("#slideR-row .card").length;

    if (elementsInSlider <= 6) {
        $('.next-slide').prop( "disabled", true );
        $('.prev-slide').prop( "disabled", true );
    }

    let positionalShift = elementsInSlider - 6;
    let row = $('#slideR-row');

    $('.next-slide').on('click', function () {
        positionRelated = positionRelated - 271;
        if (positionRelated < -271 * positionalShift) {
            positionRelated = 0;
        }
        row.css({left: positionRelated +'px'});
    });

    $('.prev-slide').on('click', function () {
        if (positionRelated === 0){
            positionRelated = -271 * positionalShift;
        } else {
            positionRelated = positionRelated + 271;
        }
        row.css({left: positionRelated +'px'});
    });

    // Related Slider-end
});