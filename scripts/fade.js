var sliderImages = document.querySelectorAll('.about-container');

function checkSlide() {
    sliderImages.forEach(function(sliderImage) {

        //half way through the image
        var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2;
        //bottom of the image
        var imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;
        var isHalfShown = slideInAt > sliderImage.offsetTop;
        var isNowScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNowScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
}
window.addEventListener('scroll', (checkSlide));