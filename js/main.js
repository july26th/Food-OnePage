


$(document).ready(function () {
  new WOW().init();
  $effect = $('.masonry').isotope({
    itemSelector: '.masonry-item',
    layoutMode: 'masonry'
  });
  $effect.imagesLoaded().progress(function () {
    $effect.isotope('layout');
  });
  $('.filter-item').click(function () {
    $('.filter-item').removeClass('active');
    $(this).addClass('active');
    data = $(this).data('filter')
    $effect.isotope({ filter: data })

  });
  var check = 0;
  if ($(window).scrollTop() > 50) {
    if (check == 0) {
      $('.nav').addClass('change-nav');
      check = 1;
    }
  }
  else {
    if (check == 1) {
      $('.nav').removeClass('change-nav');
      check == 0;
    }
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      if (check == 0) {
        $('.nav').addClass('change-nav');
        check = 1;
      }
    }
    else {
      if (check == 1) {
        $('.nav').removeClass('change-nav');
        check == 0;
      }
    }
  });
  $(".nav a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
    });
  });

  $('.menu-mobile').click(function () {
    $(this).addClass('rotate');
    $('.close-btn').addClass('close-appear');
    $('.nav-mobile').addClass('active');
    return false;
  });
  $('.close-btn').click(function () {
    $('.menu-mobile').removeClass('rotate');
    $('.nav-mobile').removeClass('active');
  })
  let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".status").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".status-number");
    }
  });
});



