const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-main');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav-main_links');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.remove('open');
    });
});