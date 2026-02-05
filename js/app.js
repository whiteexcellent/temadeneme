/**
 * 🌌 INFINITE ICON ENGINE - ULTIMATE EDITION
 * 11 Themes | 418 Pure SVG Icons
 * v6-v16 Full Collection
 */

// ==========================================
// 📚 THEME CONFIGURATION
// ==========================================

const THEME_CONFIG = {
  v6: {
    name: 'Drift Racing',
    folder: 'icons/v6/',
    colors: ['#FF6B35', '#FF2D7A'],
    description: 'Neon drift theme with orange-pink gradients'
  },
  v7: {
    name: 'iOS Apple',
    folder: 'icons/v7/',
    colors: ['#007AFF', '#5856D6'],
    description: 'Apple iOS squircle with glassmorphism'
  },
  v8: {
    name: 'Material Android',
    folder: 'icons/v8/',
    colors: ['#6200EA', '#03DAC6'],
    description: 'Google Material Design with pastel colors'
  },
  v9: {
    name: 'Cyberpunk Neon',
    folder: 'icons/v9/',
    colors: ['#00FFFF', '#FF00FF'],
    description: 'Dark theme with neon cyan-magenta glow'
  },
  v10: {
    name: 'Pixel Art',
    folder: 'icons/v10/',
    colors: ['#000000', '#FFFFFF'],
    description: '8-bit retro gaming style'
  },
  v11: {
    name: 'Dark Web',
    folder: 'icons/v11/',
    colors: ['#00FF00', '#FF0000'],
    description: 'Matrix terminal hacker style'
  },
  v12: {
    name: 'EMS Medical',
    folder: 'icons/v12/',
    colors: ['#FFFFFF', '#DC143C'],
    description: 'Clean white-red medical theme'
  },
  v13: {
    name: 'Street Graffiti',
    folder: 'icons/v13/',
    colors: ['#FF6B35', '#FFD93D'],
    description: 'Graffiti street art with spray effects'
  },
  v14: {
    name: 'Luxury Gold',
    folder: 'icons/v14/',
    colors: ['#1A1A1A', '#FFD700'],
    description: 'Black and gold ultra-thin luxury'
  },
  v15: {
    name: '3D Emoji',
    folder: 'icons/v15/',
    colors: ['#FFB800', '#FF6B6B'],
    description: 'Microsoft Fluent 3D emoji style'
  },
  v16: {
    name: 'Sketch Hand',
    folder: 'icons/v16/',
    colors: ['#2C3E50', '#7F8C8D'],
    description: 'Hand-drawn pencil sketch style'
  }
};

// ==========================================
// 🎨 ICON LIST (38 icons per theme)
// ==========================================

const ICON_LIST = [
  { name: 'phone', category: 'communication' },
  { name: 'messages', category: 'communication' },
  { name: 'contacts', category: 'communication' },
  { name: 'email', category: 'communication' },
  { name: 'camera', category: 'media' },
  { name: 'gallery', category: 'media' },
  { name: 'video', category: 'media' },
  { name: 'music', category: 'media' },
  { name: 'maps', category: 'tools' },
  { name: 'gps', category: 'tools' },
  { name: 'calendar', category: 'tools' },
  { name: 'clock', category: 'tools' },
  { name: 'calculator', category: 'tools' },
  { name: 'flashlight', category: 'tools' },
  { name: 'weather', category: 'tools' },
  { name: 'settings', category: 'system' },
  { name: 'notifications', category: 'system' },
  { name: 'games', category: 'entertainment' },
  { name: 'casino', category: 'entertainment' },
  { name: 'bank', category: 'finance' },
  { name: 'taxi', category: 'services' },
  { name: 'home', category: 'services' },
  { name: 'food', category: 'services' },
  { name: 'electrician', category: 'services' },
  { name: 'mechanic', category: 'services' },
  { name: 'market', category: 'shopping' },
  { name: 'shop247', category: 'shopping' },
  { name: 'business', category: 'work' },
  { name: 'browser', category: 'internet' },
  { name: 'hospital', category: 'emergency' },
  { name: 'police', category: 'emergency' },
  { name: 'gang', category: 'special' },
  { name: 'drift', category: 'racing' },
  { name: 'turbo', category: 'racing' },
  { name: 'nitro', category: 'racing' },
  { name: 'tuning', category: 'racing' },
  { name: 'race', category: 'racing' },
  { name: 'speed', category: 'racing' }
];

