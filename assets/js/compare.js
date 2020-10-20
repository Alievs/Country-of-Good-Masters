import '../styles/compare.scss';

import $ from 'jquery';

$(document).ready(function() {

    $('.js-compare-remove').on('click', function (e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout(function () {
            window.location.reload();
        }, 99));

    });

    $('.js-compare-clear').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 99));

    });
});