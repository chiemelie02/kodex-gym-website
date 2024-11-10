const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (index + testimonials.length) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
}

// Show next and previous testimonials when arrows are clicked
document.querySelector('.right-arrow').addEventListener('click', () => {
    showTestimonial(currentIndex + 1);
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    showTestimonial(currentIndex - 1);
});

// Autoplay functionality
setInterval(() => showTestimonial(currentIndex + 1), 7000);