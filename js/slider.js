/* 
--------------------- Slider0 ---------------------
*/

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let activeSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.style.opacity = 0);
  slides[index].classList.add('active');
  slides[index].style.opacity = 1;
}

showSlide(activeSlide);

prevBtn.addEventListener('click', () => {
  activeSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1;
  showSlide(activeSlide);
});

nextBtn.addEventListener('click', () => {
  activeSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
  showSlide(activeSlide);
});

function changeSlide() {
    activeSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
    showSlide(activeSlide);
  }
  
setInterval(changeSlide, 5000); // Cambia la foto cada 5 segundos (5000 milisegundos)

  