// ==========================================
// 🔧 STATE
// ==========================================

const state = {
  currentTheme: 'v6',
  icons: [],
  favorites: JSON.parse(localStorage.getItem('iconFavorites') || '[]'),
  collections: JSON.parse(localStorage.getItem('iconCollections') || '{}'),
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
  loadTheme('v6');
  setupEventListeners();
  updateStats();
  showToast('🌌 Infinite Icon Engine - 418 Icons Ready!');
}

// ==========================================
// 📱 LOAD THEME
// ==========================================

function loadTheme(themeId) {
  state.currentTheme = themeId;
  const config = THEME_CONFIG[themeId];
  
  state.icons = ICON_LIST.map(icon => ({
    ...icon,
    file: `${config.folder}${icon.name}.svg`,
    theme: themeId
  }));
  
  renderIcons(state.icons);
  updateThemeInfo(config);
  showToast(`🎨 ${config.name} loaded!`);
}

function updateThemeInfo(config) {
  document.getElementById('currentThemeName').textContent = config.name;
  document.getElementById('currentThemeDesc').textContent = config.description;
  document.getElementById('totalIcons').textContent = '38';
  
  // Update color preview
  const colorPreview = document.getElementById('themeColors');
  if (colorPreview) {
    colorPreview.innerHTML = config.colors.map(c => 
      `<span class="color-dot" style="background: ${c}"></span>`
    ).join('');
  }
}

// ==========================================
// 🎨 RENDER
// ==========================================

