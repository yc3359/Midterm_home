$(document).ready(function() {
    $('i').click(function() {

        var el = ['html', 'article', 'i'];

        $.each(el, function(index, item) {
            $(item).toggleClass('dark-' + item + '')
        });
        $(this).text($(this).text() == 'dark-mode' ? 'light-mode' : 'dark-mode');
    });
});


