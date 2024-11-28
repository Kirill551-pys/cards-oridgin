function openVCard(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    window.open('contact.vcf', '_blank');
}

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
});