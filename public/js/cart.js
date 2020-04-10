$(document).ready(function(){

    $('.js-add-product').on('click', function(e) {
        e.preventDefault();

        console.log($(this));
        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        });

    });

});