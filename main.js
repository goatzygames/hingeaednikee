/**
 * main.js - Centralized Logic for Hingeaednik.ee
 */

// 1. DATA: Define services first so they are available to all functions
window.services = [
    {
        id: "jooga",
        name: "Joogatunnid",
        description: "Joogatunnid põhinevad kundalini jooga dünaamilistel harjutuskompleksidel...",
        image: "pics/IMG_4098.png",
        price: "Tallinnas ja Märjamaal"
    },
    {
        id: "mentorlus",
        name: "Mentorkohtumised",
        description: "Toetav kuulamine ja juhendamine Sinu enesearengu teel.",
        image: "pics/Ostara.jpg",
        price: ""
    },
    {
        id: "aiandus",
        name: "Aednik",
        description: "2022. aastal täitus üks minu järjekordsetest suurtest unistustest...",
        image: "pics/aednik.jpg",
        price: "Aiahooldus, istutusalade rajamine, nõustamine"
    }
];

// 2. HELPER FUNCTIONS: For LocalStorage (Optional but kept from your draft)
function setSelectedService(id) {
    localStorage.setItem("selectedService", id);
}

function getSelectedService() {
    const id = localStorage.getItem("selectedService");
    return window.services.find(s => s.id === id);
}

// 3. HEADER INJECTION: Injects the HTML and sets up the mobile menu
function injectHeader() {
    const headerContainer = document.querySelector('.main-header-insert');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
    <header style="position: fixed;">
      <div class="logo" style="position: relative;">
        <a href="/">
          <img src="pics/Logo_ümmargune_tekstita-Photoroom.png" alt="Site Logo">
        </a>
      </div>
      <nav>
        <ul class="nav-links">
          <li><a href="/">Avaleht</a></li>
          <li><a href="teenused.html">Teenused</a></li>
          <li><a href="blogi.html">Blogi</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </nav>
      <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </header>
    `;

    // Mobile Menu Logic (Hamburger)
    const hb = headerContainer.querySelector('.hamburger');
    const nv = headerContainer.querySelector('nav');
    
    if (hb && nv) {
        hb.addEventListener('click', () => {
            const isOpen = hb.classList.toggle('open');
            nv.classList.toggle('open');
            hb.setAttribute('aria-expanded', isOpen);
        });
    }
}

// 4. INITIALIZATION: Run when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    // Inject the header onto the page
    injectHeader();

    // Handle "cta" button if it exists on the page
    const ctaBtn = document.getElementById('cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            alert('Aitäh huvi eest! Suuname sind peagi edasi.');
        });
    }

    // Handle "goToContact" if it exists on the page
    const contactBtn = document.getElementById('goToContact');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const idInput = document.getElementById('userIdInput');
            const idValue = idInput ? idInput.value.trim() : "";
            if (idValue) {
                window.location.href = `contact.html?id=${encodeURIComponent(idValue)}`;
            } else {
                alert('Palun sisesta ID');
            }
        });
    }
});