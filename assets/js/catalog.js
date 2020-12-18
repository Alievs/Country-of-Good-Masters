import '../styles/catalog.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import Filter from './modules/Filter';
import $ from 'jquery';



new Filter(document.querySelector('.js-filter'));

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
            min.value = Math.round(values[0]);
        }
        if (handle === 1 ){
            max.value = Math.round(values[1]);
        }
    });
    range.on('end', function (values, handle) {
        min.dispatchEvent(new Event('change'))
    });
}

$(document).ready(function () {

    /* -------------Elastic_Filter------------- */
    let elasticFilters = JSON.parse(
        document.querySelector('.el-filter').getAttribute('data-fill')
    );
    let el_form = document.querySelector('.js-filter-form');
    el_form.querySelectorAll('div.op-js').forEach(div => {
        let key = div.querySelector('label').innerHTML;

        if (elasticFilters[key]) {
            div.querySelector('.product-quantity').innerHTML = '('+ elasticFilters[key] +')';
        } else {
            div.classList.remove('option', 'op-hover');
            div.classList.add('option-dis');
        }
    });
    /* -------------Elastic_Filter-end------------- */
    /* -------------Price-Inputs------------- */
    window.Min = () => {
        let min = document.getElementById('min');
        let value = min.value.match(/\d+/)[0];
        console.log(min.max);
        if(parseInt(value) > parseInt(min.max)){
            min.value = min.max;
        }else if(parseInt(value) < parseInt(min.min)) {
            min.value = 13;
        } else {
            min.value = value;
        }
    };

    window.Max = () => {
        let max = document.getElementById('max');
        let value = max.value.match(/\d+/)[0];
        if(parseInt(value) > parseInt(max.max)){
            max.value = max.max;
        } else if(parseInt(value) < parseInt(max.min)) {
            max.value = max.min;
        } else {
            max.value = value;
        }
    };
    /* -------------Price-Inputs-end------------- */

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
});