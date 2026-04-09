document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const exploreButtons = document.querySelectorAll('.btn-outline');
    const closeButtons = document.querySelectorAll('.close');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navAnchors.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    exploreButtons.forEach(button => {
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);
        if (!modal) return;
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
