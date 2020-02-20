    $(document).ready(function () {

   $("#carouselBest").slick({    
    'dots':false,  
    'slidesToShow': 4,
    responsive:[
    {
      breakpoint: 910,
      settings: {      
        slidesToShow: 3      
      }
    },
    {
      breakpoint: 769,
      settings: {
       
        slidesToShow: 2      
      }
    },
    {
      breakpoint: 577,
      settings: {
       
        slidesToShow: 1      
      }
    }
     
        
    
    ]
   });
   $('#carouselBlog').slick({
     'dots':false,
     'slidesToShow': 3,
     responsive:[
      {
        breakpoint: 769,
        settings: {
        
          slidesToShow: 2      
        }
      },
      {
        breakpoint: 448,
        settings: {
         
          slidesToShow: 1      
        }
      },
      {
        breakpoint: 498,
        settings: {
         
          slidesToShow: 1      
        }
      }
         
        
      
      ]
   })
   
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('#pagination a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('a').each(function () {
              $(this).removeClass('active-page');
          })
          $(this).addClass('active-page');
        
          var target = this.hash,
              menu = target;
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top+2
          }, 700, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });

    function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('#pagination a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('#pagination a').removeClass("active-page");
              currLink.addClass("active-page");
          }
          else{
              currLink.removeClass("active-page");
          }
      });
    }



        //scroll menu
    var lastScrollTop = 100;

    $(window).scroll(function(event){
    var the_top = jQuery(document).scrollTop();
      
        
    if(the_top < 100 ){
        $('.wrap-menu').removeClass('fixed');
      }
        
      else {
        $('.wrap-menu').addClass('fixed');
      }
      lastScrollTop = the_top;
    });

      //mobile menu toggle
    $('#category-menu').click(function () {
      $('nav ul').addClass('show');
      $('body,html').css({'overflow-y': 'hidden'});
    });
    $('nav .close').click(function () {
      $('nav ul').removeClass('show');
      $('body,html').css({'overflow-y': 'auto'});
    });
    $(".line-menu-btn").click(function(){
      $('.contact-info').slideToggle(500);
    });


 // Show form order a doctor   
$('.get_popup').click( function() {
     var item = $(this).parent().parent('.doctor-item');
     var image = item.find('img').attr('src');
     var nameDoctor = item.find('.name').text();
     var popup = $('#wrap-popup');     
     popup.find('.name-doctor').text(nameDoctor);
     popup.find('img').attr('src', image);
     popup.fadeIn(); 
     console.log(nameDoctor);

});
//Close form order a doctor
$('.close-form').click( function(){
  $('#wrap-popup').fadeOut(); 
});
    
          
    });

 /* function getpopup() {
   
     var item = this.document.getElementsByClassName('doctor-item');
     var image = item.getElementsByTagName("img").getAttribute('src');
     console.log(image);

  }

*/
