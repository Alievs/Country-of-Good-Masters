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
                                        entitySelector.append('<li><a href="/catalog/'+link+'">'+value+'</a></li>');
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