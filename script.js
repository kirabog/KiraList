// TAB SWITCH
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        tabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(tc=>tc.style.display='none');
        document.getElementById(tab.dataset.tab).style.display='block';
    });
});

// INFO PANEL
const infoBtn=document.getElementById('infoBtn');
const infoPanel=document.getElementById('infoPanel');
document.getElementById('closeInfo').addEventListener('click',()=>infoPanel.style.display='none');
infoBtn.addEventListener('click',()=>infoPanel.style.display='block');

// PROFILE MODAL
const profileModal=document.getElementById('profileModal');
const modalAvatar=document.getElementById('modalAvatar');
const modalName=document.getElementById('modalName');
const modalTg=document.getElementById('modalTg');
const modalDescription=document.getElementById('modalDescription');
const verifiedIcon=document.getElementById('verifiedIcon');
const premiumIcon=document.getElementById('premiumIcon');
const pinnedIcon=document.getElementById('pinnedIcon');
const customIcon=document.getElementById('customIcon');

function openProfile(data){
    modalAvatar.src=data.avatar;
    modalName.textContent=data.name;
    modalTg.textContent=data.tg;
    modalDescription.textContent=data.description;
    verifiedIcon.style.display=data.verified?'block':'none';
    premiumIcon.style.display=data.premium?'block':'none';
    pinnedIcon.style.display=data.pinned?'block':'none';
    customIcon.style.display=data.custom?'block':'none';
    profileModal.style.display='flex';
}
function closeProfile(){profileModal.style.display='none';}

// SEARCH & FILTER
const searchInput=document.getElementById('searchInput');
const filterButtons=document.querySelectorAll('.filters button');
const profileItems=document.querySelectorAll('.profile-item');

searchInput.addEventListener('input',()=>filterProfiles());
filterButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        filterButtons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        filterProfiles();
    });
});

function filterProfiles(){
    const query=searchInput.value.toLowerCase();
    const activeFilter=document.querySelector('.filters button.active').dataset.filter;
    profileItems.forEach(item=>{
        const name=item.querySelector('.profile-name').textContent.toLowerCase();
        const tag=item.querySelector('.profile-tag').textContent.toLowerCase();
        const category=item.dataset.category;
        const matchQuery=name.includes(query)||tag.includes(query);
        const matchFilter=activeFilter==='all'||category===activeFilter;
        item.style.display=(matchQuery && matchFilter)?'grid':'none';
    });
}