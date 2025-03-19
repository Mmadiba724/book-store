const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("flex");
    if (isOpen) {
        menu.classList.remove("flex", "flex-col", "top-0");
        menu.classList.add("hidden", "-top-full");
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
    } else {
        menu.classList.remove("hidden", "-top-full");
        menu.classList.add("flex", "flex-col", "top-0");
        menuIcon.classList.remove("bi-list");
        menuIcon.classList.add("bi-x");
    }
});

menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("flex", "flex-col", "top-0");
        menu.classList.add("hidden", "-top-full");
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
    });
});

const carousel = document.querySelector(".carousel");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

if (carousel && prevArrow && nextArrow) {

    carousel.scrollLeft = 0;

    let cardWidth;
    const updateCardWidth = () => { 
        cardWidth = carousel.querySelector("div").offsetWidth;
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    const gap = 16;

    nextArrow.addEventListener("click", () => {
        const scrollAmount =cardWidth + gap;
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });

    prevArrow.addEventListener("click", () => {
        const scrollAmount =cardWidth + gap;
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });

    carousel.addEventListener("scroll", () => {
        if (window.innerWidth < 768) {
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth - 1;
            prevArrow.style.display = carousel.scrollLeft > 1 ? "block" : "none";
            nextArrow.style.display = carousel.scrollLeft < maxScrollLeft ? "block" : "none";
        }
    });

    if (window.innerWidth < 768) {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth - 1;
        prevArrow.style.display = carousel.scrollLeft > 1 ? "block" : "none";
        nextArrow.style.display = carousel.scrollWidth < maxScrollLeft ? "block": "none";
    }
}
