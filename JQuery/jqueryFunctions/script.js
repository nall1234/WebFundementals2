$( document ).ready(function() {
    $("p.show").hide();
    $( "p.slideDown" ).hide();
    $( "p.fadeIn").hide();
});

$("button.hide").click(function(){
    $("p.hide").hide("slow");
});

$( "button.show" ).click(function(){
    $( "p.show" ).show(800);
});

$( "button.toggle").click(function(){
    $( "p.toggle" ).toggle("slow");
});

$( "button.slideUp" ).click(function(){
    $( "p.slideUp" ).slideUp("slow");
});

$("button.slideDown").click(function(){
    $("p.slideDown").slideDown(2000);
});

$("button.slideToggle").click(function(){
    $("p.slideToggle").slideToggle(1000)
});

$("button.fadeIn").click(function(){
    $("p.fadeIn").fadeIn(1000);
});

$("button.fadeIn").click(function(){
    $("p.fadeIn").fadeIn(1000)
});

$("button.fadeOut").click(function(){
    $("p.fadeOut").fadeOut(1000)
});

$("button.addClass").click(function(){
    $("p.addClass").addClass("newClass")
});

$("button.before").click(function(){
    $("p.before").before("this goes before!!")
});

$("button.after").click(function(){
    $("p.after").after("this goes after!!")
});

$("button.append").click(function(){
    $("p.append").append("lets add this to the end by appending!!")
});

$("button.html").click(function(){
    $("p.html").html("this replaces html, and if i wanted it could get it and use it somewhere else")
});

$('button.attr').click(function(){
    alert( "the class of the button is:  " + $(this).attr("class"));
});

$( "button.val" ).click(function() {
    $("#name").val("Cadu Moda")
});

$("button.text").click(function(){
    $("p.text").text("You have successfully changed the text!")
});
