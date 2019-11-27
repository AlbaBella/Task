jQuery(document).ready(function($){
    
    $('.btn').on('click', function(){
        var textValue=$('#text').val();
        if(textValue===''){
            alert('enter a value');
            return;
        }
        $('.tasks').prepend(textValue);
        $('.tasks').prepend('<br>');
    });
    
});