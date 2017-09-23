var colors = {
    blue:'#3498db',
    green:'#16a085',
    dark:'#34495e',
    carrot:'#e67e22'
};

$('body').css('background',colors.green);

$('ul li a').click(function(){
    //console.log(this.id);
    $('ul li a').removeClass('active');
    $(this).addClass('active');
    $('body').css('background', colors[this.id]);
});
