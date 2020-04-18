$(document).ready(function(){

    $('.js-add-product').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 99));

    });

    $('.js-compare-product').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 99));

    });

    $('.js-wish-product').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 99));

    });
});