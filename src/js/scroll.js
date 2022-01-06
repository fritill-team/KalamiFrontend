$(function () { // wait for document ready
  // init
  $(document).on('scroll', function(){
    // console.log('scrolling');/
  })

  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.turqoise", 1, {x: "0%"}, {x: "100%", ease: Linear.easeAll})
    .fromTo("section.panel.blue", 1, {x: "0%"}, {x: "100%", ease: Linear.easeAll})
    .fromTo("#screen2", 1, {opacity: 0}, {opacity: 1})
    .fromTo("section.panel.green", 1, {x:  "-100%"}, {x: "-0%", ease: Linear.easeAll})
    .fromTo("section.panel.green", 1, {x:  "0%"}, {x: "-100%", ease: Linear.easeAll})
    .fromTo("section.panel.blue", 1, {x: "100%"}, {x: "0%", ease: Linear.easeAll})
    .fromTo("#screen3", 1, {opacity: 0}, {opacity: 1})
    .fromTo("section.panel.purple", 1, {x: "100%"}, {x: "0%", ease: Linear.easeAll})
    

  new ScrollMagic.Scene({
      triggerElement: "onLeave",
      triggerHook: 0.06,
      duration: "300%",
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   asNavFor: '.slider-for',
    //   dots: true,
    //   centerMode: true,
    //   focusOnSelect: true
    // })
    
  });

  
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    // dots: true,
    // centerMode: true,
    // focusOnSelect
  })
  $('.packs-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '30px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })