

// Back to top Button 

// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 200px from the top of the page
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "flex";
        backToTopBtn.style.justifyContent = "center";
        backToTopBtn.style.alignItems = "center";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the button is clicked, scroll to the top of the document smoothly
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// FAQ 
// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", function() {
        // Toggle the "active" class to rotate the arrow
        this.classList.toggle("active");

        // Get the corresponding answer div
        const answer = this.nextElementSibling;

        // Toggle display of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

