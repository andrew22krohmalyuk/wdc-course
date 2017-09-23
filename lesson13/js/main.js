var slideWidth = $(window).width();
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

function changeSlider(count){
    var distance = slideWidth * this.count * (-1);
    $('.slider-container .slider-row').css('transform','translateX(' + distance + 'px)');
}
