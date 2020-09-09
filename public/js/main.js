$(document).ready(function(){

    //   Category Side-Menu
    var tabs = $('#tabs');
    var sa = $('#dark');

    tabs.on('mouseover', function (e) {
        e.stopPropagation();
        $(sa).addClass('dark');
    });

    tabs.on('mouseout', function (e) {
        e.stopPropagation();
        $(sa).removeClass('dark');
    });

    // Product Button Action
    $('.js-add-product').on('click', function() {

        $(this).removeClass('js-add-product');
        $(this).addClass(' active js-cart');

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            $( "#cart" ).load(location.href + " #cart span" );
        }, 200));
    });
    $('.js-wish-product').on('click', function() {

        $(this).removeClass('js-wish-product');
        $(this).addClass(' active js-wish');

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            $( "#wish" ).load(location.href + " #wish span" );
        }, 200));
    });
    $('.js-compare-product').on('click', function() {

        $(this).removeClass('js-compare-product');
        $(this).addClass(' active js-comp');

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            $( "#comp" ).load(location.href + " #comp span" );
        }, 200));

    });


    $('.js-comp').on('click', function() {
        window.location.href = "/compare";
    });
    $('.js-wish').on('click', function() {
        window.location.href = "/wish";
    });
    $('.js-cart').on('click', function() {
        window.location.href = "/cart";
    });
    // Product Button Action-end


});