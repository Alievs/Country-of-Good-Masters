import '../styles/cart.scss';

import $ from 'jquery';

$(document).ready(function(){
    $('.js-remove').on('click', function() {

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 200));

    });

    let cart = document.getElementById("whl-cart");
    if (('input') < 0){

    let inputs = cart.getElementsByTagName('input');
    let timer = null;
    // input change quantity
    cart.addEventListener("keyup", function(e) {
        clearTimeout(timer);
        //element price
        let totalPrice = 0;
        let q = parseInt(e.target.value);

        if (isNaN(q) || q==="" || q >= 100) {
            return;
        }
        // debounce
        timer = setTimeout(function () {
            let parent = e.target.closest('.cart-product_item');
            let price = parseInt(parent.querySelector(".cart-price").innerHTML);
            totalPrice += (isNaN(q) || q==="" || q >= 100) ? 0 : q * price;

            // totalQuantity
            let totalQuantity = 0;
            for (let i=0; i < inputs.length; i++) {
                let q = parseInt(inputs[i].value);
                totalQuantity += (isNaN(q) || q==="" || q >= 100) ? 0 : q ;
            }

            // single product total price
            parent.querySelector("#total-price_c54").innerHTML = totalPrice+ " ₴";

            $.ajax({
                url: '/cart-change/' + parent.id,
                data: { quantity : q, totalQuantity : totalQuantity },
                method: 'POST'
            }).done(
                setTimeout( function(){
                $( "#cart" ).load(location.href + " #cart span" );
                $( "#check_c23" ).load(location.href + " #check_c23 span" );
            }, 200));
        }, 300);

    }, false);
}
});