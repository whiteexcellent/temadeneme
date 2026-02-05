/**
 * 🌌 INFINITE ICON ENGINE v6 - DRIFT EDITION
 * Tabler Icons + Advanced Features
 */

// ==========================================
// 📚 CONFIGURATION
// ==========================================

const CONFIG = {
  v6: { prefix: 'tabler', name: 'Tabler Icons', total: 5984 },
  v7: { prefix: 'lucide', name: 'Lucide' },
  v8: { prefix: 'pixelarticons', name: 'Pixel Art' },
  v9: { prefix: 'fa6-solid', name: 'FontAwesome' },
  v10: { prefix: 'ph', name: 'Phosphor' },
  v11: { prefix: 'game-icons', name: 'Game Icons' },
  v12: { prefix: 'material-symbols', name: 'Material' },
  v13: { prefix: 'ion', name: 'Ionicons' },
  v14: { prefix: 'fluent', name: 'Fluent' },
  v15: { prefix: 'icon-park-twotone', name: 'IconPark' },
  v99: { name: 'Global Search', source: 'global' }
};

// v6 Default Icons - Tabler için önemli ikonlar
const V6_DEFAULT_ICONS = [
  { name: 'phone', icon: 'device-mobile', category: 'communication' },
  { name: 'messages', icon: 'message-circle', category: 'communication' },
  { name: 'contacts', icon: 'address-book', category: 'communication' },
  { name: 'email', icon: 'mail', category: 'communication' },
  { name: 'camera', icon: 'camera', category: 'media' },
  { name: 'gallery', icon: 'photo', category: 'media' },
  { name: 'video', icon: 'video', category: 'media' },
  { name: 'music', icon: 'music', category: 'media' },
  { name: 'spotify', icon: 'brand-spotify', category: 'media' },
  { name: 'maps', icon: 'map', category: 'tools' },
  { name: 'gps', icon: 'location', category: 'tools' },
  { name: 'calendar', icon: 'calendar', category: 'tools' },
  { name: 'clock', icon: 'clock', category: 'tools' },
  { name: 'calculator', icon: 'calculator', category: 'tools' },
  { name: 'flashlight', icon: 'bulb', category: 'tools' },
  { name: 'weather', icon: 'sun', category: 'tools' },
  { name: 'settings', icon: 'settings', category: 'system' },
  { name: 'notifications', icon: 'bell', category: 'system' },
  { name: 'games', icon: 'device-gamepad', category: 'entertainment' },
  { name: 'casino', icon: 'dice', category: 'entertainment' },
  { name: 'bank', icon: 'building-bank', category: 'finance' },
  { name: 'taxi', icon: 'taxi', category: 'services' },
  { name: 'home', icon: 'home', category: 'services' },
  { name: 'food', icon: 'fork-knife', category: 'services' },
  { name: 'electrician', icon: 'bolt', category: 'services' },
  { name: 'mechanic', icon: 'tool', category: 'services' },
  { name: 'market', icon: 'shopping-cart', category: 'shopping' },
  { name: 'shop247', icon: '24-hours', category: 'shopping' },
  { name: 'business', icon: 'briefcase', category: 'work' },
  { name: 'browser', icon: 'world', category: 'internet' },
  { name: 'hospital', icon: 'heart-plus', category: 'emergency' },
  { name: 'police', icon: 'shield', category: 'emergency' },
  { name: 'gang', icon: 'users-group', category: 'special' },
  // Drift/Gaming extras
  { name: 'drift', icon: 'car', category: 'racing' },
  { name: 'turbo', icon: 'gauge', category: 'racing' },
  { name: 'nitro', icon: 'flame', category: 'racing' },
  { name: 'tuning', icon: 'adjustments', category: 'racing' },
  { name: 'race', icon: 'flag', category: 'racing' },
  { name: 'speed', icon: 'trending-up', category: 'racing' }
];

// ==========================================
// 🔧 STATE
// ==========================================

const state = {
  currentVersion: 'v6',
  icons: [],
  favorites: JSON.parse(localStorage.getItem('iconFavorites') || '[]'),
  collections: JSON.parse(localStorage.getItem('iconCollections') || '[]'),
  compare: { slot1: null, slot2: null },
  batch: [],
  customization: {
    stroke: 2,
    color: '#00d4ff',
    size: 48
  },
  view: 'grid',
  theme: 'dark'
};

// ==========================================
// 🚀 INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  await loadV6Icons();
  setupEventListeners();
  setupCustomization();
  updateStats();
  showToast('🌌 v6 Drift Edition başlatıldı!');
}

