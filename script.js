const cards = document.querySelectorAll(".product-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

const phone = document.querySelector(".phone");

phone.addEventListener("mouseenter", () => {
  phone.style.transform = "rotate(0deg) translateY(-12px)";
});

phone.addEventListener("mouseleave", () => {
  phone.style.transform = "rotate(3deg)";
});
