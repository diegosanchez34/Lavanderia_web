/* 
--------------------- Slider1 ---------------------
*/

const slider1 = document.querySelector('.slider1');
const slides1 = document.querySelectorAll('.slider1 img');
const prevBtn1 = document.querySelector('.prev1');
const nextBtn1 = document.querySelector('.next1');

let activeSlide1 = 0;

function showSlide1(index) {
  slides1.forEach(slide => slide.style.opacity = 0);
  slides1[index].classList.add('active');
  slides1[index].style.opacity = 1;
}

showSlide1(activeSlide1);

prevBtn1.addEventListener('click', () => {
  activeSlide1 = activeSlide1 > 0 ? activeSlide1 - 1 : slides1.length - 1;
  showSlide1(activeSlide1);
});

nextBtn1.addEventListener('click', () => {
  activeSlide1 = activeSlide1 < slides1.length - 1 ? activeSlide1 + 1 : 0;
  showSlide1(activeSlide1);
});

function changeSlide1() {
    activeSlide1 = activeSlide1 < slides1.length - 1 ? activeSlide1 + 1 : 0;
    showSlide1(activeSlide1);
  }
  
setInterval(changeSlide1, 5000); // Cambia la foto cada 5 segundos (5000 milisegundos)
  