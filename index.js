document.addEventListener('DOMContentLoaded', () => {
    const servicesTitle = document.querySelector('.services-title');
    const servicesModal = document.getElementById('servicesModal');
    const closeButton = document.querySelector('.close-button');

    servicesTitle.addEventListener('click', () => {
        servicesModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        servicesModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === servicesModal) {
            servicesModal.style.display = 'none';
        }
    });

    document.getElementById('addContactLink').addEventListener('click', function(event) {
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

        const vCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;

        window.open(vCardUrl);
    });
});