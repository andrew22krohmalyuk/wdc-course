
$('.arrow.left').click(function(){
    $('.wave-container').removeClass('active');
    $('.span-container').addClass('active');
});
$('.arrow.right').click(function(){
    $('.span-container').removeClass('active');
    $('.wave-container').addClass('active');
});

// for (var i = 0; i < 17; i++) {
//     $('#container').append('<span id='+i+'></span>');
//     //$('#'+i).css('animation-delay',i+'s');
// }
