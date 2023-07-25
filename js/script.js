$('header .header-content .logo').hover(function(){
    $('header').addClass('header-hover')
    $('header .logo').addClass('hovered')
    $('header .service').addClass('hovered')
},function(){
    setTimeout(function(){
    $('header .logo').removeClass('hovered')
    $('header').removeClass('header-hover');
    $('header .service').removeClass('hovered')

    },2500)
})
$('header .menu-icon').click(function(){
    $('header .menu-mobile').addClass('open')
})
$('header .menu-mobile .close').click(function(){
    $('header .menu-mobile').removeClass('open')
})

$('#our-clients-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:5,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$('#our-projects-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    animateOut: 'fadeOut'

})

AOS.init();


$( window ).scroll(function() {
    var topPosition=$(window).scrollTop();
    var p1 = $('#our-work-01').offset().top - $('#our-work-01').height() + 400;
    var p2 = $('#our-work-02').offset().top - $('#our-work-02').height() + 400;
    var p3 = $('#our-work-03').offset().top - $('#our-work-03').height() + 400;
    var p4 = $('#our-work-04').offset().top - $('#our-work-04').height() + 400;
    if(topPosition>p4){
        $('.section-all-projects').css("background-color", "#c1121f");
    }
    else if(topPosition>p3){
        $('.section-all-projects').css("background-color", "#00b4d8");
    }
    else if(topPosition>p2){
        $('.section-all-projects').css("background-color", "#47126b");
    }
    else if(topPosition>p1){
        $('.section-all-projects').css("background-color", "#ff5400");
    }
    else{
        $('.section-all-projects').css("background-color", "white")
    }
  });