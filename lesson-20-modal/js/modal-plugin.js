$.fn.modalPlugin = function(options) {

    var param = $.extend({
        'modalAnimationSpeed': 300,
        'overlayAnimationSpeed': 300,
        'verticalAlign': false,
        'dataAttrName': 'data-modal'
    }, options);

    var $selector = this;
    //console.log(this);

    //init
    $selector.find('.modal-container').css('transition', 'all ' + param.overlayAnimationSpeed + 'ms ease-out');
    $selector.find('.modal').css('transition', 'all ' + param.modalAnimationSpeed + 'ms ease-out');

    if(param.verticalAlign){
        $selector.find('.modal').css({
            'top':'50%',
            'transform':'translate(-50%,-50%)'
        })
    }

    //controllers
    function modalController(target){
        if(target === 'close') {
            $selector.find('.modal-container').removeClass('active');
            $selector.find('.modal').removeClass('active');
        } else {
            $selector.find('.modal-container').addClass('active');
            $selector.find('.modal' +target).addClass('active');
        }
    }

    //actions
    $('[' + param.dataAttrName + ']').click(function(){
        var target = $(this).attr('data-modal');
        //console.log(target);
        modalController(target);
    })
};
