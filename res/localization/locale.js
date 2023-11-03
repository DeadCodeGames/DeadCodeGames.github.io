function loadLocalization() {
    const userLanguages = navigator.languages;
    for (const language of userLanguages) {
        const languageCode = language.split('-')[0];

        if (languageCode === 'en') {
            return;
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
        return;
    }
}

document.addEventListener('DOMContentLoaded', loadLocalization);
