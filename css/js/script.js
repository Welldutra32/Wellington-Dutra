// Menu transparente ao rolar a página
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";
    } else {
        header.style.background = "rgba(0,0,0,.92)";
        header.style.boxShadow = "none";
    }
});

// Animação ao carregar
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Efeito nos cards
const cards = document.querySelectorAll(".card,.card-imovel");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
