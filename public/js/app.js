const icons = [
  { name: 'phone', file: 'phone.svg', category: 'communication', tr: 'Telefon' },
  { name: 'messages', file: 'messages.svg', category: 'communication', tr: 'Mesajlar' },
  { name: 'contacts', file: 'contacts.svg', category: 'communication', tr: 'Kişiler' },
  { name: 'email', file: 'email.svg', category: 'communication', tr: 'E-posta' },
  { name: 'camera', file: 'camera.svg', category: 'media', tr: 'Kamera' },
  { name: 'gallery', file: 'gallery.svg', category: 'media', tr: 'Galeri' },
  { name: 'video', file: 'video.svg', category: 'media', tr: 'Video' },
  { name: 'music', file: 'music.svg', category: 'media', tr: 'Müzik' },
  { name: 'spotify', file: 'spotify.svg', category: 'media', tr: 'Spotify' },
  { name: 'maps', file: 'maps.svg', category: 'tools', tr: 'Haritalar' },
  { name: 'gps', file: 'gps.svg', category: 'tools', tr: 'GPS' },
  { name: 'calendar', file: 'calendar.svg', category: 'tools', tr: 'Takvim' },
  { name: 'clock', file: 'clock.svg', category: 'tools', tr: 'Saat' },
  { name: 'calculator', file: 'calculator.svg', category: 'tools', tr: 'Hesap Makinesi' },
  { name: 'flashlight', file: 'flashlight.svg', category: 'tools', tr: 'Fener' },
  { name: 'weather', file: 'weather.svg', category: 'tools', tr: 'Hava Durumu' },
  { name: 'settings', file: 'settings.svg', category: 'system', tr: 'Ayarlar' },
  { name: 'notifications', file: 'notifications.svg', category: 'system', tr: 'Bildirimler' },
  { name: 'games', file: 'games.svg', category: 'entertainment', tr: 'Oyunlar' },
  { name: 'casino', file: 'casino.svg', category: 'entertainment', tr: 'Kumarhane' },
  { name: 'bank', file: 'bank.svg', category: 'finance', tr: 'Banka' },
  { name: 'taxi', file: 'taxi.svg', category: 'services', tr: 'Taksi' },
  { name: 'home', file: 'home.svg', category: 'services', tr: 'Emlak' },
  { name: 'food', file: 'food.svg', category: 'services', tr: 'Yemek' },
  { name: 'electrician', file: 'electrician.svg', category: 'services', tr: 'Elektrikçi' },
  { name: 'mechanic', file: 'mechanic.svg', category: 'services', tr: 'Tamirci' },
  { name: 'market', file: 'market.svg', category: 'shopping', tr: 'Market' },
  { name: 'shop247', file: 'shop247.svg', category: 'shopping', tr: '24/7 Market' },
  { name: 'business', file: 'business.svg', category: 'work', tr: 'İş' },
  { name: 'browser', file: 'browser.svg', category: 'internet', tr: 'Tarayıcı' },
  { name: 'hospital', file: 'hospital.svg', category: 'emergency', tr: 'Hastane' },
  { name: 'police', file: 'police.svg', category: 'emergency', tr: 'Polis' },
  { name: 'gang', file: 'gang.svg', category: 'special', tr: 'Gang' }
];

let currentIcon = null;
let currentTheme = 'pastel';
let currentVersion = 'v2'; // Varsayılan versiyon

document.addEventListener('DOMContentLoaded', () => {
  renderIcons(icons);
  setupSearch();
  setupThemeToggle();
  setupVersionToggle();
  setupModal();
  updateStats();
});

function renderIcons(iconsToRender) {
  const grid = document.getElementById('iconsGrid');
  grid.innerHTML = '';
  
  if (iconsToRender.length === 0) {
    grid.innerHTML = '<div class="no-results">😔 Sonuç bulunamadı</div>';
    return;
  }
  
  iconsToRender.forEach((icon, index) => {
    const card = createIconCard(icon, index);
    grid.appendChild(card);
  });
}

function createIconCard(icon, index) {
  const card = document.createElement('div');
  card.className = 'icon-card';
  card.dataset.name = icon.name;
  card.style.animationDelay = `${index * 0.03}s`; // Daha hızlı animasyon
  
  // Versiyona göre ikon yolu
  const iconPath = `icons/${currentVersion}/${icon.file}`;
  
  card.innerHTML = `
    <div class="icon-wrapper">
      <img src="${iconPath}" alt="${icon.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><text x=%2232%22 y=%2236%22 font-size=%2224%22 text-anchor=%22middle%22>⏳</text></svg>'">
    </div>
    <div class="icon-name">${icon.name}</div>
    <div class="icon-category">${icon.tr}</div>
  `;
  
  card.addEventListener('click', () => openModal(icon));
  return card;
}

function updateStats() {
  document.getElementById('iconCount').textContent = `${icons.length} ikon`;
  document.getElementById('versionInfo').textContent = currentVersion === 'v1' ? 'Flat Versiyon' : 'Jelly Pop Versiyon';
}

function setupVersionToggle() {
  const versionBtns = document.querySelectorAll('.v-btn');
  versionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      
      versionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentVersion = btn.dataset.version;
      updateStats();
      
      // İkonları yeniden render et (hafif bir animasyonla)
      const grid = document.getElementById('iconsGrid');
      grid.style.opacity = '0';
      setTimeout(() => {
        renderIcons(icons);
        grid.style.opacity = '1';
      }, 200);
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = icons.filter(icon => 
      icon.name.includes(query) || 
      icon.category.includes(query) ||
      icon.tr.toLowerCase().includes(query)
    );
    renderIcons(filtered);
    document.getElementById('iconCount').textContent = `${filtered.length} ikon`;
  });
}

function setupThemeToggle() {
  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.className = btn.dataset.theme === 'pastel' ? '' : `${btn.dataset.theme}-theme`;
    });
  });
}

function openModal(icon) {
  currentIcon = icon;
  const modal = document.getElementById('modal');
  const modalIcon = document.getElementById('modalIcon');
  
  modalIcon.src = `icons/${currentVersion}/${icon.file}`;
  document.getElementById('modalTitle').textContent = icon.tr;
  document.getElementById('modalCategory').textContent = icon.category;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

function setupModal() {
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
  
  document.getElementById('copyBtn').addEventListener('click', async () => {
    if (!currentIcon) return;
    const btn = document.getElementById('copyBtn');
    const originalContent = btn.innerHTML;
    
    try {
      btn.innerHTML = '⏳';
      const res = await fetch(`icons/${currentVersion}/${currentIcon.file}`);
      const svg = await res.text();
      await navigator.clipboard.writeText(svg);
      btn.innerHTML = '✅ Kopyalandı';
      btn.style.background = 'var(--accent-mint)';
    } catch (e) {
      btn.innerHTML = '❌ Hata';
    }
    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = '';
    }, 2000);
  });
  
  document.getElementById('downloadBtn').addEventListener('click', async () => {
    if (!currentIcon) return;
    const btn = document.getElementById('downloadBtn');
    const originalContent = btn.innerHTML;
    
    try {
      btn.innerHTML = '⏳';
      const res = await fetch(`icons/${currentVersion}/${currentIcon.file}`);
      const svg = await res.text();
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${currentIcon.name}_${currentVersion}.svg`;
      a.click();
      URL.revokeObjectURL(url);
      btn.innerHTML = '✅ İndirildi';
      btn.style.background = 'var(--accent-mint)';
    } catch (e) {
      btn.innerHTML = '❌ Hata';
    }
    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = '';
    }, 2000);
  });
}