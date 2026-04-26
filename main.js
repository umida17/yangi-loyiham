
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



let count = 0;

function addData() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('dataList');
    const status = document.getElementById('status');
    const countDisplay = document.getElementById('count');

    if (input.value.trim() === "") {
        alert("Iltimos, biror narsa yozing!");
        return;
    }

     status.style.display = "none";

     const li = document.createElement('li');
    li.innerHTML = `✅ ${input.value} <small>(${new Date().toLocaleTimeString()})</small>`;
    li.style.padding = "8px 0";
    li.style.borderBottom = "1px solid #f0f0f0";
    li.style.listStyle = "none";
    
     list.appendChild(li);
    
     count++;
    countDisplay.innerText = count;

     input.value = "";
}

function clearAll() {
    document.getElementById('dataList').innerHTML = "";
    document.getElementById('status').style.display = "block";
    document.getElementById('count').innerText = "0";
    count = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

     const revealOnScroll = () => {
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (cardTop < triggerPoint) {
                 setTimeout(() => {
                    card.classList.add('revealed');
                }, index * 150); 
            }
        });
    };

     cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

     window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  
});

