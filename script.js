// Гамбургер
const burger = document.getElementById('burger');
const menu = document.getElementById('burger-menu');
burger.addEventListener('click', () => {
    if(menu.style.left === "0px") menu.style.left = "-250px";
    else menu.style.left = "0px";
});

// Таб вкладки
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active-tab-btn'));
        btn.classList.add('active-tab-btn');
        const tab = btn.dataset.tab;
        tabContents.forEach(c => c.classList.remove('active'));
        document.getElementById(tab).classList.add('active');
    });
});

// FAQ модалка
const faqBtn = document.getElementById('faq-btn');
const faqModal = document.getElementById('faq-modal');
const faqClose = faqModal.querySelector('.close');
faqBtn.addEventListener('click', ()=>faqModal.style.display='flex');
faqClose.addEventListener('click', ()=>faqModal.style.display='none');
window.addEventListener('click', e => {if(e.target==faqModal) faqModal.style.display='none';});

// Профили
const profileCards = document.querySelectorAll('.profile-card');
const profileModal = document.getElementById('profile-modal');
const profileClose = profileModal.querySelector('.close');
const modalAvatar = document.getElementById('modal-avatar');
const modalName = document.getElementById('modal-name');
const modalStatus = document.getElementById('modal-status');
const modalDesc = document.getElementById('modal-description');

profileCards.forEach(card => {
    card.addEventListener('click', () => {
        modalAvatar.src = card.querySelector('.profile-avatar').src;
        modalName.textContent = card.querySelector('h3').textContent;
        modalStatus.innerHTML = Array.from(card.querySelectorAll('.profile-pre')).map(p=>p.outerHTML).join('');
        modalDesc.innerHTML = card.querySelector('.profile-description').innerHTML;
        profileModal.style.display = 'flex';
    });
});
profileClose.addEventListener('click', ()=>profileModal.style.display='none');
window.addEventListener('click', e => {if(e.target==profileModal) profileModal.style.display='none';});

// Поиск по листу
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', ()=>{
    const val = searchInput.value.toLowerCase();
    profileCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(val)?'block':'none';
    });
});