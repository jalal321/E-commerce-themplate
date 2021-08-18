$(document).ready(function() {
  startSlider();

  $('.flexslider-main').flexslider({
      animation: "fade",
      pauseOnHover: true,
      responsive: false,
    });

    function startSlider() {
      console.log('slider started');
      
      $('.flexslider-top-items').flexslider({
        animation: "slide",
        animationLoop: true,
        slideshow: false,
        move: 1,
        controlNav: false,
        itemWidth: 250,
        // itemWidth: ($(window).width()/1),
        itemMargin: 0,
        pauseOnHover: true,
      //   before: function(){
      //     $('.flexslider-top-items').resize();
      //     console.log('resized');
      // }
      });
    }
    
    $('.flexslider-blog-items').flexslider({
      animation: "slide",
      animationLoop: true,
      slideshow: false,
      move: 1,
      controlNav: false,
      itemWidth: 630,
      itemMargin: 10,
      pauseOnHover: true,
    //   before: function(){
    //     $('.flexslider-top-items').resize();
    //     console.log('resized');
    // }
    });
  
  
       
      // Dropdown Menu Show On Mobile  

      $('.dropdown , .dropdown-menu').on('click' , function(e) {
        // console.log('clicked dropdwon');
        e.stopPropagation();
        // $(".dropdown-menu").removeClass('active');
        $(this).siblings('.dropdown-menu').toggleClass('active')
      })

      // To Hide Dopdown On click anywhere
      $(document).click(function(){
        $(".dropdown-menu").removeClass('active');
      });
       
      // Close btn to hide Dropdown Menu On Mobile  

      $('.btn-close').on('click' , function(e) {
        // console.log('clicked close btn');
        e.stopPropagation();
        $(this).parent('.dropdown-menu').removeClass('active')
      })
      
      // fixed navigation on scroll
      $(window).scroll( function (e) {
        // console.log('out');
        var top = $(this).scrollTop();
        if(top > 500) {
        // console.log('in');
          $('.navigation').addClass('sticky')
        } else {
          $('.navigation').removeClass('sticky')
        }
      })

      // tab activation
      $('.tab').on('click' , function() {
        // console.log('click');
        // var currentTab = $(this).attr('id');
        var currentTab = $(this).attr('data-toggle');
        // console.log(currentTab);
        // remove active from all tabs
        $('.tab').removeClass('active');
        // add active to current tab
        $(this).addClass('active');
        // remove active from all tabs
        $('.tab-content').removeClass('active');
        // add active in current tab
        $('#' + currentTab).addClass('active');
        $('.flexslider-top-items').resize();
          // console.log('resized');
    
      })


      // tab activation
      $('.toggle').on('click' , function() {
        $(this).siblings('.inner').slideToggle(250 );
        // $(this).siblings('.inner').toggleClass('active');
        $(this).find('i').toggleClass('active');
      })

      // AOS.init();

    

  });