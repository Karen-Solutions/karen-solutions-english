// ==========================================
// KAREN SOLUTIONS: MY ENGLISH JOURNEY
// JavaScript
// ==========================================


// ==========================================
// 1. MOBILE MENU
// ==========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after selecting an option
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================================
// 2. BLOG POST ANIMATIONS
// ==========================================

const posts = document.querySelectorAll(".post-card");

const observerOptions = {
    threshold: 0.15
};

const postObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

}, observerOptions);


// Observe every blog post
posts.forEach((post) => {
    postObserver.observe(post);
});


// ==========================================
// 3. NAVIGATION ACTIVE SECTION
// ==========================================

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });


    menuLinks.forEach((link) => {

        link.classList.remove("current");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("current");
        }

    });

});


// ==========================================
// 4. HEADER SHADOW WHEN SCROLLING
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 25px rgba(37, 40, 61, 0.08)";

    } else {

        header.style.boxShadow = "none";
    }

});


// ==========================================
// 5. AUTOMATIC COPYRIGHT YEAR
// ==========================================

const copyright =
    document.getElementById("copyright");

const currentYear =
    new Date().getFullYear();

copyright.textContent =
    `© ${currentYear} Karen Solutions. English Learning Project.`;


// ==========================================
// 6. CONSOLE MESSAGE
// ==========================================

console.log(
    "Karen Solutions: My English Journey loaded successfully."
);