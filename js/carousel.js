let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const itemCount = items.length;
const intervalTime = 3000; // Tiempo en milisegundos

function showNextItem() {
    items[currentIndex].style.transform = 'translateX(-100%)';
    setTimeout(() => {
        items[currentIndex].style.transform = '';
        currentIndex = (currentIndex + 1) % itemCount;
        items[currentIndex].style.transform = 'translateX(0)';
    }, 500);
}

setInterval(showNextItem, intervalTime);
