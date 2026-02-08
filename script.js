function handleAvatarError(img) {
    img.style.background='#111';
    img.style.display='flex';
    img.style.alignItems='center';
    img.style.justifyContent='center';
    img.innerHTML='<i class="fas fa-user" style="color:#0ff; font-size:2rem;"></i>';
}

function initAvatar() {
    const avatar=document.getElementById('avatar');
    if(!avatar) return;
    if(avatar.complete && avatar.naturalHeight===0) handleAvatarError(avatar);

    avatar.addEventListener('mouseenter',()=>{ avatar.style.transform='scale(1.08)'; });
    avatar.addEventListener('mouseleave',()=>{ avatar.style.transform='scale(1)'; });
}

function initGlitch() {
    const el=document.querySelectorAll('.nickname,.description-text');
    el.forEach(e=>{
        setInterval(()=>{
            if(Math.random()>0.95){
                const dur=50+Math.random()*100;
                e.style.transform=`translateX(${(Math.random()-0.5)*2}px)`;
                setTimeout(()=>{e.style.transform='';},dur);
            }
        },2000);
    });
}

document.addEventListener('DOMContentLoaded',()=>{
    initAvatar();
    initGlitch();
});