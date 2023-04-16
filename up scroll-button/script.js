const btn = document.querySelector('.up-button');

function disabled() {
    btn.classList.add('btn-hidden');
};

function active() {
    btn.classList.remove('btn-hidden');
};

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset
    scroll > 100 ? active() : disabled()
}, { passive: true });

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
