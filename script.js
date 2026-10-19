// 1. Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// 2. Smooth Scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking a link
        navLinks.classList.remove("active");
    });
});

// 3. Simple Form Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop form from actually submitting
    
    if (nameInput.value.trim() === "") {
        errorMsg.style.display = "block"; // Show error
    } else {
        errorMsg.style.display = "none"; // Hide error
        alert("Message sent successfully!");
        form.reset(); // Clear the form
    }
});