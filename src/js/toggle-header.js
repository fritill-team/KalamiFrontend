// import 'muicss/dist/js/mui.min.js'

$(document).on('click', '.pack-card', function () {
  console.log('clicked');
  // $("#header").after('<div>').addClass("expand-header");
  $("header").after(`<div class="expand-header">
    <img src='../images/girl.png' />
  </div>`);
})