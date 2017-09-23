var list = ['home','street','data','phone'];

var toggle = true;

$('#generate').click(function(){

    if(toggle){

        for (var i = 0; i < 6; i++) {

            $('.table').append('<tr id="'+i+'"></tr>');
            for (var j = 0; j < 4; j++) {

                //Заполняем первую строку заголовками а остальное ид
                (i == 0) ?
                $('.table tr#'+i+'').append('<td>'+list[j]+'</td>').css('font-weight','bold').css('background','#eee'):
                $('.table tr#'+i+'').append('<td>id= '+(i + 1)*(j + 1)+'</td>');
            }
        }
        toggle = false;
    }

});

$('#delete').click(function(){
    $('.table').html(' ');
    toggle = true;
});
