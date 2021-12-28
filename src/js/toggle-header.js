// import 'muicss/dist/js/mui.min.js'
const getHeaderTemplate = (card) => $(`
  <div class='expand-header' style='background-color: ${card.bgColor}'>

    <button class="mdl-button mdl-js-button mdl-button--icon arrow">
      <i class="material-icons">arrow_back</i>
    </button>
    
    <img src='${card.img}' alt='card image' />
    <div class='expand-header__description'>
      <div class='expand-header__titl'>${card.title}</div>

      <button class="mdl-button mdl-js-button mdl-button--icon sound">
        <i class="material-icons ">volume_up</i>
      </button>
      
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
    
    var sidebarBG = self.css('color')
    console.log('sidebarBG',sidebarBG)
    $('.right-sidebar-container').css({display: "block", backgroundColor:'sidebarBG'})

  })
  .on('click', '.arrow', function() {
    subHeader.empty()
  })


