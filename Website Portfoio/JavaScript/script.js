/*
$(document).ready(function () {
  $(".about-description").waypoint(
    function () {
      $(".about-description").addClass("animate__animated animate__bounceInDown");
    },
    {
      offset: "100%",
      triggerOnce: false
  
  });
  
  $(".h1-header").waypoint(
    function () {
      $(".h1-header").addClass("animate__animated animate__bounceInLeft animate__onScroll");
    },
    { offset: "100%" }
  );
});
*/

 //Animations

/*$(document).ready(function () {
  function animateOnScroll() {
    //about me description
    $(".about-description").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        // Check if the animation class is already added
        if (!$element.hasClass("animate__animated")) {
          // Add a slight delay before adding the animation class
          setTimeout(function () {
            $element.addClass("animate__animated animate__fadeInRight");
          }, 10);
        }
      } else {
        $(this).removeClass("animate__animated animate__fadeInRight");
      }
    });
    //name
    $(".h1-header").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        // Check if the animation class is already added
        if (!$element.hasClass("animate__animated")) {
          // Add a slight delay before adding the animation class
          setTimeout(function () {
            $element.addClass("animate__animated animate__fadeInLeft");
          }, 10);
        }
      } else {
        $(this).removeClass("animate__animated animate__fadeInLeft");
      }
    });
    //typewriter
    $(".text").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        // Check if the animation class is already added
        if (!$element.hasClass("animate__animated")) {
          // Add a slight delay before adding the animation class
          setTimeout(function () {
            $element.addClass("animate__animated animate__fadeInLeft");
          }, 100);
        }
      } else {
        $(this).removeClass("animate__animated animate__fadeInLeft");
      }
    });
    //description about me in Home
    $(".description").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        // Check if the animation class is already added
        if (!$element.hasClass("animate__animated")) {
          // Add a slight delay before adding the animation class
          setTimeout(function () {
            $element.addClass("animate__animated animate__fadeInLeft");
          }, 500);
        }
      } else {
        $(this).removeClass("animate__animated animate__fadeInLeft");
      }
    });
    //blob
    $(".blob-container").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        // Check if the animation class is already added
        if (!$element.hasClass("animate__animated")) {
          // Add a slight delay before adding the animation class
          setTimeout(function () {
            $element.addClass("animate__animated animate__fadeInRight");
          }, 0);
        }
      } else {
        $(this).removeClass("animate__animated animate__fadeInRight");
      }
    });

    //about header
    $("#About").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        // Check if the animation class is already added
        if (!$element.hasClass("animate__animated")) {
          // Add a slight delay before adding the animation class
          setTimeout(function () {
            $element.addClass(
              "animate__animated animate__fadeInUp animate__slow"
            );
          }, 0);
        }
      } else {
        $(this).removeClass(
          "animate__animated animate__fadeInUp animate__slow"
        );
      }
    });

    //about-blob-container
    $(".about-blob-container").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        // Check if the animation class is already added
        if (!$element.hasClass("animate__animated")) {
          // Add a slight delay before adding the animation class
          setTimeout(function () {
            $element.addClass("animate__animated animate__fadeInLeft");
          }, 0);
        }
      } else {
        $(this).removeClass("animate__animated animate__fadeInLeft");
      }
    });
  }

  

  // Trigger animation on initial load
  animateOnScroll();

  // Trigger animation on scroll and resize events
  $(window).on("scroll resize", function () {
    animateOnScroll();
  });
}); */

$(document).ready(function () {
  var isAnimating = false;
  var scrollDuration = 1000; // Adjust as needed

  function animateOnScroll() {
    $(".left-animation").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        elementPos < topOfWindow + windowHeight &&
        elementPos + $(this).height() > topOfWindow
      ) {
        var $element = $(this);

        if (!$element.hasClass("animate__animated")) {
          $element.addClass("animate__animated animate__fadeInLeft");
        }
      } else {
        $(this).removeClass("animate__animated animate__fadeInLeft");
      }
    });


  }

  function throttle(func, limit) {
    var inThrottle;

    return function () {
      var args = arguments;
      var context = this;

      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function () {
          inThrottle = false;
        }, limit);
      }
    };
  }

  function onScroll() {
    if (!isAnimating) {
      isAnimating = true;
      animateOnScroll();
      setTimeout(function () {
        isAnimating = false;
      }, 100);
    }
  }

  // Smooth scroll to section on navigation link click
  $("a.nav-link").on("click", function (e) {
    e.preventDefault();

    var target = $(this).attr("href");
    var $target = $(target);

    if ($target.length) {
      $("html, body").animate(
        {
          scrollTop: $target.offset().top,
        },
        scrollDuration
      );
    }
  });

  // Trigger animation on initial load
  animateOnScroll();

  // Trigger animation on scroll event using throttling
  $(window).on("scroll", throttle(onScroll, 100));
});

$(document).ready(function () {
  var isAnimating = false;
  var scrollDuration = 1000; // Adjust as needed

  function animateOnScroll() {
   $(".right-animation").each(function () {
     var elementPos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     var windowHeight = $(window).height();

     if (
       elementPos < topOfWindow + windowHeight &&
       elementPos + $(this).height() > topOfWindow
     ) {
       var $element = $(this);

       if (!$element.hasClass("animate__animated")) {
         $element.addClass("animate__animated animate__fadeInRight");
       }
     } else {
       $(this).removeClass("animate__animated animate__fadeInRight");
     }
   });
  }

  function throttle(func, limit) {
    var inThrottle;

    return function () {
      var args = arguments;
      var context = this;

      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function () {
          inThrottle = false;
        }, limit);
      }
    };
  }

  function onScroll() {
    if (!isAnimating) {
      isAnimating = true;
      animateOnScroll();
      setTimeout(function () {
        isAnimating = false;
      }, 100);
    }
  }

  // Smooth scroll to section on navigation link click
  $("a.nav-link").on("click", function (e) {
    e.preventDefault();

    var target = $(this).attr("href");
    var $target = $(target);

    if ($target.length) {
      $("html, body").animate(
        {
          scrollTop: $target.offset().top,
        },
        scrollDuration
      );
    }
  });

  // Trigger animation on initial load
  animateOnScroll();

  // Trigger animation on scroll event using throttling
  $(window).on("scroll", throttle(onScroll, 100));
});


     










