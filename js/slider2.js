/* 
--------------------- Slider2 ---------------------
*/

const slider2 = document.querySelector('.slider2');
const slides2 = document.querySelectorAll('.slider2 img');
const prevBtn2 = document.querySelector('.prev2');
const nextBtn2 = document.querySelector('.next2');

let activeSlide2 = 0;

function showSlide2(index) {
  slides2.forEach(slide => slide.style.opacity = 0);
  slides2[index].classList.add('active');
  slides2[index].style.opacity = 2;
}

showSlide2(activeSlide2);

prevBtn2.addEventListener('click', () => {
  activeSlide2 = activeSlide2 > 0 ? activeSlide2 - 1 : slides2.length - 1;
  showSlide2(activeSlide2);
});

nextBtn2.addEventListener('click', () => {
  activeSlide2 = activeSlide2 < slides2.length - 1 ? activeSlide2 + 1 : 0;
  showSlide2(activeSlide2);
});

function changeSlide2() {
    activeSlide2 = activeSlide2 < slides2.length - 1 ? activeSlide2 + 1 : 0;
    showSlide2(activeSlide2);
  }
  
setInterval(changeSlide2, 5000); // Cambia la foto cada 5 segundos (5000 milisegundos)
  