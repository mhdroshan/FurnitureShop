

// menu

// function megaa(){

//   $("#navbar").css("background", "white");
//   $(".nav-link").css("color","black");
//   // $(".navbar .show").css("background", "white");
//   $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.64) 0px 4px 6px 0px");


  
// }


function myFunction() {
  var scl = $(window).scrollTop();

  if ($("#navbarNav").hasClass("show")) {
    if (scl < 100) {
      $("#navbar").css("background", "transparent");
      $("#navbar").css("backdrop-filter", "none");
      $("#navbar").css("box-shadow", "none");
      $(".nav-link").css("color","white");
     
    }

  }
  else {
    if (scl < 100) {
      $("#navbar").css("background", "#ffffffbd");
      $("#navbar").css("backdrop-filter", "blur(4px)");
      $(".nav-link").css("color","black");

      $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.64) 0px 4px 6px 0px");
    }
  }
}
$(document).ready(function () {
  var scroll2 = $(window).scrollTop();
  if (scroll2 > 20) {
    // document.getElementById("navbarNav").style.margin = "0px auto";
    $("#navbar").css("background", "white");
    $(".nav-link").css("color","black");
    // $(".navbar .show").css("background", "white");
    $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.64) 0px 4px 6px 0px");

  }

  // if ($("#navbarNav").hasClass("show")) {
  //   $("#navbar").css("background", "#ffffffbd");
  //   $("#navbar").css("backdrop-filter", "blur(4px)");

  // }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      // document.getElementById("navbarNav").style.margin = "0px auto";
      $("#navbar").css("background", "white");
      $(".nav-link").css("color","black");
      // $(".navbar .show").css("background", "white");
      $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.64) 0px 4px 6px 0px");

    }

    else {
      if ($("#navbarNav").hasClass("show")) {
        $("#navbar").css("background", "#ffffffbd");
        $(".nav-link").css("color","black");
        $("#navbar").css("backdrop-filter", "blur(4px)");

      }
      else {
        // document.getElementById("navbarNav").style.margin = "8px auto";
        $("#navbar").css("background", "transparent");
        $("#navbar").css("box-shadow", "none");
        $("#navbar").css("backdrop-filter", "none");
        $(".nav-link").css("color","white");

        // $(".navbar .show").css("background", "#e8cb00c7");
      }
    }
  })
})


// mega menu
  
    $(document).ready(function() {
     
        $(document).on('click', '.dropdown-menu', function (e) {
         
          e.stopPropagation();
        });
        
      
    });
   





// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function() {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function() {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function() {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });

 

// owl carousel testimonial
$(document).ready(function () {
  $('#testimonial').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navClass: ['jislider__left-arrow', 'jislider__right-arrow'],
    margin: 50,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: true,

      }
    }
  })
})


//home sloder
 $(document).ready(function () {
  $('#homeslider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 2,
    navClass: ['jislider__left-arrow', 'jislider__right-arrow'],
    dotsClass: 'owl-dotsCustom owl-dots',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,

      }
    }
  })
})


// testimonial

$(document).ready(function () {
  $('#featured').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navClass: ['jislider__left-arrow', 'jislider__right-arrow'],
    margin: 15,


    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,

      }
    }
  })
})
