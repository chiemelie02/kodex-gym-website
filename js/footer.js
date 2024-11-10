// footer.js
document.addEventListener("DOMContentLoaded", function() {
    // Select the container where you want to insert the footer
    const footerContainer = document.getElementById("footer-container");

    // Fetch the footer HTML file
    fetch("footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Failed to load footer");
            return response.text();
        })
        .then(data => {
            // Insert the footer content into the container
            footerContainer.innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});