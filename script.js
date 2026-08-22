// ===============================
// Apple Website JavaScript
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.85)";
        navbar.style.boxShadow = "none";
    }
});

// Reveal animation
const revealElements = document.querySelectorAll(
    ".card, .spec-card, .feature, .color-item"
);

const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Success popup after form submission
const params = new URLSearchParams(window.location.search);

if (params.get("success") === "1") {
    alert("✅ Your iPhone order has been submitted successfully!");
}