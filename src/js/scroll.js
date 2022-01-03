$(function () { // wait for document ready
  // init
  $(document).on('scroll', function(){
    console.log('scrolling');
  })
  var elem = document.querySelector(".content");
  
  // var scrollbar = Scrollbar.init(elem)

  // scrollbar.addListener(() => {
  //   scene.refresh()
  // })


  var controller = new ScrollMagic.Controller();

  // var tween = TweenMax()
    // .fromTo("section.panel.blue", 1, {width: '50%', float: 'right'})

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.turqoise", 1, {x: "0%"}, {x: "100%", ease: Linear.easeAll})
    .fromTo("section.panel.blue", 1, {x: "0%"}, {x: "100%", ease: Linear.easeAll})
    .fromTo("section.panel.green", 1, {x:  "-100%"}, {x: "-0%", ease: Linear.easeAll})
    .fromTo("section.panel.green", 1, {x:  "0%"}, {x: "-100%", ease: Linear.easeAll})
    .fromTo("section.panel.blue", 1, {x: "100%"}, {x: "0%", ease: Linear.easeAll})
    .fromTo("section.panel.purple", 1, {x: "100%"}, {x: "0%", ease: Linear.easeAll})
    

  new ScrollMagic.Scene({
      triggerElement: "#trigger",
      triggerHook: 0.06,
      duration: "300%",
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});