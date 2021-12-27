// import 'muicss/dist/js/mui.min.js'
const getHeaderTemplate = (card) => $(`
  <div class='expand-header' style='background-color: ${card.bgColor}'>
    <div>
      <i class='material-icons arrow'>arrow_back</i>
    </div>
    <img src='${card.img}' alt='card image' />
    <div class='expand-header__description'>
      <div class='expand-header__titl'>${card.title}</div>
      <span class='material-icons'>
        volume_up
      </span>
    </div>
  </div>`)

const subHeader = $('#sub-header')

$(document)
  .on('click', '.pack-card', function() {
    console.log('clicked')
    let self = $(this)
    let card = {
      img: self.find('img').attr('src'),
      bgColor: self.css('color'),
      title: self.find('.pack-card__title').text()
    }
    console.log(self.css('color'))
    // $("#header").after('<div>').addClass("expand-header");
    subHeader.empty()
    subHeader.append(getHeaderTemplate(card))
  })
  .on('click', '.arrow', function() {
    subHeader.empty()
  })


