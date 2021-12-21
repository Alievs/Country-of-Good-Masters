import {Flipper, spring} from 'flip-toolkit';

/**
 * @property {HTMLElement} pagination
 * @property {HTMLElement} content
 * @property {HTMLElement} sorting
 * @property {HTMLFormElement} form
 */
export default class Filter {


    /**
     * @param {HTMLElement|null} element
     */
    constructor(element) {
        if (element === null){
            return
        }

        this.pagination = element.querySelector('.js-filter-pagination');
        this.content = element.querySelector('.js-filter-content');
        this.sorting = element.querySelector('.js-filter-sorting');
        this.form = element.querySelector('.js-filter-form');

        this.main = element;
        this.bindEvents();
    }

    /**
     * Add the behaviors to the different elements
     */
    bindEvents () {

        this.sorting.addEventListener('change', e => {
            if (e.target.tagName === 'SELECT'){
                let sort = this.form.querySelector('#' + e.target.getAttribute('id').split('-')[1] );
                sort.value = e.target.value;
                sort.dispatchEvent(new Event('change'));
            }
        });

        this.form.querySelectorAll('input').forEach(input => {
            input.addEventListener('change', this.loadForm.bind(this));
        });
    }

    async loadForm () {
        const data = new FormData(this.form);
        const url = new URL(this.form.getAttribute('action') || window.location.href);
        const params =  new URLSearchParams();
        data.forEach((value, key) => {
            params.append(key, value);
        });

        return this.loadUrl(url.pathname + '?' + params.toString())
    }

    async loadUrl (url) {
        this.showLoader();

        const params = new URLSearchParams(url.split('?')[1] || '');
        params.set('ajax', 1);
        const response = await fetch(url.split('?')[0] + '?' + params.toString(), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        if (response.status >= 200 && response.status < 300) {
            const data = await response.json();
            this.flipContent(data.content);
            this.sorting.innerHTML = data.sorting;
            this.pagination.innerHTML = data.pagination;
            this.updatePrices(data);
            params.delete('ajax');
            history.replaceState({}, '', url.split('?')[0] + '?' + params.toString());
        } else {
            console.error(response);
        }

        this.hideLoader();

    }

    /**
     * Replace grid items with a flip animation effect
     * @param {string} content
     */
    flipContent (content) {
        const springConfig = 'gentle'; //wobbly, stiff
        const exitSpring = function (element, index, onComplete) {
            spring({
                config: 'wobbly',
                values: {
                    translateY: [0, -20],
                    opacity: [1, 0]
                },
                onUpdate: ({ translateY, opacity }) => {
                    element.style.opacity = opacity;
                    element.style.transform = `translateY(${translateY}px)`;
                },
                onComplete
            })
        };
        // дополнительная анимация - пусть будет
        // const appearSpring = function (element, index) {
        //     spring({
        //         config: 'stiff',
        //         values: {
        //             translateY: [20, 0],
        //             opacity: [0, 1]
        //         },
        //         onUpdate: ({ translateY, opacity }) => {
        //             element.style.opacity = opacity;
        //             element.style.transform = `translateY(${translateY}px)`;
        //         },
        //         delay: index * 15
        //     })
        // };
        
        const flipper = new Flipper({
            element: this.content
        });

        this.content.children.forEach(element => {
            flipper.addFlipped({
                element,
                // spring: springConfig,
                flipId: element.id,
                shouldFlip: false,
                onExit: exitSpring
            })
        });

        flipper.recordBeforeUpdate();
        this.content.innerHTML = content;

        this.content.children.forEach(element => {
            flipper.addFlipped({
                element,
                // spring: springConfig,
                flipId: element.id,
                // onAppear: appearSpring
            })
        });

        flipper.update();
    }

    showLoader () {
        this.main.classList.add('is-spinner');
        this.form.classList.add('is-loading');
        const loader = this.main.querySelector('.js-loading');
        const form_loader = this.form.querySelector('.js-loading');
        if (this.loader === null || this.form_loader === null) {
            return;
        }

        loader.setAttribute('aria-hidden', 'false');
        form_loader.setAttribute('aria-hidden', 'false');

        loader.style.display = null;
        form_loader.style.display = null;
    }

    hideLoader () {
        this.main.classList.remove('is-spinner');
        this.form.classList.remove('is-loading');
        const loader = this.main.querySelector('.js-loading');
        const form_loader = this.form.querySelector('.js-loading');
        if (this.loader === null || this.form_loader === null) {
            return;
        }

        loader.setAttribute('aria-hidden', 'true');
        form_loader.setAttribute('aria-hidden', 'true');

        loader.style.display = 'none';
        form_loader.style.display = 'none';
    }

    updatePrices ({min, max}) {
        const slider = document.getElementById('price-slider');
        if (slider === null) {
            return
        }
        slider.noUiSlider.updateOptions({
            range: {
                min: [min],
                max: [max]
            }
        })
    }
}