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

document.addEventListener('DOMContentLoaded', () => {
  renderIcons(icons);
  setupSearch();
  setupThemeToggle();
  setupModal();
  updateIconCount(icons.length);
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
  card.dataset.category = icon.category;
  card.style.animationDelay = `${index * 0.05}s`;
  card.innerHTML = `
    <div class="icon-wrapper">
      <img src="icons/${icon.file}" alt="${icon.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect fill=%22%23ddd%22 width=%2264%22 height=%2264%22 rx=%2216%22/><text x=%2232%22 y=%2236%22 text-anchor=%22middle%22 font-size=%2224%22>❓</text></svg>'">
    </div>
    <div class="icon-name">${icon.name}</div>
    <div class="icon-category">${icon.tr}</div>
  `;
  
  card.addEventListener('click', () => openModal(icon));
  
  return card;
}

function updateIconCount(count) {
  document.getElementById('iconCount').textContent = `${count} ikon`;
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
      renderIcons(icons);
      updateIconCount(icons.length);
      return;
    }
    
    const filtered = icons.filter(icon => 
      icon.name.toLowerCase().includes(query) ||
      icon.category.toLowerCase().includes(query) ||
      icon.tr.toLowerCase().includes(query)
    );
    
    renderIcons(filtered);
    updateIconCount(filtered.length);
  });
}

function setupThemeToggle() {
  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const theme = btn.dataset.theme;
      currentTheme = theme;
      document.body.className = '';
      
      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
      } else if (theme === 'light') {
        document.body.classList.add('light-theme');
      }
    });
  });
}

function openModal(icon) {
  currentIcon = icon;
  const modal = document.getElementById('modal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  
  modalIcon.src = `icons/${icon.file}`;
  modalTitle.textContent = icon.tr;
  modalCategory.textContent = icon.category;
  modal.classList.add('active');
  
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function setupModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  
  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  copyBtn.addEventListener('click', copySVG);
  downloadBtn.addEventListener('click', downloadSVG);
}

async function copySVG() {
  if (!currentIcon) return;
  
  const btn = document.getElementById('copyBtn');
  const originalText = btn.innerHTML;
  
  try {
    btn.innerHTML = '⏳ Yükleniyor...';
    btn.disabled = true;
    
    const response = await fetch(`icons/${currentIcon.file}`);
    if (!response.ok) throw new Error('SVG yüklenemedi');
    
    const svgText = await response.text();
    await navigator.clipboard.writeText(svgText);
    
    btn.innerHTML = '✅ Kopyalandı!';
    btn.style.background = '#98FB98';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  } catch (err) {
    console.error('Kopyalama hatası:', err);
    btn.innerHTML = '❌ Hata!';
    btn.style.background = '#FF6B6B';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  }
}

async function downloadSVG() {
  if (!currentIcon) return;
  
  const btn = document.getElementById('downloadBtn');
  const originalText = btn.innerHTML;
  
  try {
    btn.innerHTML = '⏳ İndiriliyor...';
    btn.disabled = true;
    
    const response = await fetch(`icons/${currentIcon.file}`);
    if (!response.ok) throw new Error('SVG yüklenemedi');
    
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
    
    btn.innerHTML = '✅ İndirildi!';
    btn.style.background = '#98FB98';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  } catch (err) {
    console.error('İndirme hatası:', err);
    btn.innerHTML = '❌ Hata!';
    btn.style.background = '#FF6B6B';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  }
}