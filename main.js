/**
 * main.js - Centralized Logic for Hingeaednik.ee
 */

// 1. DATA: Define services first
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

// 2. HELPER FUNCTIONS
function setSelectedService(id) {
    localStorage.setItem("selectedService", id);
}

function getSelectedService() {
    const id = localStorage.getItem("selectedService");
    return window.services.find(s => s.id === id);
}

// 3. HEADER INJECTION
function injectHeader() {
    const headerContainer = document.querySelector('.main-header-insert');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
    <header style="position: fixed; top: 0; width: 100%; z-index: 1000;">
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

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // 1. Always try to inject header
    injectHeader();

    // 2. Safely handle "cta" button
    const ctaBtn = document.getElementById('cta');
    if (ctaBtn !== null) {
        ctaBtn.addEventListener('click', () => {
            alert('Aitäh huvi eest! Suuname sind peagi edasi.');
        });
    }

    // 3. Safely handle "goToContact" logic
    const contactBtn = document.getElementById('goToContact');
    if (contactBtn !== null) {
        contactBtn.addEventListener('click', () => {
            const idInput = document.getElementById('userIdInput');
            if (idInput) {
                const idValue = idInput.value.trim();
                if (idValue) {
                    window.location.href = `kontakt.html?id=${encodeURIComponent(idValue)}`;
                } else {
                    alert('Palun sisesta ID');
                }
            }
        });
    }

    // 4. Safely handle "openTeenused" buttons from your HTML
    const teenusedBtns = document.querySelectorAll('#openTeenused, .openTeenused');
    teenusedBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = "teenused.html";
        });
    });
});