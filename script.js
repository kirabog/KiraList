// Гамбургер меню
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
menuBtn.addEventListener('click', () => {
    sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
});

// Вкладки
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Модальное окно профиля
const profile = document.getElementById('kiraProfile');
const modal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeModal');

profile.addEventListener('click', () => { modal.style.display = 'flex'; });
closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });