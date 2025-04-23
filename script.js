// Modal functionality
const modals = document.querySelectorAll('.modal');
const exploreButtons = document.querySelectorAll('.btn-explore');
const closeButtons = document.querySelectorAll('.close');

// Open modal
exploreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Close modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});