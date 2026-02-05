/**
 * 🌌 INFINITE ICON ENGINE v6 - DRIFT EDITION
 * Pure SVG Version
 */

// ==========================================
// 📚 v6 DRIFT ICONS (Local SVG)
// ==========================================

const V6_ICONS = [
  { name: 'phone', file: 'icons/v6/phone.svg', category: 'communication' },
  { name: 'messages', file: 'icons/v6/messages.svg', category: 'communication' },
  { name: 'contacts', file: 'icons/v6/contacts.svg', category: 'communication' },
  { name: 'email', file: 'icons/v6/email.svg', category: 'communication' },
  { name: 'camera', file: 'icons/v6/camera.svg', category: 'media' },
  { name: 'gallery', file: 'icons/v6/gallery.svg', category: 'media' },
  { name: 'video', file: 'icons/v6/video.svg', category: 'media' },
  { name: 'music', file: 'icons/v6/music.svg', category: 'media' },
  { name: 'maps', file: 'icons/v6/maps.svg', category: 'tools' },
  { name: 'gps', file: 'icons/v6/gps.svg', category: 'tools' },
  { name: 'calendar', file: 'icons/v6/calendar.svg', category: 'tools' },
  { name: 'clock', file: 'icons/v6/clock.svg', category: 'tools' },
  { name: 'calculator', file: 'icons/v6/calculator.svg', category: 'tools' },
  { name: 'flashlight', file: 'icons/v6/flashlight.svg', category: 'tools' },
  { name: 'weather', file: 'icons/v6/weather.svg', category: 'tools' },
  { name: 'settings', file: 'icons/v6/settings.svg', category: 'system' },
  { name: 'notifications', file: 'icons/v6/notifications.svg', category: 'system' },
  { name: 'games', file: 'icons/v6/games.svg', category: 'entertainment' },
  { name: 'casino', file: 'icons/v6/casino.svg', category: 'entertainment' },
  { name: 'bank', file: 'icons/v6/bank.svg', category: 'finance' },
  { name: 'taxi', file: 'icons/v6/taxi.svg', category: 'services' },
  { name: 'home', file: 'icons/v6/home.svg', category: 'services' },
  { name: 'food', file: 'icons/v6/food.svg', category: 'services' },
  { name: 'electrician', file: 'icons/v6/electrician.svg', category: 'services' },
  { name: 'mechanic', file: 'icons/v6/mechanic.svg', category: 'services' },
  { name: 'market', file: 'icons/v6/market.svg', category: 'shopping' },
  { name: 'shop247', file: 'icons/v6/shop247.svg', category: 'shopping' },
  { name: 'business', file: 'icons/v6/business.svg', category: 'work' },
  { name: 'browser', file: 'icons/v6/browser.svg', category: 'internet' },
  { name: 'hospital', file: 'icons/v6/hospital.svg', category: 'emergency' },
  { name: 'police', file: 'icons/v6/police.svg', category: 'emergency' },
  { name: 'gang', file: 'icons/v6/gang.svg', category: 'special' },
  // Drift specials
  { name: 'drift', file: 'icons/v6/drift.svg', category: 'racing' },
  { name: 'turbo', file: 'icons/v6/turbo.svg', category: 'racing' },
  { name: 'nitro', file: 'icons/v6/nitro.svg', category: 'racing' },
  { name: 'tuning', file: 'icons/v6/tuning.svg', category: 'racing' },
  { name: 'race', file: 'icons/v6/race.svg', category: 'racing' },
  { name: 'speed', file: 'icons/v6/speed.svg', category: 'racing' }
];

// ==========================================
// 🔧 STATE
// ==========================================

const state = {
  icons: V6_ICONS,
  favorites: JSON.parse(localStorage.getItem('v6Favorites') || '[]'),
  collections: JSON.parse(localStorage.getItem('v6Collections') || '[]'),
  compare: { slot1: null, slot2: null },
  batch: [],
  currentIcon: null,
  view: 'grid',
  theme: 'dark'
};

// ==========================================
// 🚀 INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderIcons(state.icons);
  setupEventListeners();
  updateStats();
  showToast('🏎️ v6 Drift Edition - 38 Pure SVG Icons');
}

// ==========================================
// 🎨 RENDER
// ==========================================

function renderIcons(iconsToRender) {
  const grid = document.getElementById('iconsGrid');
  grid.innerHTML = '';
  
  if (iconsToRender.length === 0) {
    grid.innerHTML = '<div class="no-results">🔍 Sonuç bulunamadı</div>';
    return;
  }
  
  iconsToRender.forEach((icon, index) => {
    const card = createIconCard(icon, index);
    grid.appendChild(card);
  });
  
  updateStats();
}

