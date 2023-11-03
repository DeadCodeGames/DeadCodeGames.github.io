function loadLocalization() {
    const userLanguages = navigator.languages;
    for (const language of userLanguages) {
        const languageCode = language.split('-')[0];

        if (languageCode === 'en') {
            break;
        };

        fetch(`/res/localization/${languageCode}.json`).then((response) => response.json()).then((translations) => {
                const translate = document.querySelectorAll('[string]');
                translate.forEach((element) => {
                    const string = element.getAttribute('string');
                    if (translations[string]) {
                        element.textContent = translations[string];
                    }
                });
            })
            .catch((error) => {
                console.error('Error loading localization:', error);
            });
    }
}

// Call the loadLocalization function when the document is ready
document.addEventListener('DOMContentLoaded', loadLocalization);
