document.addEventListener('DOMContentLoaded', () => {
    const servicesTitle = document.querySelector('.services-title');
    const servicesModal = document.getElementById('servicesModal');
    const closeButton = document.querySelector('.close-button');

    // Открытие модального окна
    servicesTitle.addEventListener('click', () => {
        servicesModal.style.display = 'block';
    });

    // Закрытие модального окна
    closeButton.addEventListener('click', () => {
        servicesModal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === servicesModal) {
            servicesModal.style.display = 'none';
        }
    });

    // Обработчик для добавления контакта
    const addContactLink = document.getElementById('addContactLink');
    if (addContactLink) {
        addContactLink.addEventListener('click', function(event) {
            event.preventDefault(); 

            const name = "Алина Бекер"; 
            const phone = "+79277081314";
            const email = "aba@beker-partners.ru"; 

            const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${encodeURIComponent(name)}
TEL:${encodeURIComponent(phone)}
EMAIL:${encodeURIComponent(email)}
END:VCARD
`.trim();

            console.log(vCardData); 

            const vCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;

            window.open(vCardUrl);
        });
    }
});