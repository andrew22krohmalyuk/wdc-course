(function($) {
    $.fn.ModalWindow = function( options ) {
        var settings = $.extend({
            'title': 'title',
            'content': 'content',
            'verticalAlign': false,
            'dataAttrName': 'data-modal',
            'color': '#3f6f95',
            'font': 'sans-serif',
            'overlaySpeed': 300,
            'animationSpeed': 300

        }, options);

        var $selector = this;
        //init
        $selector.find('.modal-header').css({
            'background': settings.color,
            'font-family': settings.font
        });
        $selector.find('.modal-content').css({
            'color': settings.color,
            'font-family': settings.font
        });
        $selector.find('.modal-container').css({
            'transition': 'all ' + settings.overlaySpeed + 'ms ease-out'
        });
        $selector.find('.modal').css({
            'transition': 'all ' + settings.animationSpeed + 'ms ease-out'
        });

        if(settings.verticalAlign){
            $selector.find('.modal').css({
            'top':'50%',
            'transform':'translate(-50%,-50%)'
            });
        }

        //controllers
        function modalController(target){
            if (target === 'close') {
                $selector.find('.modal-container').removeClass('active');
                $selector.find('.modal').removeClass('active');
            } else {
                $selector.find('.modal-container').addClass('active');
                $selector.find('.modal').addClass('active');
            }
        }

        //actions
        $('[' + settings.dataAttrName + ']').click(function(){
            var target = $(this).attr(settings.dataAttrName);
            modalController(target);
        });
    };
})(jQuery);
