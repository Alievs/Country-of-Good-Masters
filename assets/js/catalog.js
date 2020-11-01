import '../styles/catalog.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

import $ from 'jquery';


const slider = document.getElementById('price-slider');

if (slider){
    const min = document.getElementById('min');
    const max = document.getElementById('max');
    const minValue = parseInt(slider.dataset.min, 10);
    const maxValue = parseInt(slider.dataset.max, 10);
    const range = noUiSlider.create(slider, {
        start: [min.value || minValue, max.value || maxValue],
        connect: true,
        step: 1,
        range: {
            'min': minValue,
            'max': maxValue,
        }
    });
    range.on('slide', function (values, handle) {
        if (handle === 0 ){
            min.value = Math.round(values[0])
        }
        if (handle === 1 ){
            max.value = Math.round(values[1])
        }
    });
}

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
    // menu-collapsed
    /* -------------Slider-end------------- */
    /* -------------Filter------------- */
    let acc = document.getElementsByClassName("menu");
    let g;

    for (g = 0; g < acc.length; g++) {
        acc[g].addEventListener("click", function() {
            this.classList.toggle("opened");
            let panel = this.nextElementSibling.children;
            let menu = this.nextElementSibling;

            if (panel[0].classList.contains('closed')) {
                this.children[1].children[0].classList.remove('filter-arrowdn');
                this.children[1].children[0].classList.add('filter-arrowup');
                panel[0].classList.remove('closed');
                panel[0].style.maxHeight = panel[0].scrollHeight + "px";
                menu.style.paddingBottom = "20px";
            } else {
                this.children[1].children[0].classList.remove('filter-arrowup');
                this.children[1].children[0].classList.add('filter-arrowdn');
                panel[0].classList.add('closed');
                panel[0].style.maxHeight = "0px";
                menu.style.paddingBottom = "0px";
            }
        });
    }
    /* -------------Filter-end------------- */
    /* -------------Head-Product-Sort------------- */
    function getUrlFilter(option, value) {
        let query = window.location.search.substring(1);
        let vars = query.split('&');
        let url = location.protocol + '//' + location.hostname + location.pathname + '?';

        if (vars.length <= 1) {
            url = url + option + '=' + value;
            return url;
        }
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            // decodeURIComponent(value);
            if (i === 0){
                url = url + vars[i];
            }
            else if (pair[0] === option && pair[1] !== value) {
                url = url + '&' + option + '=' + value;
            }
            else {
                url = url + '&' + vars[i];
            }
        }
        return url;
    }
    function getSelectValue(sort_type, value){
        let url = window.location.href;

        if (!window.location.search){
            url = url + '?' + sort_type + '=' + value;
            window.location.replace(url);
        }
        else {
            let urls = getUrlFilter(sort_type, value);
            window.location.replace(urls);
        }
    }
    $('#head-sort').change(function () {
        let sort_value = $(this).find(":selected").val();
        getSelectValue('sort', sort_value);

    });

    $('#head-limit').change(function () {
        let sort_value = $(this).find(":selected").val();
        getSelectValue('limit', sort_value);

    });
    /* -------------Head-Product-Sort-end------------- */

});