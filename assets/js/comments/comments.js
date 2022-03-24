import $ from 'jquery';

$(document).ready(function() {
    var list = $(".list-comments .comment");
    var numToShow = 3; //сколько показывать элементов
    var button = $(".button-more");
    var numInList = list.length;
    list.hide();
    if (numInList < 4) {
        button.hide();
    }else {
        button.show()
    }
    list.slice(0, numToShow).show();
    button.click(function() {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });
    const starEls = document.querySelectorAll('.star.rating');
    starEls.forEach(star => {
        star.addEventListener('click', function(e) {
            let starEl = e.currentTarget;
            let rating = document.getElementById('comment_form_rating');
            starEl.parentNode.setAttribute('data-stars', starEl.dataset.rating);
            rating.value = parseInt(starEl.dataset.rating);
        });
    })

    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding');

// блокируем двойные нажатия
    let unlock = true;


// та же цифра что указана в свойстве transition для блокировки scroll'a
    const timeout = 800;

// вешаем событие на элементы(обьекты)
    if (popupLinks.length > 0) {
        for (let i = 0; i < popupLinks.length; i++) {
            const popupLink = popupLinks[i];
            popupLink.addEventListener('click', function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const currentPopup = document.getElementById(popupName);
                popupOpen(currentPopup);
                e.preventDefault();
            });
        }
    }

// функция для обьектов котрые popup будут закрывать (внутри popup'a)
    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let i = 0; i < popupCloseIcon.length; i++) {
            const el = popupCloseIcon[i];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

// открытие popup'a
    function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            // проверка для двойных popup'ов
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodylock();
            }

            currentPopup.classList.add('open');
            currentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup-content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

// передаём активный обьект и значение для блокирование scroll'a(true/false)
    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }

// скрываем scroll
    function bodylock() {
        // высчитываем разницу между шириной viewport'a(окна)
        // и шириной обьекта внутри него
        // для того чтобы получить ширину scroll'a
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

        // если есть fixed обьекты добавляем им тот же padding что и body
        // (class = lock-padding)
        if (lockPadding.length > 0) {
            for (let i = 0; i < popupCloseIcon.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = lockPaddingValue;
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnlock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let i = 0; i < lockPadding.length; i++) {
                    const el = lockPadding[i];
                    el.style.paddingRight = '0px';
                }
            }

            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

// полифилы
    (function () {
// проверяем поддержку
        if (!Element.prototype.closest){
            //    реализуем
            Element.prototype.closest = function (css) {
                var node = this;
                while(node){
                    if (node.matches(css)) return node;
                    else node = node.parentElement;
                }
                return null;
            };
        }
    })();
    (function () {
//    проверяем поддержку
        if (!Element.prototype.matches){
            //    определяем свойство
            Element.prototype.matches = Element.prototype.matchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ;

        }
    })();

});
