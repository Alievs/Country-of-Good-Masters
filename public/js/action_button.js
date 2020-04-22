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

    $('.js-compare-remove').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 99));

    });

    $('.js-wish-remove').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
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
    $('.js-wish-clear').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'GET'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 99));

    });


    $('.js-comp').on('click', function(e) {
        e.preventDefault();
        window.location.href = "/compare";
    });
    $('.js-wish').on('click', function(e) {
        e.preventDefault();
        window.location.href = "/wish";
    });
    $('.js-cart').on('click', function(e) {
        e.preventDefault();
        window.location.href = "/cart";
    });
});