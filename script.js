const profilesData = [
  {
    name: "Кира Всевышний ✓",
    user: "@empered",
    role: "owner",
    desc: "Основатель Kira List",
    avatar: "https://i.imgur.com/8Km9tLL.jpg"
  },
  {
    name: "peace | Гештальт",
    user: "@izrezal",
    role: "medium",
    desc: "Участник списка",
    avatar: "https://i.imgur.com/2yaf2wb.jpg"
  }
];

const profiles = document.getElementById("profiles");
const search = document.getElementById("search");

function render(list) {
  profiles.innerHTML = "";
  list.forEach(p => {
    profiles.innerHTML += `
      <div class="card" onclick="openProfile('${p.name}','${p.user}','${p.desc}','${p.avatar}')">
        <img src="${p.avatar}">
        <div class="name">${p.name}</div>
        <div class="tag">${p.user}</div>
      </div>`;
  });
}

render(profilesData);

search.addEventListener("input", () => {
  const v = search.value.toLowerCase();
  render(profilesData.filter(p =>
    p.name.toLowerCase().includes(v) ||
    p.user.toLowerCase().includes(v) ||
    p.desc.toLowerCase().includes(v)
  ));
});

function filterProfiles(role, el) {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  render(role === "all" ? profilesData : profilesData.filter(p => p.role === role));
}

function openProfile(name, user, desc, avatar) {
  document.getElementById("pName").innerText = name;
  document.getElementById("pDesc").innerText = desc;
  document.getElementById("pAvatar").src = avatar;
  document.getElementById("pLink").href = "https://t.me/" + user.replace("@","");
  document.getElementById("profileModal").style.display = "flex";
}

function closeProfile() {
  document.getElementById("profileModal").style.display = "none";
}

function toggleMenu() {
  const m = document.getElementById("menu");
  m.style.left = m.style.left === "0px" ? "-200px" : "0px";
}

function toggleHelp() {
  const h = document.getElementById("helpBox");
  h.style.display = h.style.display === "block" ? "none" : "block";
}

function showTab(id, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}