const items = document.querySelectorAll('.container__item');
const image = document.querySelector('.container__image');
const audio = document.querySelector('.container__track');


items.forEach((item) => {
  item.childNodes[1].volume = 0.3;
  item.addEventListener('click', () => {
    if (item.childNodes[1].paused) {
      item.childNodes[1].play();
      item.childNodes[3].classList.remove('container__image_gray');
    }
    else {
      item.childNodes[1].pause();
    }
  })

  item.childNodes[1].addEventListener('ended', () => {
    item.childNodes[3].classList.add('container__image_gray');
  })
})

