$(document).ready(function(){

    let cart = document.getElementById("whl-cart");
    let inputs = cart.getElementsByTagName('input');

    $('.js-remove').on('click', function() {

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 200));

    });

    // input change quantity
    cart.addEventListener("keyup", function(e) {

        //element price
        let totalPrice = 0;
        let q = parseInt(e.target.value);

        if (isNaN(q) || q==="") {
            return;
        }

        let parent = e.target.closest('.cart-product_item');
        let price = parseInt(parent.querySelector(".cart-price").innerHTML);
        totalPrice += (isNaN(q) || q==="") ? 0 : q * price;

        parent.querySelector(".total-price").innerHTML = totalPrice+ " ₴";

        //totalQuantity
        let totalQuantity = 0;
        for (let i=0; i < inputs.length; i++) {
            let q = parseInt(inputs[i].value);
            totalQuantity += (isNaN(q) || q==="") ? 0 : q ;
        }
        $.ajax({
            url: '/cart-change/' + parent.id,
            data: { quantity : q, totalQuantity : totalQuantity },
            method: 'POST'
        }).done(
            setTimeout( function(){
            $( "#cart" ).load(location.href + " #cart span" );
            $( ".check" ).load(location.href + " .check span" );
        }, 600));

    }, false);

});