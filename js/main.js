$(document).ready(function() {
    $('.flexslider-main').flexslider({
      animation: "fade",
      pauseOnHover: true,
      responsive: true,
    });

    $('.flexslider-top-items').flexslider({
        animation: "slide",
        animationLoop: true,
        slideshow: true,
        controlNav: false,
        itemWidth: 315,
        itemMargin: 5,
        pauseOnHover: true,
      });
       
      // Dropdown Menu Show On Mobile  

      $('.dropdown').on('click' , function(e) {
        console.log('clicked dropdwon');
        $(this).siblings('.dropdown-menu').toggleClass('show-dropdown-mobile')
      })

      // To Show Dopdown On Dropdown hover
//       $('.dropdown').hover( function(e) {
//         console.log('clicked dropdwon for backdrop');
//         $(this).find('.dropdown-menu').css('display' , 'block')
//       } , function(e) {
//         console.log('clicked dropdwon for backdrop');
//         $('.dropdown-menu').css('display' , 'none');
//       }
// )
       
      // Close btn to hide Dropdown Menu On Mobile  

      $('.btn-close').on('click' , function(e) {
        console.log('clicked close btn');
        e.stopPropagation();
        $(this).parent('.dropdown-menu').removeClass('show-dropdown-mobile')
      })
      
      $('.navigation').scroll( function (e) {
        console.log('out');

        if (this.scrollTop > 100) {
        console.log('in');

          $('.navigation').css('position','fixed')
          $('.navigation').css('top','0')
        } else {
          
        }
      })

  // AOS.init();

  });