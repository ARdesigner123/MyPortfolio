let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('stickly', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Game Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobileNumber = document.getElementById("mobileNumber").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Clear previous errors
    errorMessage.style.display = "none";
    errorMessage.innerText = "";

    // Name validation (only letters and spaces)
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!fullName.match(nameRegex) || fullName.length < 2) {
        errorMessage.innerText = "Please enter a valid name (only letters).";
        errorMessage.style.display = "block";
        return;
    }

    // Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        errorMessage.innerText = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return;
    }

    // Mobile number validation (only numbers, 8-15 digits)
    let mobileRegex = /^[0-9]{8,15}$/;
    if (!mobileNumber.match(mobileRegex)) {
        errorMessage.innerText = "Please enter a valid mobile number (8-15 digits).";
        errorMessage.style.display = "block";
        return;
    }

    // Subject validation (at least 3 characters)
    if (subject.length < 3) {
        errorMessage.innerText = "Subject must be at least 3 characters long.";
        errorMessage.style.display = "block";
        return;
    }

    // Message validation (at least 10 characters)
    if (message.length < 10) {
        errorMessage.innerText = "Message must be at least 10 characters long.";
        errorMessage.style.display = "block";
        return;
    }

    // Sanitize input to prevent XSS attacks
    function sanitizeInput(input) {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    fullName = sanitizeInput(fullName);
    email = sanitizeInput(email);
    subject = sanitizeInput(subject);
    message = sanitizeInput(message);

    // Success message
    alert("Your message has been sent successfully!");

    // Reset form fields
    document.getElementById("contactForm").reset();
});