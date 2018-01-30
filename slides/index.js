const slideEls = [...document.querySelectorAll('.slide')]

let selectedSlideIndex = 0

slideEls.forEach((el, i) => {
  if (i !== selectedSlideIndex) el.remove()
})

const nextSlide = () => {
  if (selectedSlideIndex === slideEls.length - 1) return

  slideEls[selectedSlideIndex].remove()

  document.body.appendChild(slideEls[++selectedSlideIndex])
}

document.body.onclick = nextSlide

document.onkeydown = ({keyCode}) => {
  if (keyCode === 37) {
    if (selectedSlideIndex === 0) return

    slideEls[selectedSlideIndex].remove()

    document.body.appendChild(slideEls[--selectedSlideIndex])
  } else if (keyCode === 39) {
    nextSlide()
  }
}