// ==========================================
// 📱 LOAD ICONS
// ==========================================

async function loadV6Icons() {
  showToast('📚 Tabler Icons yükleniyor...');
  
  try {
    // Fetch popular Tabler icons
    const response = await fetch('https://api.iconify.design/collection?prefix=tabler');
    const data = await response.json();
    
    if (data.icons) {
      const iconNames = Object.keys(data.icons);
      
      // Map default icons
      state.icons = V6_DEFAULT_ICONS.map(item => ({
        name: item.name,
        icon: item.icon,
        category: item.category,
        prefix: 'tabler',
        source: 'iconify'
      }));
      
      // Add more icons from collection (up to 100)
      let count = 0;
      for (const iconName of iconNames) {
        if (count >= 100) break;
        if (!V6_DEFAULT_ICONS.find(i => i.icon === iconName)) {
          state.icons.push({
            name: iconName,
            icon: iconName,
            category: 'general',
            prefix: 'tabler',
            source: 'iconify'
          });
          count++;
        }
      }
      
      renderIcons(state.icons);
      showToast(`✅ ${state.icons.length} ikon yüklendi`);
    }
  } catch (error) {
    console.error('Error loading icons:', error);
    showToast('❌ İkonlar yüklenemedi', 'error');
  }
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
  
  // Apply customization
  applyCustomization();
  
  // Scan Iconify
  if (window.Iconify) {
    window.Iconify.scan();
  }
  
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
      <span class="iconify" 
            data-icon="tabler:${icon.icon}" 
            data-width="${state.customization.size}" 
            data-height="${state.customization.size}"
            style="color: ${state.customization.color};"></span>
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
// ⚙️ CUSTOMIZATION
// ==========================================

function setupCustomization() {
  const strokeSlider = document.getElementById('strokeSlider');
  const colorPicker = document.getElementById('colorPicker');
  const sizeSelector = document.getElementById('sizeSelector');
  
  strokeSlider.addEventListener('input', (e) => {
    state.customization.stroke = e.target.value;
    document.getElementById('strokeValue').textContent = e.target.value + 'px';
    applyCustomization();
  });
  
  colorPicker.addEventListener('input', (e) => {
    state.customization.color = e.target.value;
    applyCustomization();
  });
  
  sizeSelector.addEventListener('change', (e) => {
    state.customization.size = e.target.value;
    renderIcons(state.icons);
  });
}

function applyCustomization() {
  const iconifyElements = document.querySelectorAll('.iconify');
  iconifyElements.forEach(el => {
    el.style.strokeWidth = state.customization.stroke;
    el.style.color = state.customization.color;
  });
}

// ==========================================
// 🔘 EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Version buttons
  document.querySelectorAll('.version-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.version-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const version = btn.dataset.version;
      if (version === 'v6') {
        loadV6Icons();
      } else if (version === 'v99') {
        enableGlobalMode();
      } else {
        loadOtherVersion(version, btn.dataset.prefix);
      }
    });
  });
  
  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.view = btn.dataset.view;
      document.getElementById('iconsGrid').className = `icons-grid ${state.view}`;
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
  
  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = state.icons.filter(icon => 
      icon.name.toLowerCase().includes(query) ||
      icon.category.toLowerCase().includes(query)
    );
    renderIcons(filtered);
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
  
  // Batch actions
  document.getElementById('batchExportSvg')?.addEventListener('click', batchExportSvg);
  document.getElementById('batchExportPng')?.addEventListener('click', batchExportPng);
  document.getElementById('batchClear')?.addEventListener('click', clearBatch);
  
  // Collection actions
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
  localStorage.setItem('iconFavorites', JSON.stringify(state.favorites));
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
        <span class="iconify" data-icon="tabler:${state.compare.slot1.icon}" data-width="80" data-height="80"></span>
      </div>
      <p>${state.compare.slot1.name}</p>
    `;
    slot1.classList.add('filled');
  }
  
  if (state.compare.slot2) {
    slot2.innerHTML = `
      <div class="icon-display">
        <span class="iconify" data-icon="tabler:${state.compare.slot2.icon}" data-width="80" data-height="80"></span>
      </div>
      <p>${state.compare.slot2.name}</p>
    `;
    slot2.classList.add('filled');
  }
  
  if (window.Iconify) window.Iconify.scan();
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
  if (countEl) {
    countEl.textContent = `${state.batch.length} ikon seçildi`;
  }
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
      const response = await fetch(`https://api.iconify.design/tabler/${icon.icon}.svg`);
      const svg = await response.text();
      svgs.push({ name: icon.name, svg });
    } catch (e) {
      console.error('Export error:', e);
    }
  }
  
  // Create zip-like download (as single file for now)
  const content = svgs.map(s => `<!-- ${s.name} -->\n${s.svg}`).join('\n\n');
  downloadFile(content, 'icons-bundle.svg', 'image/svg+xml');
  showToast(`✅ ${svgs.length} ikon indirildi`);
}

