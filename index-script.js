const translations = {
    "en": {
        "title": "DogSoftware - Indie Studio",
        "description": "Indie studio based in 🇬🇷 Greece developing desktop games/applications",
        "team-title": "Meet the team!",
        "team-description": "Meet the masterminds behind DogSoftware:",
        "Lalekos": "Alektron",
        "contributors-title": "Meet the contributors!",
        "contributors-description": "Cool People:",
        "home-link": "Home",
        "contact-link": "Contact Us",
        "projects-link": "Projects",
		"about-link": "About",
        "lalekos-title": "Programmer",
        "Spyridon": "Spyridon",
        "spyridon-title": "Idea Guy, Voice Actor",
        "srabb-title": "Music&SFX Artist",
        "EmailInfo": "Feel free to contact us via email for inquiries, support, or any questions you may have.",
        "Question":"Wanna get in touch?",
        "WebApps":"WebApps-OldestToNewest",
        "Games":"Games-OldestToNewest",
        "noble-title": "Programmer",
        "rocky-title": "Voice Actor",
        "Jam2":"Cool and satisfying game in 16 hours? #2 - Winners",
        "rust-title":"Artist",
        "AboutDS-Title": "About DogSoftware",
        "About-desc":"DogSoftware was founded back in July of 2021 by Alektron and evolved from basically solo projects to a ''family team thing'' with Henry, Srabb and Rust. Right now working on the ''modern'' version of MAD2 (by the way we call it The Mayhem Playground) but mostly ''inspired'' from Mestiez's People Playground."
    },
    "el": {
        "title": "DogSoftware - Ανεξάρτητο Στούντιο",
        "description": "Ανεξάρτητο στούντιο με έδρα την 🇬🇷 Ελλάδα που αναπτύσσει παιχνίδια/εφαρμογές για υπολογιστές",
        "team-title": "Γνωρίστε την ομάδα!",
        "team-description": "Γνωρίστε τους εγκέφαλους πίσω από την DogSoftware:",
        "Lalekos": "Κυρ-Αλέξανδρος",
        "contributors-title": "Γνωρίστε τους συνεισφέροντες!",
        "contributors-description": "Γαμάτοι Άνθρωποι:",
        "home-link": "Αρχική",
        "contact-link": "Επικοινωνία",
        "projects-link": "Έργα",
		"about-link": "Σχετικά με την DS",
        "lalekos-title": "Προγραμματιστής",
        "Spyridon": "Σπυρίδον",
        "spyridon-title": "Ιδέες, Ηθοποιός Φωνής",
        "srabb-title": "Μουσική&SFX Σχεδιαστής",
        "EmailInfo": "Μη διστάσετε να επικοινωνήσετε μαζί μας μέσω email για ερωτήσεις, υποστήριξη ή οποιαδήποτε άλλη ερώτηση που μπορεί να έχετε!",
        "Question":"Θέλετε να επικοινωνήσετε;",
        "WebApps":"WebApps-ΑπόΠαλαιότεροΣεΝεώτερο",
        "Games":"Παιχνίδια-ΑπόΠαλαιότεροΣεΝεώτερο",
        "noble-title": "Προγραμματιστής",
        "rocky-title": "Ηθοποιός Φωνής",
        "Jam2":"Γαμάτο και satisfying παιχνίδι σε 16 ώρες; #2 - Νικητές",
        "rust-title":"Καλλιτέχνης",
        "AboutDS-Title": "Σχετικά με την DS",
        "About-desc":"Η DogSoftware ιδρύθηκε τον Ιούλιο του 2021 από τον Κυρ-Αλέξανδρο και το στούντιο γενικότερα εξελίχθηκε με απλά λόγια από solo έργα σε μια «οικογενειακή ομάδα» με τους Henry, Srabb και Rust. Αυτή τη στιγμή δουλεύουμε πάνω στη «μοντέρνα» έκδοση του MAD2 (παρεμπιπτόντως το αποκαλούμε The Mayhem Playground), αλλά κυρίως είμαστε <<εμπνευσμένοι>> από το People Playground του Mestiez."
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

// Slideshow Crap
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500);
} 
