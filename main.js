// main.js

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('cta');
  
  btn.addEventListener('click', () => {
    alert('Button Placeholder — toiming siia');
  });
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');

  // Update aria-expanded for accessibility
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});

}

// main.js
	window.services = [
    {
        id: 1,
        name: "Joogatunnid",
        description: "Joogatunnid põhinevad kundalini jooga dünaamilistel harjutuskompleksidel. Tunnid on mitmekesised sisaldades nii füüsilisi harjutusi, hingamispraktikaid kui meditatsiooni ning on sobilikud nii algajatele kui edasijõudnutele. Pikemaajalisel jooga praktiseerimisel saame kehaga paremasse kontakti ja see muutub paindlikumaks. Kui tunneme end oma kehas hästi, on ka meel rahulikum ja süda kergem. Meis on rohkem positiivsust ja teotahet. <br><br>Tihtipeale takerdume me liigse peas olemise tõttu ülemõtlemisse. Mentaalselt jääme kinni oma lugudesse, hinnangutesse ja hirmudesse. Selline pingestatus pärsib omakorda meie emotsionaalset toimetulekut ning suhted iseenda ja oma lähedastega võivad kannatada. Siis ei toimi me igapäevaselt oma parimal võimalikul moel. Igatsus tunda hingerahu ja füüsilist lõdvestust on hea põhjus liituda meie joogagrupiga. <br><br>Ole hea ja anna teada kui tegeled aktiivselt mõne tervisemurega, et oskaksin sellega tunni läbiviimise ajal arvestada.",
        image: "pics/IMG_4098.png",
        price: "Tallinnas ja Märjamaal"
    },
    {
        id: 2,
        name: "Mentorlus",
        description: "<br>Minu õpetajateks on olnud:<br><br> tugeva distsipliiniga Tallinna 7. keskkool;<br>13 aasta pikkune sulgpallikarjäär (mitmekordne noorte ja täiskasvanute Eesti meister);<br>20 aasta pikkune abielu, mu kaks poega ning rahumeelne ja kõiki osalisi säästev abielulahutus;<br>põnevaid projekte täis tööelu (muusikalide tõlk ja trupijuht, Koolitantsu produtsent-projektijuht, väliskaubanduskoja juhataja, Vaikuseminutite koolitusjuht ja konverentside korraldaja, eraettevõtja, Sunergose assistent-arengupartner);<br>läbipõlemine ja sellest taastumise pikk teekond;<br>12 aasta pikkune kundalini jooga praktiseerimine, sh õpetajana;<br>kogemusnõustajate koolitus;<br>erinevatest tervisemuredest läbi navigeerimine ja tänu neile endale sobiva ja tervisliku eluviisi loomine.<br><br>Need kogemused on mh toonud:<br><br> oma maailmavaate radikaalse ümberhindamise;<br> tugeva isikliku transformatsiooni;<br> kriisidest edasiviivalt läbi navigeerimise kogemuse;<br> elutee, mis on hingega kooskõlas;<br> õnnetunde, hingerahu ja usalduse;<br> armastava suhte iseendaga;<br> teadliku ja püha paarisuhte.",
        image: "pics/Kelli 2025.jpg",
        price: "Eneseareng: elevusega elatud elu"
    },
    {
        id: 3,
        name: "Aednik",
        description: "Aednik\n\n2022. aastal täitus üks minu järjekordsetest suurtest unistustest – leidsime elukaaslasega Eestimaa looduses kauni maatüki, kuhu luua oma põliskodu.\n\n2023. astusin ma Räpina Aianduskooli aedniku 4. taseme kutseõppesse, et mul tekiks vundament, millele ehitada üles oma teadlikum suhe loodusega.\n\n2024 suvi oli väga intensiivne rajades oma aiamaa 200 m2 nn katsepolügoni.\n\n2025 juunis omandasin aedniku kutse.<br><br>nKooli õppetöö osaks oli ka 156h praktikat, mille läbisin tervenisti koduaednik.ee tiimiga peamiselt lõigates viljapuid ning rajades erinevaid haljasalasid ja muru.\n\n\n<br><br>Oma katsepolügoonil kasvatan endale ja oma perele toitu (köögivilju, marju), olen rajanud lillepõllu ning meil on ka 3 ha põldu, kus tegeleme esialgu savika maa parandamisega.\n\nVisioon on muuta see maa-ala agrometsanduse meetodil selliseks, mis toidaks nii keha kui hinge.",
        image: "pics/aednik.jpg",
        price: "Aiahooldus, istutusalade rajamine, nõustamine"
    }
];

// Save services globally so both pages can use it
window.services = services;

function setSelectedService(id) {
    localStorage.setItem("selectedService", id);
}

// Get the selected service object
function getSelectedService() {
    const id = parseInt(localStorage.getItem("selectedService"), 10);
    return services.find(s => s.id === id);
}

document.getElementById('goToContact').addEventListener('click', () => {
  const id = document.getElementById('userIdInput').value.trim();
  if (id) {
    // Open contact.html with ?id=ID in URL
    window.location.href = `contact.html?id=${encodeURIComponent(id)}`;
  } else {
    alert('Please enter an ID');
  }
});