function createIconCard(icon, index) {
  const card = document.createElement('div');
  card.className = `icon-card ${state.view}`;
  card.dataset.name = icon.name;
  card.style.animationDelay = `${(index % 20) * 0.03}s`;
  
  const isFav = state.favorites.some(f => f.name === icon.name);
  if (isFav) card.classList.add('favorite');
  
  const isSelected = state.batch.some(b => b.name === icon.name);
  if (isSelected) card.classList.add('selected');
  
  card.innerHTML = `
    <div class="icon-wrapper">
      <img src="${icon.file}" alt="${icon.name}" loading="lazy" 
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect fill=%22%23ff6b35%22 width=%2264%22 height=%2264%22 rx=%2216%22/><text x=%2232%22 y=%2236%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22white%22>?</text></svg>'">
    </div>
    <div class="icon-name">${icon.name}</div>
    <div class="icon-category">${icon.category}</div>
  `;
  
  card.addEventListener('click', (e) => {
    if (e.ctrlKey || e.metaKey) {
      toggleBatch(icon);
    } else {
      openDetailModal(icon);
    }
  });
  
  return card;
}

// ==========================================
// 🔘 EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = state.icons.filter(icon => 
      icon.name.toLowerCase().includes(query) ||
      icon.category.toLowerCase().includes(query)
    );
    renderIcons(filtered);
  });
  
  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.view = btn.dataset.view;
      document.getElementById('iconsGrid').className = `icons-grid ${state.view}`;
      renderIcons(state.icons);
    });
  });
  
  // Theme toggle
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.theme = btn.dataset.theme;
      document.body.className = state.theme === 'light' ? 'light-theme' : '';
    });
  });
  
  // Feature buttons
  document.getElementById('favoritesBtn').addEventListener('click', showFavorites);
  document.getElementById('compareBtn').addEventListener('click', openCompareModal);
  document.getElementById('batchBtn').addEventListener('click', openBatchModal);
  document.getElementById('collectionsBtn').addEventListener('click', openCollectionsModal);
  
  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });
  
  // Modal actions
  document.getElementById('copySvgBtn')?.addEventListener('click', copySvg);
  document.getElementById('copyCodeBtn')?.addEventListener('click', copyCode);
  document.getElementById('downloadPngBtn')?.addEventListener('click', downloadPng);
  document.getElementById('addToFavBtn')?.addEventListener('click', () => state.currentIcon && toggleFavorite(state.currentIcon));
  document.getElementById('addToCollectionBtn')?.addEventListener('click', () => state.currentIcon && addToCollection(state.currentIcon));
  document.getElementById('addToCompareBtn')?.addEventListener('click', () => state.currentIcon && addToCompare(state.currentIcon));
  
  // Batch actions
  document.getElementById('batchExportSvg')?.addEventListener('click', batchExportSvg);
  document.getElementById('batchExportPng')?.addEventListener('click', batchExportPng);
  document.getElementById('batchClear')?.addEventListener('click', clearBatch);
  
  // Collections
  document.getElementById('createCollectionBtn')?.addEventListener('click', createCollection);
}

// ==========================================
// ❤️ FAVORITES
// ==========================================

function toggleFavorite(icon) {
  const index = state.favorites.findIndex(f => f.name === icon.name);
  if (index === -1) {
    state.favorites.push(icon);
    showToast('❤️ Favorilere eklendi');
  } else {
    state.favorites.splice(index, 1);
    showToast('💔 Favorilerden çıkarıldı');
  }
  localStorage.setItem('v6Favorites', JSON.stringify(state.favorites));
  renderIcons(state.icons);
}

function showFavorites() {
  if (state.favorites.length === 0) {
    showToast('❤️ Henüz favori yok');
    return;
  }
  renderIcons(state.favorites);
  showToast(`❤️ ${state.favorites.length} favori gösteriliyor`);
}

// ==========================================
// ⚖️ COMPARISON
// ==========================================

function openCompareModal() {
  document.getElementById('compareModal').classList.add('active');
  updateCompareDisplay();
}

function addToCompare(icon) {
  if (!state.compare.slot1) {
    state.compare.slot1 = icon;
  } else if (!state.compare.slot2) {
    state.compare.slot2 = icon;
  } else {
    state.compare.slot1 = state.compare.slot2;
    state.compare.slot2 = icon;
  }
  updateCompareDisplay();
  showToast('⚖️ Karşılaştırmaya eklendi');
}

function updateCompareDisplay() {
  const slot1 = document.getElementById('compareSlot1');
  const slot2 = document.getElementById('compareSlot2');
  
  if (state.compare.slot1) {
    slot1.innerHTML = `
      <div class="icon-display">
        <img src="${state.compare.slot1.file}" alt="${state.compare.slot1.name}" style="width:80px;height:80px;">
      </div>
      <p>${state.compare.slot1.name}</p>
    `;
    slot1.classList.add('filled');
  }
  
  if (state.compare.slot2) {
    slot2.innerHTML = `
      <div class="icon-display">
        <img src="${state.compare.slot2.file}" alt="${state.compare.slot2.name}" style="width:80px;height:80px;">
      </div>
      <p>${state.compare.slot2.name}</p>
    `;
    slot2.classList.add('filled');
  }
}

// ==========================================
// 📦 BATCH OPERATIONS
// ==========================================

function toggleBatch(icon) {
  const index = state.batch.findIndex(b => b.name === icon.name);
  if (index === -1) {
    state.batch.push(icon);
  } else {
    state.batch.splice(index, 1);
  }
  renderIcons(state.icons);
  updateBatchCount();
}

