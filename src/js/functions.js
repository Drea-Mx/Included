$(".ham").on("click", function() {
    $(".links").slideToggle("slow");
    $(".footerMenu").toggle();
})

$(".links button").on("click", function() {
    $(this).siblings().slideToggle();
    $("img.arrowMenu").toggleClass("turn");
})

$(".desk .links li a.products").on("mouseenter", function(){
    $(".desk ul.child.product").css("display", "flex");
    $(".desk ul.child.about").css("display", "none");

})

$(".desk ul.child.product").on("mouseleave", function(){
    $(".desk ul.child.product").css("display", "none");
})
$(".desk ul.child.about").on("mouseleave", function(){
    $(".desk ul.child.about").css("display", "none");
})
$(".desk ul.child.resources").on("mouseleave", function(){
    $(".desk ul.child.resources").css("display", "none");
})

$(".desk .links li a.about").on("mouseenter", function(){
    $(".desk ul.child.about").css("display", "flex");
    $(".desk ul.child.product").css("display", "none");
    $(".desk ul.child.resources").css("display", "none");

})


$(".desk .links li a.home").on("mouseenter", function(){
    $(".desk ul.child.product").css("display", "none");
    $(".desk ul.child.about").css("display", "none");
    $(".desk ul.child.resources").css("display", "none");
})
$(".desk .links li a.demo").on("mouseenter", function(){
    $(".desk ul.child.product").css("display", "none");
    $(".desk ul.child.about").css("display", "none");
    $(".desk ul.child.resources").css("display", "none");
})
$(".desk .links li a.resources").on("mouseenter", function(){
    $(".desk ul.child.resources").css("display", "flex");
    $(".desk ul.child.about").css("display", "none");
    $(".desk ul.child.product").css("display", "none");
})