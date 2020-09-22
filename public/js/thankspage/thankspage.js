$(document).ready(function() {

    let link = $('.logo').children().attr('href');
    setTimeout(function(){ window.location = link; },3000);
});