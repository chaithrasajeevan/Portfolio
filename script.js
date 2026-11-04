
// MOBILE NAVIGATION

const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {
    revealElements.forEach(function (element) {
        element.classList.add("active");
    });
}


const glow = document.querySelector(".mouse-glow");

if (glow) {

    if (window.matchMedia("(pointer: fine)").matches) {

        document.addEventListener("mousemove", function (e) {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        });

    } else {
        glow.style.display = "none";
    }

}


const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


console.log("Welcome to my portfolio!");
