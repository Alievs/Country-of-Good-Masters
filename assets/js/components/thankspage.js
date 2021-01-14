import '../../styles/thankspage.scss';

import $ from 'jquery';

$(document).ready(function() {

    let link = $('.logo').children().attr('href');
    setTimeout(function(){ window.location = link; },3000);
});