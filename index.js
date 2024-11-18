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
});