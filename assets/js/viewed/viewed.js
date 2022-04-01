import $ from 'jquery';

$(document).ready(function() {

    $('.js-view-remove').on('click', function() {

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 200));

    });

    $('.js-view-clear').on('click', function() {

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 200));
    });

});