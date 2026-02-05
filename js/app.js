const icons = [
  { name: 'phone', file: 'phone.svg', category: 'communication' },
  { name: 'messages', file: 'messages.svg', category: 'communication' },
  { name: 'contacts', file: 'contacts.svg', category: 'communication' },
  { name: 'camera', file: 'camera.svg', category: 'media' },
  { name: 'gallery', file: 'gallery.svg', category: 'media' },
  { name: 'video', file: 'video.svg', category: 'media' },
  { name: 'music', file: 'music.svg', category: 'media' },
  { name: 'spotify', file: 'spotify.svg', category: 'media' },
  { name: 'maps', file: 'maps.svg', category: 'tools' },
  { name: 'gps', file: 'gps.svg', category: 'tools' },
  { name: 'settings', file: 'settings.svg', category: 'system' },
  { name: 'notifications', file: 'notifications.svg', category: 'system' },
  { name: 'calendar', file: 'calendar.svg', category: 'tools' },
  { name: 'clock', file: 'clock.svg', category: 'tools' },
  { name: 'calculator', file: 'calculator.svg', category: 'tools' },
  { name: 'flashlight', file: 'flashlight.svg', category: 'tools' },
  { name: 'weather', file: 'weather.svg', category: 'tools' },
  { name: 'email', file: 'email.svg', category: 'communication' },
  { name: 'browser', file: 'browser.svg', category: 'internet' },
  { name: 'games', file: 'games.svg', category: 'entertainment' },
  { name: 'casino', file: 'casino.svg', category: 'entertainment' },
  { name: 'bank', file: 'bank.svg', category: 'finance' },
  { name: 'taxi', file: 'taxi.svg', category: 'services' },
  { name: 'home', file: 'home.svg', category: 'services' },
  { name: 'market', file: 'market.svg', category: 'shopping' },
  { name: 'shop247', file: 'shop247.svg', category: 'shopping' },
  { name: 'food', file: 'food.svg', category: 'services' },
  { name: 'business', file: 'business.svg', category: 'work' },
  { name: 'hospital', file: 'hospital.svg', category: 'emergency' },
  { name: 'police', file: 'police.svg', category: 'emergency' },
  { name: 'electrician', file: 'electrician.svg', category: 'services' },
  { name: 'mechanic', file: 'mechanic.svg', category: 'services' },
  { name: 'gang', file: 'gang.svg', category: 'special' }
];

let currentIcon = null;

document.addEventListener('DOMContentLoaded', () => {
  renderIcons(icons);
  setupSearch();
  setupThemeToggle();
  setupModal();
});

function renderIcons(iconsToRender) {
  const grid = document.getElementById('iconsGrid');
  grid.innerHTML = '';
  
  iconsToRender.forEach(icon => {
    const card = createIconCard(icon);
    grid.appendChild(card);
  });
}

function createIconCard(icon) {
  const card = document.createElement('div');
  card.className = 'icon-card';
  card.dataset.name = icon.name;
  card.innerHTML = `
    <img src="icons/${icon.file}" alt="${icon.name}" loading="lazy">
    <div class="icon-name">${icon.name}</div>
  `;
  
  card.addEventListener('click', () => openModal(icon));
  
  return card;
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = icons.filter(icon => 
      icon.name.toLowerCase().includes(query) ||
      icon.category.toLowerCase().includes(query)
    );
    renderIcons(filtered);
  });
}

function setupThemeToggle() {
  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.className = '';
      if (btn.dataset.theme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    });
  });
}

function openModal(icon) {
  currentIcon = icon;
  const modal = document.getElementById('modal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  
  modalIcon.src = `icons/${icon.file}`;
  modalTitle.textContent = icon.name;
  modal.classList.add('active');
}

function setupModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  copyBtn.addEventListener('click', copySVG);
  downloadBtn.addEventListener('click', downloadSVG);
}

async function copySVG() {
  if (!currentIcon) return;
  
  try {
    const response = await fetch(`icons/${currentIcon.file}`);
    const svgText = await response.text();
    await navigator.clipboard.writeText(svgText);
    
    const btn = document.getElementById('copyBtn');
    const originalText = btn.textContent;
    btn.textContent = 'Kopyalandı!';
    btn.style.background = '#98FB98';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 2000);
  } catch (err) {
    alert('Kopyalama başarısız oldu');
  }
}

async function downloadSVG() {
  if (!currentIcon) return;
  
  try {
    const response = await fetch(`icons/${currentIcon.file}`);
    const svgText = await response.text();
    
    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentIcon.name}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    alert('İndirme başarısız oldu');
  }
}