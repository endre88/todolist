$(document).ready(function(){

$("input").focus();


$("ul").on("click","li",function(){
    /* if ($(this).css("color")==="rgb(128, 128, 128)"){
        console.log("It is gray!");
        $(this).css({color:"black",textDecoration:"none"});
    }
    else {
    $(this).css({color:"gray",
    textDecoration:"line-through"});
    } */
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if ((event.which===13) && ($(this).val()!=="")){
        let todoText = " "+$(this).val();
        $(this).val("");

        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText+ "</li>");
    }

})
$(".fa-check").on("click",function(event){
    if  ($("input[type='text']").val()!=="")  {
        let todoText = $("input[type='text']").val();
        $("input[type='text']").val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ " "+ todoText+ "</li>");
    }
})

$(this).addClass("fa-unlock")

$("h1 i").click(function(){
    $("input[type='text']").fadeToggle();
    $(".add").fadeToggle();    
    $("h1 i").toggleClass("fa-lock fa-unlock"); //change icon with toggleClass
});
});