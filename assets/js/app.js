/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.scss';


import $ from 'jquery';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

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
        let that = $(this);

        if (that.hasClass('js-add-product')) {
            that.removeClass('js-add-product');
            that.addClass(' active js-cart');
            $.ajax({
                url: that.data('url'),
                method: 'POST'
            }).done(setTimeout( function(){
                $( "#cart" ).load(location.href + " #cart span" );
            }, 200));
        } else {
            window.location.href = "/cart";
        }
    });
    $('.js-wish-product').on('click', function() {
        let that = $(this);

        if (that.hasClass('js-wish-product')) {
            that.removeClass('js-wish-product');
            that.addClass(' active js-wish');
            $.ajax({
                url: that.data('url'),
                method: 'POST'
            }).done(setTimeout( function(){
                $( "#wish" ).load(location.href + " #wish span" );
            }, 200));
        } else {
            window.location.href = "/wish";
        }
    });
    $('.js-compare-product').on('click', function() {
        let that = $(this);

        if (that.hasClass('js-compare-product')) {
            that.removeClass('js-compare-product');
            that.addClass(' active js-comp');
            $.ajax({
                url: that.data('url'),
                method: 'POST'
            }).done(setTimeout( function(){
                $( "#comp" ).load(location.href + " #comp span" );
            }, 200));
        } else {
            window.location.href = "/compare";
        }
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

    //Login & SignIn
    // $('#viewport').hover(function(){
    //     clearInterval(switchInterval);
    // },function() {
    //     switchInterval = setInterval(plusSlide, slideInterval);
    // });

    // let login_timer = null;
    //
    // let user_login = $('#user-menu_u44').children('a')[0];
    //
    // console.log(user_login);
    // $('#user-menu_u44 a').hover(function() {
    //     //Clear timeout just in case you hover-in again within the time specified in hover-out
    //     clearTimeout(login_timer);
    //         login_timer = setTimeout(function() {
    //             let user = document.getElementById('user-enter_u11');
    //             user.style.display = "block";
    //     }, 1000);
    // }, function() {
    //     //Clear the timeout set in hover-in
    //     clearTimeout(login_timer);
    //     timer = setTimeout(function() {
    //         let user = document.getElementById('user-enter_u11');
    //         user.style.display = "none";
    //     }, 1000);
    //
    // });

    // можно сделать динамично подключаемым модулем, но нужно ли?
    /* -------------Search input ajax------------- */
    var searchRequest = null;
    var timer = null;
    var searchInput = document.getElementById('search');

    $("#search").keyup(function() {
        clearTimeout(timer);
        var that = this;
        var value = this.value;
        var entitySelector = $("#productsNav").html('');
        if (searchRequest != null){
            searchRequest.abort();
        }
        // debounce
        timer = setTimeout(function () {
            searchRequest = $.ajax({
                type: "GET",
                url: "/search",
                data: {
                    'q' : value
                },
                dataType: "text",
                success: function(msg){
                    //we need to check if the value is the same
                    if (value === that.value) {
                        var result = JSON.parse(msg);
                        $.each(result, function(key, arr) {
                            $.each(arr, function(link, value) {
                                if (key === 'srproduct') {
                                    if (link !== 'error') {
                                        entitySelector.append('<li><a href="/product/'+link+'">'+value+'</a></li>');
                                        entitySelector.css({display: 'block'});
                                        searchInput.style.borderBottomLeftRadius = "0";
                                        searchInput.style.borderBottomRightRadius = "0";
                                    } else {
                                        entitySelector.append('<li class="errorLi">'+value+'</li>');
                                        entitySelector.css({display: 'block'});
                                        searchInput.style.borderBottomLeftRadius = "0";
                                        searchInput.style.borderBottomRightRadius = "0";
                                    }
                                }
                            });
                        });
                    }
                }
            });
        }, 500);

    });

    window.searchBlur = function () {
        var node = document.getElementById('productsNav');
        setTimeout(function () {
            node.innerHTML = "";
            node.style.display = "none";
            searchInput.style.borderBottomLeftRadius = "0.375rem";
            searchInput.style.borderBottomRightRadius = "0.375rem";
        }, 100);
    };

    /* -------------Search input ajax-end------------- */

});