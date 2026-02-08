// FAQ панель
const faqBtn = document.getElementById('faqBtn');
const faqPanel = document.getElementById('faqPanel');
faqBtn.addEventListener('click', () => {
    faqPanel.style.display = faqPanel.style.display === 'block' ? 'none' : 'block';
});

// Вкладки
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        contents.forEach(c => c.style.display='none');
        document.getElementById(tab.dataset.tab).style.display='block';
    });
});

// Поиск профиля
const searchInput = document.getElementById('search');
const profileCards = document.querySelectorAll('.profile-card');
searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    profileCards.forEach(card => {
        card.style.display = card.dataset.name.toLowerCase().includes(term) ? 'block' : 'none';
    });
});

// Показ полного описания при клике
profileCards.forEach(card => {
    card.addEventListener('click', () => {
        const full = card.querySelector('.profile-full');
        full.style.display = full.style.display === 'block' ? 'none' : 'block';
    });
});