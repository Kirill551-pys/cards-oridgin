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

    const contacts = [
        {
            name: "Алина Бекер",
            phone: "748293944",
            email: "ydydtakd@maulmr"
        },
    ];

    document.getElementById('exportVCard').addEventListener('click', function() {
        const vCard = new VCard();

        contacts.forEach(contact => {
            vCard.addName(contact.name);
            vCard.addTelephone(contact.phone);
            vCard.addEmail(contact.email);
        });

        const vCardData = vCard.toString();
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'contacts.vcf';
        link.click();
    });
});