async function batchExportPng() {
  showToast('🖼️ PNG export hazırlanıyor...');
  // PNG export would require canvas conversion
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
  localStorage.setItem('iconCollections', JSON.stringify(state.collections));
  input.value = '';
  renderCollections();
  showToast('📁 Koleksiyon oluşturuldu');
}

function addToCollection(icon) {
  if (state.collections.length === 0) {
    showToast('❌ Önce koleksiyon oluşturun');
    return;
  }
  
  // For simplicity, add to first collection
  state.collections[0].icons.push(icon);
  localStorage.setItem('iconCollections', JSON.stringify(state.collections));
  showToast(`📁 ${icon.name} koleksiyona eklendi`);
}

// ==========================================
// 🖼️ DETAIL MODAL
// ==========================================

function openDetailModal(icon) {
  const modal = document.getElementById('detailModal');
  modal.classList.add('active');
  
  document.getElementById('detailTitle').textContent = icon.name;
  document.getElementById('detailCategory').textContent = icon.category;
  document.getElementById('detailLibrary').textContent = icon.prefix;
  document.getElementById('detailVersion').textContent = state.currentVersion;
  
  const wrapper = document.getElementById('detailIconWrapper');
  wrapper.innerHTML = `
    <span class="iconify" 
          data-icon="tabler:${icon.icon}" 
          data-width="100" 
          data-height="100"
          style="color: ${state.customization.color};"></span>
  `;
  
  // Setup buttons
  document.getElementById('copySvgBtn').onclick = () => copySvg(icon);
  document.getElementById('copyCodeBtn').onclick = () => copyCode(icon);
  document.getElementById('downloadPngBtn').onclick = () => downloadPng(icon);
  document.getElementById('addToFavBtn').onclick = () => toggleFavorite(icon);
  document.getElementById('addToCollectionBtn').onclick = () => addToCollection(icon);
  document.getElementById('addToCompareBtn').onclick = () => addToCompare(icon);
  
  // Preview section
  const previewGrid = document.getElementById('previewGrid');
  previewGrid.innerHTML = [24, 32, 48, 64].map(size => `
    <div class="preview-item">
      <div class="icon-box">
        <span class="iconify" data-icon="tabler:${icon.icon}" data-width="${size}" data-height="${size}"></span>
      </div>
      <span>${size}px</span>
    </div>
  `).join('');
  
  if (window.Iconify) window.Iconify.scan();
}

async function copySvg(icon) {
  try {
    const response = await fetch(`https://api.iconify.design/tabler/${icon.icon}.svg`);
    const svg = await response.text();
    await navigator.clipboard.writeText(svg);
    showToast('✅ SVG kopyalandı');
  } catch (e) {
    showToast('❌ Kopyalama başarısız');
  }
}

function copyCode(icon) {
  const code = `<span class="iconify" data-icon="tabler:${icon.icon}"></span>`;
  navigator.clipboard.writeText(code);
  showToast('✅ Kod kopyalandı');
}

async function downloadPng(icon) {
  showToast('🖼️ PNG hazırlanıyor...');
  // Would need canvas implementation
  showToast('ℹ️ PNG indirme yakında geliyor');
}

// ==========================================
// 🌍 GLOBAL SEARCH
// ==========================================

function enableGlobalMode() {
  showToast('🌍 Global mod aktif');
  document.getElementById('searchInput').placeholder = '🌐 Tüm kütüphanelerde ara...';
}

async function loadOtherVersion(version, prefix) {
  showToast(`📚 ${CONFIG[version].name} yükleniyor...`);
  // Implementation for other versions
  showToast(`ℹ️ ${CONFIG[version].name} yakında`);
}

// ==========================================
// 🛠️ UTILITIES
// ==========================================

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

function updateStats() {
  document.getElementById('iconCount').textContent = state.icons.length;
  document.getElementById('favCount').textContent = state.favorites.length;
  document.getElementById('currentLibrary').textContent = CONFIG[state.currentVersion].name;
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
