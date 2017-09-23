$(function() {
    var dx = 0;
    var dy = 0;
    var deg = 0;
    var step = 25;
    var id;
    var wasClicked = false;

    var keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }

    $('#start').click(function(){
        if(!wasClicked){
            id = setInterval(function(){
                deg++;
                if(deg == 360)
                    deg = 0;
                //console.log(deg);
                moveBoxT(deg, dx, dy);
            }, 50);
            wasClicked = true;
        }
    });
    $('#pause').click(function(){
        clearInterval(id);
        wasClicked = false;
    });
    $('#reset').click(function(){
        deg = 0;
        dy = 0;
        dx = 0;
        clearInterval(id);
        moveBoxT(deg, dx, dy);
        wasClicked = false;
    });
    $('.container').click(function(){
        if(wasClicked){
            clearInterval(id);
            wasClicked = false;
        }else{
            id = setInterval(function(){
                deg++;
                if(deg == 360)
                    deg = 0;
                //console.log(deg);
                moveBoxT(deg, dx, dy);
            }, 50);
            wasClicked = true;
        }
    });
    $('#right').click(function(){
        dx += step;
        moveBoxT(deg, dx, dy);
    });
    $('#left').click(function(){
        dx -= step;
        moveBoxT(deg, dx, dy);
    });
    $('#top').click(function(){
        dy -= step;
        moveBoxT(deg, dx, dy);
    });
    $('#bottom').click(function(){
        dy += step;
        moveBoxT(deg, dx, dy);
    });

    addEventListener("keydown", function(event) {
        if (event.keyCode == keys.UP){
            dy -= step;
            moveBoxT(deg, dx, dy);
        } else if (event.keyCode == keys.DOWN) {
            dy += step;
            moveBoxT(deg, dx, dy);
        } else if (event.keyCode == keys.LEFT) {
            dx -= step;
            moveBoxT(deg, dx, dy);
        } else if (event.keyCode == keys.RIGHT) {
            dx += step;
            moveBoxT(deg, dx, dy);
        }

      });
    function moveBoxT(deg, dx, dy){

        $('.container').css('transform', 'translate('+dx+'px,'+dy+'px) rotateX('+deg+'deg) rotateY('+deg+'deg)');
    };
});
