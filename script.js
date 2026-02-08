const fameList = [
  { rank: 1, name: "Alice" },
  { rank: 2, name: "Bob" },
  { rank: 3, name: "Charlie" },
  { rank: 4, name: "Diana" },
  { rank: 5, name: "Eve" }
];

const listElement = document.getElementById('fame-list');

fameList.forEach(item => {
  const li = document.createElement('li');

  const rankSpan = document.createElement('span');
  rankSpan.className = 'rank';
  rankSpan.textContent = `#${item.rank}`;

  const nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = item.name;

  const btn = document.createElement('button');
  btn.textContent = 'View';
  btn.onclick = () => alert(`You clicked on ${item.name}`);

  li.appendChild(rankSpan);
  li.appendChild(nameSpan);
  li.appendChild(btn);

  listElement.appendChild(li);
});