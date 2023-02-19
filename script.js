var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('links')
var scrollToTop = document.getElementById('scroll-to-top')

hamburger.addEventListener('click', ()=> {
    if ( window.matchMedia("(min-width: 1096px)").matches ){menu.style.opacity=1} 
    else if(window.matchMedia("(max-width: 1095px)").matches && menu.style.opacity==1){
        menu.style.opacity=0
        menu.style.transition='all ease 2s'
    } 
    else if( menu.style.opacity==0 || window.matchMedia("(min-width: 1096px)").matches ) {
        menu.style.opacity=1
        menu.style.transition='all ease-out 0.8s'
    } 
}) 


// -------------- Bouton scroll to top --------------------
$(window).scroll(function () {
	if ($(this).scrollTop() >400) {
        $("#scroll-to-top").fadeIn();
    }else {
        $("#scroll-to-top").fadeOut(); 
    }
});

$("#scroll-to-top").click(function() {
    $("html, body").animate ({ // Les 2 arguments sont : l'animation voulue et la durée de l'animation
        scrollTop:0
    },1100);
    return false;
})



