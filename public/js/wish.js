$(document).ready(function() {

    $('.js-wish-remove').on('click', function() {

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 200));

    });

    $('.js-wish-clear').on('click', function() {

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 200));
    });

});