function toggleMenu() {
  const m = document.getElementById('menu');
  m.style.left = m.style.left === '0px' ? '-200px' : '0px';
}

function toggleHelp() {
  const h = document.getElementById('helpBox');
  h.style.display = h.style.display === 'block' ? 'none' : 'block';
}

function showTab(id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

function openProfile() {
  document.getElementById('profileModal').style.display = 'flex';
}

function closeProfile() {
  document.getElementById('profileModal').style.display = 'none';
}