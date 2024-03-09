const carousel = document.querySelector('.carousel');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    carousel.addEventListener('mousedown', e => {
        isDragging = true;
        startPosition = e.pageX - currentTranslate;
        prevTranslate = currentTranslate;

        cancelAnimationFrame(animationID);
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('mousemove', e => {
        if (isDragging) {
            const currentPosition = e.pageX - startPosition;
            currentTranslate = currentPosition;
            carousel.style.transform = `translateX(${currentTranslate}px)`;
        }
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        const threshold = 100;

        if (Math.abs(currentTranslate - prevTranslate) > threshold) {
            if (currentTranslate < prevTranslate) {
                // Next slide
                currentTranslate = prevTranslate - 300;
            } else {
                // Previous slide
                currentTranslate = prevTranslate + 300;
            }
        } else {
            currentTranslate = prevTranslate;
        }

        carousel.style.transition = 'transform 0.5s';
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        requestAnimationFrame(() => {
            animationID = startAnimation();
        });
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.transition = 'transform 0.5s';
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    });

    function startAnimation() {
        return requestAnimationFrame(() => {
            carousel.style.transform = `translateX(${currentTranslate}px)`;
            animationID = startAnimation();
        });
    }

    startAnimation();