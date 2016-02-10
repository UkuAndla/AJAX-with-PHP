
$(document).ready(function(){

    $("#sub").click(function(){
        var user_name = $("#name").val();
        console.log(user_name);
        $.post("test.php",{name:user_name},function(data){
            $("#result").text(data);
        });
    });

});