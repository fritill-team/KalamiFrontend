import 'material-design-lite/material.min'
// import "https://cdn.rtlcss.com/mdl/1.2.1/material.min.js"
import '@/styles/index.scss'
import '@/js/sidebar'
import '@/js/toggle-header'
import '@/js/packCard'
import '@/js/sentenceComposition'
import '@/js/textToSpeach'
import '@/js/scroll'
window.flip = function(flip) {
  $('#cube').removeClass();
  $('#cube').addClass(flip);
}