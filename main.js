// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect for the Hero Section
const typed = new Typed('.text', {
    strings: ['Front End Developer', 'Web Designer', 'Vlogger'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Form Validation
const form = document.querySelector('.Form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('.button');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields');
    } else if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
    } else {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.className = 'scrollToTop';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Display the Scroll to Top Button with Style
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #0074d9;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
`;
