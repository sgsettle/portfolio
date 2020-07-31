// window.onscroll = () => {
//     const nav = document.querySelector('.headerInner');
//     if(this.scrollY <= 250){
//          nav.className = '';
//      } else {
//          nav.className = 'scrolled';}
//   };

// $(window).scroll(function() {


//     if ($(window).width() <= 750) {
  
//       $('nav').toggleClass('scroll', $(this).scrollTop() > 300);
//     } else {
//       $('nav').toggleClass('scroll', $(this).scrollTop() > 600);
//     }
//   });

// window.scroll(function(){
	
// });

// let header = $('header'),
// minScroll = 345;

// $(window).scroll(function () {
//     let scrollTop = $(this).scrollTop();

//     if (scrollTop > minScroll) {
//         header.addClass('compact');
//     } else {
//         header.removeClass('compact');
//     }
// });

jQuery(document).ready(function($){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 345) {
            $('.header').css("color", "#800080");
        } else {
            $('.header').css("color", "#fff");
        }
    })
});