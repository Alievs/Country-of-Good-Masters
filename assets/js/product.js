import '../styles/product.scss';

import IMask from 'imask';
import './components/product_popup';


import $ from 'jquery';

$(document).ready(function(){
    for ( let i = 0; i < 1; i++ ) {
        document.getElementById("addViewed").click();
    }
    let mask = IMask(document.getElementById('one_click_order_phone_number'),
        {
            mask: '+{38}(000) 000-00-00',
            lazy: false
        });

    $('#order-form').submit(function(e) {
        e.preventDefault();
        let form = $(this);
        let error = document.getElementById('form-error');

        if (mask.value.replace(/[ +()_-]/g, '').length >= 12) {
            error.innerHTML = '';
            $.ajax({
                type: "POST",
                url: form.attr('action'),
                data: form.serialize(),
                success: function() {
                    let form = document.querySelector('.order-group');
                    let qty = form.children.length;
                    for (let i = 0; i < qty; i++) {
                        form.children[i].style.display = 'none';
                    }
                    form.innerHTML = '<div class="alert-success alert">Спасибі! Наш менеджер зв\'яжеться з Вами найближчим часом.</div>';
                }
            })
        } else {
            error.innerHTML = '<li>Введіть телефон</li>';
        }

    });
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
    if (descHeight > 194){
        $('.read-next').css({display: 'block'});
        $('.read-next').on('click', function () {
            $('#desc').css({maxHeight: 'unset'});
            $('.read-next').css({display: 'none'});
        })
    }

    var descHeightBody = $('#desc-body').height();
    if (descHeightBody > 275){
        $('.read-next-body').css({display: 'block'});
        $('.read-next-body').on('click', function () {
            $('#desc-body').css({maxHeight: 'unset'});
            $('.read-next-body').css({display: 'none'});
        })
    }

    var descHeightDignity = $('#desc-dignity').height();
    if (descHeightDignity > 69){
        $('.read-next-dignity').css({display: 'block'});
        $('.read-next-dignity').on('click', function () {
            $('#desc-dignity').css({maxHeight: 'unset'});
            $('.read-next-dignity').css({display: 'none'});
        })
    }

    var descHeightShortcomings = $('#desc-shortcomings').height();
    if (descHeightShortcomings > 69){
        $('.read-next-shortcomings').css({display: 'block'});
        $('.read-next-shortcomings').on('click', function () {
            $('#desc-shortcomings').css({maxHeight: 'unset'});
            $('.read-next-shortcomings').css({display: 'none'});
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

    //stars rating
    const starEls = document.querySelectorAll('.star.rating');
    starEls.forEach(star => {
        star.addEventListener('click', function(e) {
            let starEl = e.currentTarget;
            let rating = document.getElementById('comment_form_rating');
            starEl.parentNode.setAttribute('data-stars', starEl.dataset.rating);
            rating.value = parseInt(starEl.dataset.rating);
        });
    })
    // const loadmore = document.querySelector('#loadmore');
    // let currentItems = 3;
    // loadmore.addEventListener('click', (e) => {
    //     const elementList = [...document.querySelectorAll('.list-comments .comment')];
    //     for (let i = currentItems; i < currentItems + 3; i++) {
    //         if (elementList[i]) {
    //             elementList[i].style.display = 'block';
    //         }
    //     }
    //     currentItems += 2;
    //
    //     // Load more button will be hidden after list fully loaded
    //     if (currentItems >= elementList.length) {
    //         event.target.style.display = 'none';
    //     }
    // });

});