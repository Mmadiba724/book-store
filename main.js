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
    const cardWidth = carousel.querySelector("a").offsetWidth;
    const gap = 16;

    nextArrow.addEventListener("click", () => {
        const scrollAmount =
            window.innerWidth < 768 ? cardWidth + gap : (cardWidth + gap) * 2;
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });

    prevArrow.addEventListener("click", () => {
        const scrollAmount =
            window.innerWidth < 768 ? cardWidth + gap : (cardWidth + gap) * 2;
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });

    carousel.addEventListener("scroll", () => {

        if (window.innerWidth < 768) {
            prevArrow.style.display = carousel.scrollLeft > 0 ? "block" : "none";
            nextArrow.style.display =
                carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth
                    ? "block"
                    : "none";
        }
    });

    if (window.innerWidth < 768) {
        prevArrow.style.display = carousel.scrollLeft > 0 ? "block" : "none";
        nextArrow.style.display = carousel.scrollWidth - carousel.clientWidth
            ? "block"
            : "none";
    }
}
