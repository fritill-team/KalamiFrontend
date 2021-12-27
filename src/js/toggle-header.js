// import 'muicss/dist/js/mui.min.js'

$(document).on('click', '.pack-card', function () {
  console.log('clicked');
  let self = $(this);
  let img = self.find('img').attr('src')
  let bgcolor = self.find('.pack-card').attr('background-color')
  // $("#header").after('<div>').addClass("expand-header");
  $("header").after($(`
  <div class="expand-header" style='background-color': ${bgcolor}>
    <div>
      <i class="material-icons">add</i>
    </div>
    <img src='${img}' alt="card image" />
    <div class="expand-header__description">
      <div class="expand-header__titl">sister</div>
      <div class="expand-header__subtitle">family</div>
      <span class="material-icons">
        volume_up
      </span>
    </div>
  </div>`));
})