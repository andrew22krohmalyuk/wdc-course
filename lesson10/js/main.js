$('.dropdown > span.btn').click(function(){

    if ($(this).hasClass('active')) {

        $(this).parent().children('ul').removeClass('active');
        $(this).removeClass('active');

    } else {

        $(this).parent().children('ul').addClass('active');
        $(this).addClass('active');
        
    }

});
