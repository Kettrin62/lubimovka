//находим элемент body
const bodyElement = document.querySelector('.page');
//находим заголовок
const titleVideoElement = bodyElement.querySelector('.video__title ');
//находим контейнер с видео
const videoContainer = bodyElement.querySelector('.video__iframes');
//находим блок с видео
const videoElements = bodyElement.querySelectorAll('.video__iframe');


function changVideoBlock() {
  if (videoElements.length === 1) {
    titleVideoElement.classList.add('video__title_number_one');
    videoContainer.classList.add('video__iframes_number_one');
    videoElements.forEach((element) => {
      element.classList.add('video__iframe_number_one');
    })
  } else if (videoElements.length === 2) {
    titleVideoElement.classList.add('video__title_number_two');
    videoContainer.classList.add('video__iframes_number_two');
    videoElements.forEach((element) => {
      element.classList.add('video__iframe_number_two');
    })
  } else if (videoElements.length === 3) {
    titleVideoElement.classList.add('video__title_number_three');
    videoContainer.classList.add('video__iframes_number_three');
    videoElements.forEach((element) => {
      element.classList.add('video__iframe_number_three');
    })
  };
}

changVideoBlock();
