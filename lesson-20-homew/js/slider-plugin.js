(function($) {
    $.fn.Slider = function(options) {
        var settings = $.extend({
            'animationSpeed': 300
        }, options);

        var $selector = this;
        //init
        var slideWidth = $('.slider-container').width();
        var count = 0;
        var slideCount = $('.slider-container .slide').length;
        $('[data-slide^=' + (count + 1) + ']').addClass('active');
        $selector.find('.slider-row').css('width', (slideWidth * slideCount) + 'px');
        $selector.find('.slider-row').css({
            'transition': 'all ' + settings.animationSpeed + 'ms ease-out'
        });

        //controllers
        function moveSlide(count){
            var distance = slideWidth * count * (-1);
            $('.slider-container .slider-row').css('transform', 'translateX('+distance + 'px)');
            $('.nav-dots a').removeClass('active');
            $('[data-slide^=' + (count + 1) + ']').addClass('active');
        }

        //actions
        $('.arrow.left').click(function(){
            count--;
            if(count < 0){
                count = (slideCount - 1);
            }
            moveSlide(count);
        });
        $('.arrow.right').click(function(){
            count++;
            if(count > (slideCount - 1)){
                count = 0;
            }
            moveSlide(count);
        });
        $('.slider-container .nav-dots a').click(function(){
            count = parseFloat($(this).attr('data-slide')) - 1;
            moveSlide(count);
        });
    };
})(jQuery);
