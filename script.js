document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger');
    const headerNav = document.querySelector('.header-nav');
    const overlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.header-nav a');

    function toggleMenu() {
        const isOpen = burgerBtn.classList.toggle('is-active');
        headerNav.classList.toggle('is-active');
        overlay.classList.toggle('is-active');
        document.body.classList.toggle('menu-open', isOpen);
        
        burgerBtn.setAttribute('aria-expanded', isOpen);
    }

    // Événements
    burgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Fermeture automatique lors du clic sur un lien du menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (headerNav.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });
});
/*
const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header-nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
*/

// ==================================================
// FAQ — ACCORDÉON FLUIDE
// ==================================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", e => {
        e.preventDefault();

        const isOpen = item.open;

        // Fermer les autres questions avec animation
        faqItems.forEach(otherItem => {

            if (otherItem !== item && otherItem.open) {

                const otherAnswer = otherItem.querySelector(".faq-answer");

                // Fixe la hauteur actuelle
                otherAnswer.style.maxHeight = otherAnswer.scrollHeight + "px";

                // Lance la fermeture
                requestAnimationFrame(() => {
                    otherAnswer.style.maxHeight = "0";
                });

                // Retire "open" seulement après l'animation
                otherAnswer.addEventListener("transitionend", () => {
                    otherItem.open = false;
                }, { once: true });
            }
        });

        // OUVERTURE
        if (!isOpen) {

            item.open = true;

            answer.style.maxHeight = "0";

            requestAnimationFrame(() => {
                answer.style.maxHeight = answer.scrollHeight + "px";
            });

            answer.addEventListener("transitionend", () => {
                if (item.open) {
                    answer.style.maxHeight = "none";
                }
            }, { once: true });

        }

        // FERMETURE en cliquant sur la question déjà ouverte
        else {

            answer.style.maxHeight = answer.scrollHeight + "px";

            requestAnimationFrame(() => {
                answer.style.maxHeight = "0";
            });

            answer.addEventListener("transitionend", () => {
                item.open = false;
            }, { once: true });
        }
    });
});

function copierEmail(event) {
    const email = "gaia.escapades@gmail.com";

    navigator.clipboard.writeText(email);
}


document.addEventListener('DOMContentLoaded', function () {

    const pins = document.querySelectorAll('.pin-destination');
    const blocs = document.querySelectorAll('.Japon, .Corfou, .Canaries, .Sicile, .Italie, .Andalousie, .Corse');
    const invite = document.getElementById('inviteCarte');

    function activerDestination(nom) {

        pins.forEach(function (pin) {
            const estCible = pin.dataset.cible === nom;
            pin.classList.toggle('est-actif', estCible);
            pin.setAttribute('aria-pressed', estCible ? 'true' : 'false');
        });

        blocs.forEach(function (bloc) {
            bloc.classList.toggle('est-visible', bloc.classList.contains(nom));
        });

        if (invite) {
            invite.style.display = 'none';
        }

        const blocActif = document.querySelector('.est-visible');
        if (blocActif) {
            blocActif.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    pins.forEach(function (pin) {
        pin.addEventListener('click', function () {
            activerDestination(pin.dataset.cible);
        });
    });

});