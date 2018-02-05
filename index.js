// Your code goes here:
$('#thumbnails img').click(function(){
    $('#main-image').attr('src',$(this).attr('src').replace('thumbnails','main-image'));
    $('#description').html($(this).attr('alt'));
})
