
var xPosition = 0;
var yPosition = 0;

$('#btn-left').click(function() {
    console.log("test left");
    if (xPosition > 0)
    xPosition -= 50;
    $('.box').css('transform','translate(' + xPosition + 'px,'+yPosition+'px)');
});

$('.btn#btn-right').click(function(){
    if (xPosition < 1150)
    xPosition += 50;
    $('.box').css('transform','translate(' + xPosition + 'px,'+yPosition+'px)');
});

$('.btn#btn-down').click(function(){
    console.log("test down");
    if (yPosition < 200)
    yPosition += 50;
    $('.box').css('transform','translate(' + xPosition + 'px,'+yPosition+'px)');
});

$('.btn#btn-up').click(function(){
    console.log("test up");
    if (yPosition > 0)
    yPosition -= 50;
    $('.box').css('transform','translate(' + xPosition + 'px,'+yPosition+'px)');
});