function openBatchModal() {
  document.getElementById('batchModal').classList.add('active');
  updateBatchCount();
}

function updateBatchCount() {
  const countEl = document.getElementById('batchCount');
  if (countEl) countEl.textContent = `${state.batch.length} ikon seçildi`;
}

function clearBatch() {
  state.batch = [];
  renderIcons(state.icons);
  closeAllModals();
  showToast('📦 Seçim temizlendi');
}

async function batchExportSvg() {
  if (state.batch.length === 0) {
    showToast('❌ İkon seçilmedi');
    return;
  }
  
  showToast('📦 SVG export hazırlanıyor...');
  
  const svgs = [];
  for (const icon of state.batch) {
    try {
      const response = await fetch(icon.file);
      const svg = await response.text();
      svgs.push({ name: icon.name, svg });
    } catch (e) {
      console.error('Export error:', e);
    }
  }
  
  const content = svgs.map(s => `<!-- ${s.name} -->\n${s.svg}`).join('\n\n');
  downloadFile(content, 'v6-icons-bundle.svg', 'image/svg+xml');
  showToast(`✅ ${svgs.length} ikon indirildi`);
}

async function batchExportPng() {
  showToast('🖼️ PNG export hazırlanıyor...');
  showToast('ℹ️ PNG export yakında geliyor');
}

// ==========================================
// 📁 COLLECTIONS
// ==========================================

function openCollectionsModal() {
  document.getElementById('collectionsModal').classList.add('active');
  renderCollections();
}

function renderCollections() {
  const list = document.getElementById('collectionsList');
  if (!list) return;
  
  if (state.collections.length === 0) {
    list.innerHTML = '<p style="color: var(--text-secondary);">Henüz koleksiyon yok</p>';
    return;
  }
  
  list.innerHTML = state.collections.map(col => `
    <div class="collection-item" onclick="loadCollection('${col.name}')">
      <h4>${col.name}</h4>
      <p>${col.icons.length} ikon</p>
    </div>
  `).join('');
}

function createCollection() {
  const input = document.getElementById('newCollectionName');
  const name = input.value.trim();
  
  if (!name) {
    showToast('❌ İsim girin');
    return;
  }
  
  if (state.collections.find(c => c.name === name)) {
    showToast('❌ Bu isimde koleksiyon var');
    return;
  }
  
  state.collections.push({ name, icons: [] });
  localStorage.setItem('v6Collections', JSON.stringify(state.collections));
  input.value = '';
  renderCollections();
  showToast('📁 Koleksiyon oluşturuldu');
}

function addToCollection(icon) {
  if (state.collections.length === 0) {
    showToast('❌ Önce koleksiyon oluşturun');
    return;
  }
  
  state.collections[0].icons.push(icon);
  localStorage.setItem('v6Collections', JSON.stringify(state.collections));
  showToast(`📁 ${icon.name} koleksiyona eklendi`);
}

// ==========================================
// 🖼️ DETAIL MODAL
// ==========================================

function openDetailModal(icon) {
  state.currentIcon = icon;
  const modal = document.getElementById('detailModal');
  modal.classList.add('active');
  
  document.getElementById('detailTitle').textContent = icon.name;
  document.getElementById('detailCategory').textContent = icon.category;
  document.getElementById('detailLibrary').textContent = 'v6 Drift';
  document.getElementById('detailVersion').textContent = 'SVG';
  
  const wrapper = document.getElementById('detailIconWrapper');
  wrapper.innerHTML = `<img src="${icon.file}" alt="${icon.name}" style="width:100px;height:100px;">`;
  
  // Preview section
  const previewGrid = document.getElementById('previewGrid');
  previewGrid.innerHTML = [24, 32, 48, 64].map(size => `
    <div class="preview-item">
      <div class="icon-box">
        <img src="${icon.file}" alt="${icon.name}" style="width:${size}px;height:${size}px;">
      </div>
      <span>${size}px</span>
    </div>
  `).join('');
}

async function copySvg() {
  if (!state.currentIcon) return;
  
  try {
    const response = await fetch(state.currentIcon.file);
    const svg = await response.text();
    await navigator.clipboard.writeText(svg);
    showToast('✅ SVG kopyalandı');
  } catch (e) {
    showToast('❌ Kopyalama başarısız');
  }
}

function copyCode() {
  if (!state.currentIcon) return;
  
  const code = `<img src="${state.currentIcon.file}" alt="${state.currentIcon.name}">`;
  navigator.clipboard.writeText(code);
  showToast('✅ Kod kopyalandı');
}

async function downloadPng() {
  showToast('🖼️ PNG hazırlanıyor...');
  showToast('ℹ️ PNG indirme yakında geliyor');
}

// ==========================================
// 🛠️ UTILITIES
// ==========================================

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

function updateStats() {
  const visibleIcons = document.querySelectorAll('.icon-card').length;
  document.getElementById('iconCount').textContent = visibleIcons;
  document.getElementById('favCount').textContent = state.favorites.length;
  document.getElementById('currentLibrary').textContent = 'v6 Drift SVG';
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Close modal on outside click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeAllModals();
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});
