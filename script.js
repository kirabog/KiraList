// Пользователи
const users = [
  {
    nickname: "Kira всевышний",
    tg: "@empered",
    avatar: "KiraListBaza/kira.jpg",
    description: "ⓘ Профиль верифицирован✅\nⓘ Премиум активен\nⓘ Закрепленно\nⓘ Кастом нет\n\nОписание профиля: Я всевышний Kira, делюсь знаниями и секретами."
  },
  {
    nickname: "Peace | Гештальт юз",
    tg: "@izrezal",
    avatar: "KiraListBaza/peace.jpg",
    description: "ⓘ Профиль верифицирован✅\nⓘ Премиум активен\nⓘ Закрепленно\nⓘ Кастом нет\n\nОписание: Peace, гештальт юзер, учимся и делимся."
  }
];

// Вкладки
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    contents.forEach(c=>c.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// FAQ
document.getElementById('faq-btn').addEventListener('click',()=>{
  document.getElementById('faq-modal').style.display='flex';
});
function closeFaq(){document.getElementById('faq-modal').style.display='none';}

// Генерация профилей
const userContainer = document.getElementById('user-list');

function renderUsers(list){
  userContainer.innerHTML='';
  list.forEach(user=>{
    const card=document.createElement('div');
    card.className='user-card';
    card.innerHTML=`
      <img src="${user.avatar}" alt="${user.nickname}">
      <h3>${user.nickname}</h3>
      <p>${user.tg}</p>
    `;
    card.addEventListener('click',()=>showProfile(user));
    userContainer.appendChild(card);
  });
}

renderUsers(users);

// Поиск
document.getElementById('search').addEventListener('input',(e)=>{
  const term=e.target.value.toLowerCase();
  renderUsers(users.filter(u=>u.nickname.toLowerCase().includes(term) || u.tg.toLowerCase().includes(term)));
});

// Модалка профиля
function showProfile(user){
  const modal=document.getElementById('profile-modal');
  modal.innerHTML=`
    <div class="modal-content">
      <span class="close-btn" onclick="closeProfile()">&times;</span>
      <img src="${user.avatar}">
      <h2>${user.nickname}</h2>
      <p>${user.tg}</p>
      <p>${user.description.replace(/\n/g,'<br>')}</p>
    </div>
  `;
  modal.style.display='flex';
}
function closeProfile(){document.getElementById('profile-modal').style.display='none';}