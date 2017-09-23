//
// var target = 0;
//
// $('.range').mousemove(function(){
//
//     var value = $(this).val();
//     //
//     //this.value = event.pageX+':'+event.pageY
//     // $('.range-container .value').html(value);
//     // $('.value').css('left', 100 +  'px');
//     $('.range').onmousedown(function(){
//         $('.range-container .value').html(value);
//
//         $('.value').css('left', (event.pageX - 100) +  'px');
//     })
//
//         //$('.value').css('right', event.pageY +  'px');
// });

$('.range').mousedown(function(){

    $('.range').mousemove(function(){

            var value = $(this).val();
            $('.range-container .value').html(value);

            var dx = (event.pageX - 90);

            if(dx > 172){
                dx = 172;
            } else if(dx < 2) {
                dx = 2;
            }

            $('.value').css('left', dx  +  'px');
    });

});
