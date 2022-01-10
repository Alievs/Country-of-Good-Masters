import $ from 'jquery';

$(document).ready(function() {
    var list = $(".list-comments .comment");
    var numToShow = 3; //сколько показывать элементов
    var button = $(".button-more");
    var numInList = list.length;
    list.hide();
    if (numInList < 4) {
        button.hide();
    }else {
        button.show()
    }
    list.slice(0, numToShow).show();
    button.click(function() {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });
});