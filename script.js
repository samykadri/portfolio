let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
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
    strings: ['Marketing Manager', 'Frontend Developer', 'Senior Technician'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("object");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    Email.send({
        SecureToken: "83930c24-f0c9-49b3-a1d0-5dcf52a5b033",
        To: "kadri.samy@ieee.org",
        From: email.value,
        Subject: subject.value,
        Body: `
            <h3>Contact Form Submission</h3>
            <p><strong>Full Name:</strong> ${fullName.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Phone Number:</strong> ${phone.value}</p>
            <p><strong>Message:</strong></p>
            <p>${message.value}</p>
        `
    }).then(response => {
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I'll get back to you soon.",
            showConfirmButton: true
        });
    }).catch(error => {
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            showConfirmButton: true
        });
    });

    form.reset();
});

const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const span = document.getElementsByClassName("close")[0];

const detailedDescriptions = {
    "embedded systems technician": "As an embedded systems technician, I have worked on various projects that focus on the integration of hardware and software. My experience includes designing embedded systems for automation, robotics, and IoT applications. I excel in writing firmware, performing hardware debugging, and ensuring that all components work seamlessly together.",
    "web development": "In my web development role, I focus on creating user-friendly and responsive websites. I utilize modern frameworks and libraries to enhance functionality and user experience. My projects often involve collaborating with clients to understand their needs and translating them into effective web solutions.",
    "marketing manager": "My role as a Marketing Manager involves strategizing and executing marketing campaigns that resonate with our target audience. I analyze market trends and consumer behavior to develop content that engages users across various platforms. My goal is to enhance brand visibility and drive user engagement through innovative marketing strategies."
};
const aboutDescriptions = {
    "about me": "I am a dedicated professional with a passion for technology and innovation. My journey in the tech industry has equipped me with a diverse skill set, and I am committed to continuous learning and growth. I thrive in collaborative environments and enjoy tackling challenging projects that push my limits.",
    "my skills": "I possess a wide range of skills including programming, problem-solving, and project management. My expertise lies in developing user-friendly applications, optimizing processes, and ensuring high-quality deliverables. I am also proficient in various programming languages and frameworks."
};

const readMoreButtons = document.querySelectorAll('.services-box .btn, .about-content .btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        if (this.classList.contains('read-more')) {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');

            modalTitle.innerText = title;
            modalDescription.innerText = description;
        } else {
            const parentBox = this.parentElement;
            const title = parentBox.querySelector('h3').innerText.toLowerCase();

            const description = detailedDescriptions[title] || "No detailed description available.";

            modalTitle.innerText = parentBox.querySelector('h3').innerText;
            modalDescription.innerText = description;
        }

        modal.classList.add("show");
        setTimeout(() => {
            modalContent.classList.add("show");
        }, 10);
    });
});

span.onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function closeModal() {
    modalContent.classList.remove("show");
    setTimeout(() => {
        modal.classList.remove("show");
    }, 500);
}