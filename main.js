
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


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




const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    alert("Mobil menyu bosildi! Bu yerga animatsiyali menyu qo'shish mumkin.");
});