function renderIcons(iconsToRender) {
  const grid = document.getElementById('iconsGrid');
  grid.innerHTML = '';
  
  if (iconsToRender.length === 0) {
    grid.innerHTML = '<div class="no-results">🔍 No results found</div>';
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
  card.className = `icon-card ${state.view} theme-${icon.theme}`;
  card.dataset.name = icon.name;
  card.dataset.category = icon.category;
  card.style.animationDelay = `${(index % 20) * 0.03}s`;
  
  const isFav = state.favorites.some(f => f.name === icon.name && f.theme === icon.theme);
  if (isFav) card.classList.add('favorite');
  
  const isSelected = state.batch.some(b => b.name === icon.name && b.theme === icon.theme);
  if (isSelected) card.classList.add('selected');
  
  card.innerHTML = `
    <div class="icon-wrapper">
      <img src="${icon.file}" alt="${icon.name}" loading="lazy" 
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect fill=%22%23ddd%22 width=%2264%22 height=%2264%22 rx=%2216%22/><text x=%2232%22 y=%2236%22 text-anchor=%22middle%22 font-size=%2224%22>?</text></svg>'">
    </div>
    <div class="icon-name">${icon.name}</div>
    <div class="icon-category">${icon.category}</div>
    <div class="icon-theme-badge">${state.currentTheme}</div>
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
  // Theme buttons
  document.querySelectorAll('.theme-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-select-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadTheme(btn.dataset.theme);
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
  
  // Dark/Light mode
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.theme = btn.dataset.mode;
      document.body.className = state.theme === 'light' ? 'light-theme' : '';
    });
  });
  
  // Feature buttons
  document.getElementById('favoritesBtn')?.addEventListener('click', showFavorites);
  document.getElementById('compareBtn')?.addEventListener('click', openCompareModal);
  document.getElementById('batchBtn')?.addEventListener('click', openBatchModal);
  document.getElementById('collectionsBtn')?.addEventListener('click', openCollectionsModal);
  document.getElementById('randomBtn')?.addEventListener('click', showRandom);
  
  // Modal actions
  setupModalActions();
}

function setupModalActions() {
  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });
  
  // Detail modal
  document.getElementById('copySvgBtn')?.addEventListener('click', copySvg);
  document.getElementById('copyCodeBtn')?.addEventListener('click', copyCode);
  document.getElementById('downloadBtn')?.addEventListener('click', downloadIcon);
  document.getElementById('addToFavBtn')?.addEventListener('click', () => state.currentIcon && toggleFavorite(state.currentIcon));
  document.getElementById('addToCompareBtn')?.addEventListener('click', () => state.currentIcon && addToCompare(state.currentIcon));
  document.getElementById('addToCollectionBtn')?.addEventListener('click', () => state.currentIcon && addToCollection(state.currentIcon));
  
  // Batch
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
  const key = `${icon.theme}-${icon.name}`;
  const index = state.favorites.findIndex(f => f.name === icon.name && f.theme === icon.theme);
  
  if (index === -1) {
    state.favorites.push(icon);
    showToast(`❤️ Added to favorites`);
  } else {
    state.favorites.splice(index, 1);
    showToast(`💔 Removed from favorites`);
  }
  
  localStorage.setItem('iconFavorites', JSON.stringify(state.favorites));
  renderIcons(state.icons);
}

function showFavorites() {
  if (state.favorites.length === 0) {
    showToast('❤️ No favorites yet');
    return;
  }
  
  // Group by theme
  const byTheme = {};
  state.favorites.forEach(f => {
    if (!byTheme[f.theme]) byTheme[f.theme] = [];
    byTheme[f.theme].push(f);
  });
  
  // Show all favorites
  renderIcons(state.favorites);
  showToast(`❤️ Showing ${state.favorites.length} favorites`);
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
  showToast('⚖️ Added to comparison');
}

function updateCompareDisplay() {
  const slot1 = document.getElementById('compareSlot1');
  const slot2 = document.getElementById('compareSlot2');
  
  if (state.compare.slot1) {
    slot1.innerHTML = `
      <div class="icon-display">
        <img src="${state.compare.slot1.file}" alt="${state.compare.slot1.name}">
      </div>
      <p>${state.compare.slot1.name}</p>
      <span class="theme-tag">${state.compare.slot1.theme}</span>
    `;
    slot1.classList.add('filled');
  }
  
  if (state.compare.slot2) {
    slot2.innerHTML = `
      <div class="icon-display">
        <img src="${state.compare.slot2.file}" alt="${state.compare.slot2.name}">
      </div>
      <p>${state.compare.slot2.name}</p>
      <span class="theme-tag">${state.compare.slot2.theme}</span>
    `;
    slot2.classList.add('filled');
  }
}

// ==========================================
// 📦 BATCH
// ==========================================

function toggleBatch(icon) {
  const key = `${icon.theme}-${icon.name}`;
  const index = state.batch.findIndex(b => b.name === icon.name && b.theme === icon.theme);
  
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
  const el = document.getElementById('batchCount');
  if (el) el.textContent = `${state.batch.length} icons selected`;
}

function clearBatch() {
  state.batch = [];
  renderIcons(state.icons);
  closeAllModals();
  showToast('📦 Selection cleared');
}

async function batchExportSvg() {
  if (state.batch.length === 0) {
    showToast('❌ No icons selected');
    return;
  }
  
  showToast(`📦 Exporting ${state.batch.length} icons...`);
  
  const svgs = [];
  for (const icon of state.batch) {
    try {
      const response = await fetch(icon.file);
      const svg = await response.text();
      svgs.push({ name: `${icon.theme}-${icon.name}`, svg });
    } catch (e) {
      console.error('Export error:', e);
    }
  }
  
  const content = svgs.map(s => `<!-- ${s.name} -->\n${s.svg}`).join('\n\n');
  downloadFile(content, 'icon-bundle.svg', 'image/svg+xml');
  showToast(`✅ Exported ${svgs.length} icons`);
}

function batchExportPng() {
  showToast('🖼️ PNG export coming soon!');
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
  
  const cols = Object.entries(state.collections);
  if (cols.length === 0) {
    list.innerHTML = '<p class="empty-msg">No collections yet</p>';
    return;
  }
  
  list.innerHTML = cols.map(([name, icons]) => `
    <div class="collection-item">
      <h4>${name}</h4>
      <p>${icons.length} icons</p>
      <button class="btn-small" onclick="loadCollection('${name}')">Load</button>
    </div>
  `).join('');
}

function createCollection() {
  const input = document.getElementById('newCollectionName');
  const name = input.value.trim();
  
  if (!name) {
    showToast('❌ Enter a name');
    return;
  }
  
  if (state.collections[name]) {
    showToast('❌ Collection exists');
    return;
  }
  
  state.collections[name] = [];
  localStorage.setItem('iconCollections', JSON.stringify(state.collections));
  input.value = '';
  renderCollections();
  showToast('📁 Collection created');
}

function addToCollection(icon) {
  const cols = Object.keys(state.collections);
  if (cols.length === 0) {
    showToast('❌ Create a collection first');
    return;
  }
  
  // Add to first collection
  state.collections[cols[0]].push(icon);
  localStorage.setItem('iconCollections', JSON.stringify(state.collections));
  showToast(`📁 Added to ${cols[0]}`);
}

function loadCollection(name) {
  const icons = state.collections[name];
  if (icons && icons.length > 0) {
    renderIcons(icons);
    showToast(`📁 Loaded "${name}" (${icons.length} icons)`);
  }
}

// ==========================================
// 🎲 RANDOM
// ==========================================

function showRandom() {
  // Get random icons from all themes
  const allIcons = [];
  Object.keys(THEME_CONFIG).forEach(theme => {
    ICON_LIST.forEach(icon => {
      allIcons.push({
        ...icon,
        theme,
        file: `${THEME_CONFIG[theme].folder}${icon.name}.svg`
      });
    });
  });
  
  // Shuffle and take 20
  const shuffled = allIcons.sort(() => 0.5 - Math.random()).slice(0, 20);
  renderIcons(shuffled);
  showToast('🎲 Random selection (20 icons)');
}

// ==========================================
// 🖼️ DETAIL MODAL
// ==========================================

function openDetailModal(icon) {
  state.currentIcon = icon;
  const modal = document.getElementById('detailModal');
  modal.classList.add('active');
  
  const config = THEME_CONFIG[icon.theme];
  
  document.getElementById('detailTitle').textContent = icon.name;
  document.getElementById('detailCategory').textContent = icon.category;
  document.getElementById('detailTheme').textContent = config.name;
  
  const wrapper = document.getElementById('detailIconWrapper');
  wrapper.innerHTML = `<img src="${icon.file}" alt="${icon.name}" class="detail-img">`;
  
  // Preview
  const previewGrid = document.getElementById('previewGrid');
  previewGrid.innerHTML = [24, 32, 48, 64].map(size => `
    <div class="preview-item">
      <div class="preview-box" style="background: ${config.colors[0]}20">
        <img src="${icon.file}" alt="" style="width:${size}px;height:${size}px;">
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
    showToast('✅ SVG copied');
  } catch (e) {
    showToast('❌ Copy failed');
  }
}

function copyCode() {
  if (!state.currentIcon) return;
  
  const code = `<img src="${state.currentIcon.file}" alt="${state.currentIcon.name}">`;
  navigator.clipboard.writeText(code);
  showToast('✅ Code copied');
}

function downloadIcon() {
  if (!state.currentIcon) return;
  
  const link = document.createElement('a');
  link.href = state.currentIcon.file;
  link.download = `${state.currentIcon.theme}-${state.currentIcon.name}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('💾 Downloaded');
}

// ==========================================
// 🛠️ UTILITIES
// ==========================================

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

function updateStats() {
  const visible = document.querySelectorAll('.icon-card').length;
  document.getElementById('visibleCount').textContent = visible;
  document.getElementById('favCount').textContent = state.favorites.length;
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

// Close on outside click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeAllModals();
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllModals();
  if (e.key === 'f' && e.ctrlKey) {
    e.preventDefault();
    document.getElementById('searchInput')?.focus();
  }
});
