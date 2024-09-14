document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const hours = now.getHours();
    let message = '';

    if (hours >= 6 && hours < 12) {
        message = "Good morning";
    } else if (hours >= 12 && hours < 19) {
        message = "Good afternoon";
    } else {
        message = "Good night";
    }

    document.getElementById('timezone-message').textContent = message;
});

let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const indicators = document.querySelectorAll('.indicator');

function updateCarousel(index) {
    const offset = -index * 100;
    document.querySelector('.cards').style.transform = `translateX(${offset}%)`;

    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel(currentIndex);
}

function selectCard(event) {
    const index = parseInt(event.target.getAttribute('data-index'));
    currentIndex = index;
    updateCarousel(currentIndex);
}

setInterval(nextCard, 8000);
indicators.forEach(indicator => indicator.addEventListener('click', selectCard));