
// Гамбургер меню
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
menuBtn.addEventListener('click', () => {
    sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
});

// Модальное окно инфо
const infoBtn = document.getElementById('infoBtn');
const infoModal = document.getElementById('infoModal');
const closeInfo = document.getElementById('closeInfo');
infoBtn.addEventListener('click', () => { infoModal.style.display='flex'; });
closeInfo.addEventListener('click', () => { infoModal.style.display='none'; });
window.addEventListener('click', e => { if(e.target === infoModal) infoModal.style.display='none'; });

// Вкладки
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        tabBtns.forEach(b=>b.classList.remove('active'));
        tabPanes.forEach(p=>p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Фильтр профилей
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const profiles = document.querySelectorAll('.profile-card');

function filterProfiles(){
    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    profiles.forEach(p=>{
        const name = p.querySelector('h2').textContent.toLowerCase();
        const nick = p.querySelector('.nick').textContent.toLowerCase();
        const matchesSearch = name.includes(search) || nick.includes(search);
        const matchesCategory = category==='all' || p.dataset.category===category;
        p.style.display = (matchesSearch && matchesCategory)?'inline-block':'none';
    });
}

searchInput.addEventListener('input', filterProfiles);
categoryFilter.addEventListener('change', filterProfiles);

// Модальное окно профиля
profiles.forEach(p=>{
    p.addEventListener('click', ()=>{
        const desc = p.querySelector('.desc').textContent;
        alert(desc); // можно заменить на модальное окно
    });
});