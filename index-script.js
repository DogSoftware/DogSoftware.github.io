const translations = {
    "en": {
        "title": "DogSoftware - Indie Studio",
        "description": "Indie studio based in 🇬🇷 Greece developing desktop games/applications and mods for existing games such as People Playground",
        "team-title": "Meet the team!",
        "team-description": "Meet the masterminds behind DogSoftware:",
        "Lalekos": "Mr.Lalekos",
        "contributors-title": "Meet the contributors!",
        "contributors-description": "Cool People:",
        "home-link": "Home",
        "contact-link": "Contact Us",
        "projects-link": "Projects",
        "lalekos-title": "Programmer, CEO, Founder, and \"Creative\" Sprite Designer",
        "Spyridon": "Spyridon",
        "spyridon-title": "Idea Guy, Voice Actor",
        "srabb-title": "Patreon (TMP Funding Steam Page), Idea Guy, Helper",
        "EmailInfo": "Feel free to contact us via email for inquiries, support, or any questions you may have.",
        "Question":"Wanna get in touch?",
        "WebApps":"WebApps-OldestToNewest",
        "Games":"Games-OldestToNewest",
        "noble-title": "Programmer",
        "wws-title":"Sound Effects Designer",
        "rocky-title": "Voice Actor"
    },
    "el": {
        "title": "DogSoftware - Ανεξάρτητο Στούντιο",
        "description": "Ανεξάρτητο στούντιο με έδρα την 🇬🇷 Ελλάδα που αναπτύσσει παιχνίδια/εφαρμογές για υπολογιστές και mods για υπάρχοντα παιχνίδια όπως το People Playground",
        "team-title": "Γνωρίστε την ομάδα!",
        "team-description": "Γνωρίστε τους εγκέφαλους πίσω από την DogSoftware:",
        "Lalekos": "Κυρ-Λαλέκος",
        "contributors-title": "Γνωρίστε τους συνεισφέροντες!",
        "contributors-description": "Γαμάτοι Άνθρωποι:",
        "home-link": "Αρχική",
        "contact-link": "Επικοινωνία",
        "projects-link": "Έργα",
        "lalekos-title": "Προγραμματιστής, CEO, Ιδρυτής, και \"Δημιουργικός\" Σχεδιαστής για Sprites",
        "Spyridon": "Σπυρίδον",
        "spyridon-title": "Ιδέες, Ηθοποιός Φωνής",
        "srabb-title": "Patreon (Χρηματοδότηση σελίδας Steam του TMP), Ιδέες, Βοηθός",
        "EmailInfo": "Μη διστάσετε να επικοινωνήσετε μαζί μας μέσω email για ερωτήσεις, υποστήριξη ή οποιαδήποτε άλλη ερώτηση που μπορεί να έχετε!",
        "Question":"Θέλετε να επικοινωνήσετε;",
        "WebApps":"WebApps-ΑπόΠαλαιότεροΣεΝεώτερο",
        "Games":"Παιχνίδια-ΑπόΠαλαιότεροΣεΝεώτερο",
        "noble-title": "Προγραμματιστής",
        "wws-title":"Σχεδιαστής Ηχητικών Εφέ",
        "rocky-title": "Ηθοποιός Φωνής"
    }
};

const translateButton = document.getElementById('translate-button');
let currentLanguage = 'en';

translateButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'el' : 'en';
    translatePage();
});

function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerText = translations[currentLanguage][key];
        }
    });
    document.title = translations[currentLanguage].title;
}
