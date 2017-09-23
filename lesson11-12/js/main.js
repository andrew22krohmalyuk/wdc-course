var speed = 300;

$('.accordeon .item-title').click(function(){

    if($(this).hasClass('active')) {

        $('.accordeon .content').hide(300);
        $(this).removeClass('active');
    } else {
        //удаляем класс active у а по закрытию вкладки аккордеона
        $('.accordeon .content a').removeClass('active');

        $('.accordeon .content').hide(300);
        $('.accordeon .item-title').removeClass('active');
        $(this).parent().children('.content').show(300);
        $(this).addClass('active');
    }
});

$('.accordeon .content a').click(function(){
    if($(this).hasClass('active')) {
        //если уже нажата a, то делаем ее не активной
        $(this).removeClass('active');
    } else {
        //если не нажата, то удаляем у всех а класс active
        //и добавляем к нажатому а класс active
        $(this).parent().parent().children().children('a').removeClass('active');
        $(this).addClass('active');
    }
});

$('.tab').click(function(){

    var target = $(this).attr('data-tab');
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.content').removeClass('active');
    $('.content'+target).addClass('active');
});
