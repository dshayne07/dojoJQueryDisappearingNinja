$(document).ready(function(){
    $("img").click(function(){
        $(this).hide();
    });

    $("a").click(function(e){
        e.preventDefault();
        $("img").show();
    });
});