let currentIndex = 0;
    const items = document.querySelectorAll('.hero-imgwrap');
    const totalItems = items.length;

    function showNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        const offset = -currentIndex * 100;
        document.querySelector('.heroCarousel').style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextItem, 5500); // Change image every 3 seconds