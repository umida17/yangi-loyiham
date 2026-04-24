// Navigatsiya fonini o'zgartirish (Scroll bo'lganda)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll Reveal (Elementlar paydo bo'lishi)
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// CSS uchun qo'shimcha klass (JS orqali boshqarish uchun)
// style.css faylingizga quyidagilarni ham qo'shing:
/*
.hidden { opacity: 0; transform: translateY(30px); transition: 1s all ease; }
.show { opacity: 1; transform: translateY(0); }
*/

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    alert("Mobil menyu bosildi! Bu yerga animatsiyali menyu qo'shish mumkin.");
});