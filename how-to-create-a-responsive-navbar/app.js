document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const pageLinks = document.querySelectorAll(".links a");

    navToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Olayın yayılmasını durdur
        navLinks.classList.toggle("show-links");
    });

    // Diğer sayfa linklerine fare geldiğinde renk ve boyut değişikliği
    pageLinks.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            link.style.color = "var(--clr-primary-5)"; // İstenilen renk
            link.style.fontSize = "1.2rem"; // İstenilen boyut
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "var(--clr-grey-3)"; // Normal renk
            link.style.fontSize = "1rem"; // Normal boyut
        });
    });
});
