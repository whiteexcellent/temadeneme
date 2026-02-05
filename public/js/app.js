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
let currentVersion = 'v2';
let isBoxed = false;

document.addEventListener('DOMContentLoaded', () => {
  renderIcons(icons);
  setupSearch();
  setupThemeToggle();
  setupVersionToggle();
  setupBoxedToggle();
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
  card.style.animationDelay = `${index * 0.03}s`;
  
  const iconPath = `icons/${currentVersion}/${icon.file}`;
  const wrapperClass = isBoxed ? 'icon-wrapper boxed' : 'icon-wrapper';
  
  card.innerHTML = `
    <div class="${wrapperClass}">
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
  const vText = currentVersion === 'v1' ? 'Flat Versiyon' : (currentVersion === 'v2' ? 'Jelly Pop Versiyon' : (currentVersion === 'v3' ? 'UwU Bunny Versiyon' : (currentVersion === 'v4' ? 'Soft Cozy Versiyon' : 'Tactical Force Versiyon')));
  const element = document.getElementById('versionInfo');
  if (element) element.textContent = vText;
}

function setupBoxedToggle() {
  const checkbox = document.getElementById('bgCheck');
  if (!checkbox) return;
  
  checkbox.addEventListener('change', (e) => {
    isBoxed = e.target.checked;
    
    // CSS ile anlık önizleme güncellemesi
    const wrappers = document.querySelectorAll('.icon-wrapper');
    const modalWrapper = document.getElementById('modalIconWrapper');
    
    wrappers.forEach(w => {
      if (isBoxed) w.classList.add('boxed');
      else w.classList.remove('boxed');
    });
    
    if (modalWrapper) {
      if (isBoxed) modalWrapper.classList.add('boxed');
      else modalWrapper.classList.remove('boxed');
    }
  });
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
      
      // v1 seçilirse boxed modunu kapat (v1 zaten kutulu)
      if (currentVersion === 'v1') {
        const bgCheck = document.getElementById('bgCheck');
        if (bgCheck && bgCheck.checked) {
          bgCheck.click(); // Programatik olarak tıkla
        }
        // Kutulu seçeneğini gizle/disable et
        document.getElementById('bgControl').style.opacity = '0.5';
        document.getElementById('bgCheck').disabled = true;
      } else {
        document.getElementById('bgControl').style.opacity = '1';
        document.getElementById('bgCheck').disabled = false;
      }
      
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

// SVG Manipülasyon Yardımcısı
async function getProccessedSVG(url) {
  const response = await fetch(url);
  let svgText = await response.text();
  
  if (isBoxed && ['v2', 'v3', 'v4', 'v5'].includes(currentVersion)) {
    // SVG içeriğini parse et
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, "image/svg+xml");
    const svgEl = doc.querySelector('svg');
    const content = svgEl.innerHTML;
    
    let boxDef = '';
    
    // Versiyona göre arka plan stili
    if (currentVersion === 'v5') {
      // v5 (Tactical Elite) için Fırçalanmış Metal ve Vida Detaylı Kutu
      boxDef = `
        <defs>
          <linearGradient id="tacBox" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1F2937"/>
            <stop offset="50%" stop-color="#111827"/>
            <stop offset="100%" stop-color="#000000"/>
          </linearGradient>
          <linearGradient id="tacStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#4B5563"/>
            <stop offset="50%" stop-color="#9CA3AF"/>
            <stop offset="100%" stop-color="#4B5563"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="8" fill="url(#tacBox)" stroke="url(#tacStroke)" stroke-width="2"/>
        <circle cx="6" cy="6" r="1.5" fill="#6B7280"/>
        <circle cx="58" cy="6" r="1.5" fill="#6B7280"/>
        <circle cx="6" cy="58" r="1.5" fill="#6B7280"/>
        <circle cx="58" cy="58" r="1.5" fill="#6B7280"/>
      `;
    } else if (currentVersion === 'v6') {
      // v6 (Drift/Realistik) için Karbon Fiber Doku
      boxDef = `
        <defs>
          <pattern id="carbonPattern" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="#1a1a1a"/>
            <path d="M0 4L4 0M-1 1L1 -1M3 5L5 3" stroke="#2a2a2a" stroke-width="1"/>
          </pattern>
          <linearGradient id="metalStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#555"/>
            <stop offset="50%" stop-color="#fff"/>
            <stop offset="100%" stop-color="#555"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="8" fill="url(#carbonPattern)" stroke="url(#metalStroke)" stroke-width="2"/>
      `;
    } else {
      // Diğerleri (v2, v3, v4) için yumuşak pastel arka plan
      boxDef = `
        <defs>
          <linearGradient id="bgBoxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#f0f0f0"/>
          </linearGradient>
          <filter id="bgShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.1"/>
          </filter>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#bgBoxGrad)" stroke="#e6e6e6" stroke-width="1"/>
      `;
    }
    
    const newSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  ${boxDef}
  <g transform="translate(7, 7) scale(0.78)">
    ${content}
  </g>
</svg>`;
    return newSvg;
  }
  
  return svgText;
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
      const svgContent = await getProccessedSVG(`icons/${currentVersion}/${currentIcon.file}`);
      await navigator.clipboard.writeText(svgContent);
      btn.innerHTML = '✅ Kopyalandı';
      btn.style.background = 'var(--accent-mint)';
    } catch (e) {
      console.error(e);
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
      const svgContent = await getProccessedSVG(`icons/${currentVersion}/${currentIcon.file}`);
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      // İsimlendirme: icon_v2_boxed.svg gibi
      const suffix = isBoxed ? '_boxed' : '';
      a.download = `${currentIcon.name}_${currentVersion}${suffix}.svg`;
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