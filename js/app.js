// mega menu
  
    $(document).ready(function() {
     
        $(document).on('click', '.dropdown-menu', function (e) {
          e.stopPropagation();
        });
        
      
    });
   





const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

 

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