
$(document).ready(function() {

    $('body').hide().fadeIn("slow");


    $("a.options").hover(function(){
        $(this).toggleClass("selected");
    });


    $("h1 span").hover(function(){
        $(this).toggleClass("a_selected");
    });


    $("span#on_diamond").hover(function(){
        $(this).toggleClass("selected_image");
    });


    $(".hola").click(function(){
        $("p#contact").slideUp();
    });
    
    $(".hola").click(function(){
        $("p#contact").slideDown();
    });


    $("span#on_diamond").click(function(){
        $("div#contact").slideToggle("slow");
    });


});





console.log("heeey! this js file has been loaded")