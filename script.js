const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

// Menu ke kisi link pe click karne pe bhi band ho jaye
navbar.addEventListener('click', (e) => {
    if (e.target.closest('#close') || e.target.closest('a')) {
        navbar.classList.remove('active');
    }
});