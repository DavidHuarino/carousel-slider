const carousel = document.querySelector('#carousel');
let carouselItems = document.querySelectorAll('.carousel__item');
let lastCarousel = carouselItems[carouselItems.length - 1];
carousel.insertAdjacentElement('afterbegin', lastCarousel);
const btnRight = document.querySelector('#btn-right');
btnRight.addEventListener('click', () => {
    let firstCarousel = document.querySelectorAll('.carousel__item')[0];
    carousel.style.transition = "all .5s ease";
    carousel.style.transform = `translateX(${-40}%)`;
    setTimeout(() => {
        carousel.style.transition = "none";
        carousel.insertAdjacentElement('beforeend', firstCarousel);
        carousel.style.transform = `translateX(${-20}%)`;
    }, 500);
});
const btnLeft = document.querySelector('#btn-left');
btnLeft.addEventListener('click', () => {
    let carouselItems = document.querySelectorAll('.carousel__item');
    let lastCarousel = carouselItems[carouselItems.length - 1];
    carousel.style.transition = "all .5s ease";
    carousel.style.transform = `translateX(${0})`;
    setTimeout(() => {
        carousel.style.transition = "none";
        carousel.insertAdjacentElement('afterbegin', lastCarousel);
        carousel.style.transform = `translateX(${-20}%)`;
    }, 500);
});
