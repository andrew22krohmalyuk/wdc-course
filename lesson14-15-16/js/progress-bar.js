
function progresController(value){

    if(value <= 0){

        $('.progress-bar .value').html('0%');
        $('.progress-bar .bar .active-bar').css('width','0%');
    } else if(value >= 100){

        $('.progress-bar .value').html('100%');
        $('.progress-bar .bar .active-bar').css('width','100%');
    } else {

        $('.progress-bar .value').html(value + '%');
        $('.progress-bar .bar .active-bar').css('width',value + '%');
    }

}


var i = -25;
setInterval(function(){

    i++;
    progresController(i);
}, 50);
