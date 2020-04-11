$(document).ready(function(){


    $('.js-remove').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).data('url'),
            method: 'POST',
            success: window.location.reload()

        });

    });

});