
toggle();

$('.arrow.left').click(function(){
    $('.wave-container').removeClass('active');
    $('.spinners-container').addClass('active');
    toggle();
});
$('.arrow.right').click(function(){
    $('.spinners-container').removeClass('active');
    $('.wave-container').addClass('active');
    toggle();
});

function toggle(){
    if($('.spinners-container').attr('class') == 'spinners-container active'){
        console.log(true);
        $('.arrow.left').css('visibility','hidden');
        $('.arrow.right').css('visibility','visible');
    } else {
        $('.arrow.right').css('visibility','hidden');
        $('.arrow.left').css('visibility','visible');
    }
}
