

// $(function() {
//     $(window).scroll(function() {
//       var headerHeight = $('.container').height() + 590;
//       var windowScroll = $(this).scrollTop();

//       if (windowScroll <= headerHeight) {
//         $('.container').css({
//           'transform': 'translate(0px, ' + windowScroll / 2 + '% )'
//         });
//       }

// if (windowScroll >= headerHeight) {
//     $('nav').addClass('navBar-scrolled');
//   } else {
//     $('nav').removeClass('navBar-scrolled');
//   }
// });

// $(window).scroll(function() {
// 	var vpHeight = $(window).height();
//         var isWhite = false;
//         $(".whiteBG").each(function(i, section) {
//             if(isWhite) {
//     	        return;
//             }
//   	   var offset = $(section).offset().top - $(window).scrollTop();
//            if(((offset + vpHeight) >= 0) && ((offset + vpHeight) <= vpHeight)) {
//               isWhite = true;
//               return;
//            }
//        });
//        $(".navBarInner").css("color", isWhite ? "white" : "darkviolet");
// });

// $(document).ready(function(){       
//     var scroll_pos = 0;
//     $(document).scroll(function() { 
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 210) {
//             $('.header').css('color', '#9400d3');
//         } else {
//             $('.header').css('color', '#fff');
//         }
//     });
// });

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

// jQuery(document).ready(function($){
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 345) {
//             $('.header').css("color", "#800080");
//         } else {
//             $('.header').css("color", "#fff");
//         }
//     })
// });
// })
