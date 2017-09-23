//Теперь считываю не размер окна, а размер контейнера со слайдером
var slideWidth = $('slider-container').width();
var count = 0;
var slideCount = $('.slider-container .slide').length;

$('.slider-container .slider-row').css('width',(slideCount * slideWidth) + 'px');

$('.arrow.left').click(function(){
    count--;
    if(count < 0){
        count = (slideCount - 1);
    }
    changeSlider(count);
});

$('.arrow.right').click(function(){
    count++;
    if(count > (slideCount - 1)){
        count = 0;
    }
    changeSlider(count);
});

$('.slider-container .nav-dots a').click(function(){
    count = parseFloat($(this).attr("data-slide")) - 1;
    changeSlider(count);
});

function changeSlider(count){
    var distance = slideWidth * count * (-1);
    $('.slider-container .slider-row .slide').removeClass('active');
    $('.slider-container .slider-row .slide#s' + (count + 1)).addClass('active');
}
