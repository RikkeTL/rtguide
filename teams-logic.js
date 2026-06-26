function getInitials(name) {
  return name.trim().split(/\s+/).map(w => w[0]).join('').slice(0,2).toUpperCase();
}
function getColor(name) {
  const colors = ['#E8B4A0','#A8C5BD','#B8A9C9','#C9B8A8','#A8B8C9','#C9A8B8','#B8C9A8'];
  let h = 0; for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h<<5)-h);
  return colors[Math.abs(h) % colors.length];
}
function renderPeople(filter) {
  const grid = document.getElementById('people-grid');
  if (!grid) return;
  const list = (!filter || filter === 'all') ? people : people.filter(p => p.team === filter);
  grid.innerHTML = list.map(p => {
    const key = p.imageKey || p.name;
    const color = getColor(p.name);
    return `<div class="person-card">
      <div class="person-avatar" style="background:${color}">
        <img src="images/${key}.jpg" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span class="initials" style="display:none">${getInitials(p.name)}</span>
      </div>
      <div class="person-info">
        <h3 class="person-name">${p.name}</h3>
        <p class="person-role">${p.role}</p>
        <p class="person-location">${p.location}</p>
        <p class="person-fact">${p.fact}</p>
      </div>
    </div>`;
  }).join('');
}
function filterTeam(team, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPeople(team);
}
document.addEventListener('DOMContentLoaded', () => renderPeople('all'));
