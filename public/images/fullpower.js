$(document).ready(function() {

    $("#saveTableChange").click(function (e) {
        let arrayMiss = ['dfgdfgdfgdgf', 123214, 'sdfsdfs45y21'];
        let entitySelector = $("#some-div").html('');

        $.ajax({
            url: '/semipower',
            method: 'POST',
            data: {'mykey' : arrayMiss},
            success: function(msg){
                var result = JSON.parse(msg);
                $.each(result, function(key, arr) {
                    entitySelector.append('<div>'+key+'<a type="button">'+arr+'</a></div>');
                });
            }
        });
    });

});