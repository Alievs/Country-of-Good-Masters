const sideNavLinks = document.querySelectorAll('.sidenav-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

// блокируем двойные нажатия
let unlock = true;


// та же цифра что указана в свойстве transition для блокировки scroll'a
const timeout = 500;

// вешаем событие на элементы(обьекты)
if (sideNavLinks.length > 0) {
    for (let i = 0; i < sideNavLinks.length; i++) {
        const sideNavLink = sideNavLinks[i];
        sideNavLink.addEventListener('click', function (e) {
            const sideNavName = sideNavLink.getAttribute('href').replace('#', '');
            const currentSideNav = document.getElementById(sideNavName);
            sideNavOpen(currentSideNav);
            e.preventDefault();
        });
    }
}

// функция для обьектов котрые popup будут закрывать (внутри popup'a)
const sideNavCloseIcon = document.querySelectorAll('.close-nav');
if (sideNavCloseIcon.length > 0) {
    for (let i = 0; i < sideNavCloseIcon.length; i++) {
        const el = sideNavCloseIcon[i];
        el.addEventListener('click', function (e) {
            sideNavClose(el.closest('.side-nav'));
            e.preventDefault();
        });
    }
}

// открытие popup'a
function sideNavOpen(currentSideNav) {
    if (currentSideNav && unlock) {
        const popupActive = document.querySelector('.side-nav.open');
        // проверка для двойных popup'ов
        if (popupActive) {
            sideNavClose(popupActive, false);
        } else {
            bodylock();
        }

        currentSideNav.classList.add('open');
        currentSideNav.addEventListener('click', function (e) {
            if (!e.target.closest('.side-nav-content')) {
                sideNavClose(e.target.closest('.side-nav'));
            }
        });
    }
}

// передаём активный обьект и значение для блокирование scroll'a(true/false)
function sideNavClose(popupActive, doUnlock = true) {
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
        for (let i = 0; i < sideNavCloseIcon.length; i++) {
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

let sideItem = document.getElementsByClassName("menu-cat_link");
let g;

for (g = 0; g < sideItem.length; g++) {
    sideItem[g].addEventListener("click", function() {
        this.classList.toggle("opened");
        let panel = this.nextElementSibling.children;
        let menu = this.nextElementSibling;

        if (panel[0].classList.contains('closed')) {
            this.children[1].children[0].classList.remove('filter-arrowdn');
            this.children[1].children[0].classList.add('filter-arrowup');
            panel[0].classList.remove('closed');
            // panel[0].style.maxHeight = panel[0].scrollHeight + "px";
            panel[0].style.height = "auto";
            menu.style.paddingBottom = "20px";
            menu.classList.add('cat_hei');
        } else {
            this.children[1].children[0].classList.remove('filter-arrowup');
            this.children[1].children[0].classList.add('filter-arrowdn');
            panel[0].classList.add('closed');
            // panel[0].style.maxHeight = "0px";
            panel[0].style.height = "0px";
            menu.style.paddingBottom = "0px";
            menu.classList.remove('cat_hei');
        }
    });
}

