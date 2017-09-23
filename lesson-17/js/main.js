function progressBarController(value) {
  var $selector = $('.progress-bar');
  if(value <= 0){

    $selector.find('.left-bar').css('transform','rotate(0deg)');
    $selector.find('.value').html('0%');

  } else if (value >= 100) {

    $selector.find('.left-bar').css('transform','rotate(360deg)');
    $selector.find('.value').html('100%');
  } else {


    if(value >= 50){

      $selector.find('.mask').css('opacity','0');
      $selector.find('.right-bar').css('opacity','1');

    } else {
      /*Мое решение */
      $selector.find('.mask').css('opacity','1');
      $selector.find('.right-bar').css('opacity','0');
  }
    var progressValue = 360 / 100 * value;
    $selector.find('.left-bar').css('transform','rotate('+ progressValue +'deg)');
    $selector.find('.value').html(value + '%');
    console.log(progressValue);
  }

}

var startInterval;
var reverseInterval;
var flag = true;

$('.start').click(function(){
    if(flag){
        $('.reverse').removeClass('disable');
        clearInterval(reverseInterval);
        var i = 0;
        startInterval = setInterval(function() {
            i++;
            progressBarController(i);
        }, 50);
        flag = false;
        $('.start').addClass('disable');
    }
});

$('.reverse').click(function(){
    if(!flag){
        $('.start').removeClass('disable');
        clearInterval(startInterval);
        var i = 100;
        reverseInterval = setInterval(function() {
            i--;
            progressBarController(i);
        }, 50);
        flag = true;
        $('.reverse').addClass('disable');
    }
});
