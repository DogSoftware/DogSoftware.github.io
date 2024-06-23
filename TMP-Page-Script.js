document.addEventListener('DOMContentLoaded', function() {
    let carouselIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    function showCarouselItem(index) {
        carouselItems.forEach(item => item.style.display = 'none');
        carouselItems[index].style.display = 'block';
    }

    function carouselLoop() {
        showCarouselItem(carouselIndex);
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        setTimeout(carouselLoop, 3000); // Change image every 3 seconds
    }

    carouselLoop();
});
