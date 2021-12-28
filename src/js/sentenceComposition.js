import { cardTemplate, getRandomColor, getRandomTitle } from '@/js/packCard'

const container = $('#sentence-composition')
console.log(container)
if (container.length) {
  console.log('rezsd')
  for (let i = 0; i <= 20; i++) {
    container.append(cardTemplate({
      color: getRandomColor(),
      text: getRandomTitle(),
      image: '/03d4721617f17cd915b3.png',
    }))
  }
}