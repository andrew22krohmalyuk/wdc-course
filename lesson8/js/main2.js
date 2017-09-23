var count = 0;

$('#generate-two').click(function(){

    if (count < 7){
        count++;

        if(count % 2 == 0){
            $('#table-two').append('<tr><td>'+count+'</td><td>Name</td><td>Surname</td><td>225025</td><td>Lorem</td></tr>');
        } else {
            $('#table-two').append('<tr><td>'+count+'</td><td>Name</td><td>Surname</td><td>225025</td><td>Lorem</td></tr>').css('background','#fff');
        }
    }
});

$('#delete-two').click(function(){
    count = 0;
    $('#table-two').html(' ');
});
