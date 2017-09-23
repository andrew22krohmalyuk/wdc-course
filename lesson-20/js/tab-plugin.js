$.fn.tabPlugin = function(options){
    var param = $.extend({
        'speed': 300,
        'transitionFunction': 'linear',
        'dataSelector': 'data-tab'
    }, options);

    var $selector = this;

    $selector.find('.content').css('transition','all ' + param.speed + 'ms ' + param.transitionFunction);

    function tabController(target) {
        $selector.find('.tab').removeClass('active');
        $selector.find('.content').removeClass('active');
        $selector.find('.tab[data-tab="' + target + '"]').addClass('active');
        $selector.find('.content' + target).addClass('active');
    };

    $selector.find('['+ param.dataSelector +']').click(function(){
        var target = $(this).attr('data-tab');
        tabController(target);
    });

}
