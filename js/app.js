/**
 * 🌌 INFINITE ICON ENGINE v2026.1
 * Universal Icon Picker for FiveM
 * 
 * Features:
 * - 36 Icon Libraries (Local + Iconify)
 * - Global Search across 100+ libraries
 * - Smart Icon Mapping System
 * - Mixed Mode (Random from multiple libraries)
 * - Lazy Loading & Performance Optimized
 */

// ==========================================
// 📚 LIBRARY CONFIGURATION (30 Iconify Libraries)
// ==========================================

const LIBRARY_CONFIG = {
  // Local Library
  local: {
    name: 'Lokal Kawaii',
    source: 'local',
    type: 'svg',
    description: 'FiveM için özel tasarlanmış pastel ikonlar'
  },

  // Iconify Libraries v7-v21 (Original 15)
  v7: { 
    prefix: 'lucide', 
    name: 'Cyber/Tech', 
    source: 'iconify',
    style: 'clean-sharp',
    glow: true 
  },
  v8: { 
    prefix: 'pixelarticons', 
    name: 'Pixel Art', 
    source: 'iconify',
    style: 'pixelated',
    pixelated: true 
  },
  v9: { 
    prefix: 'fa6-solid', 
    name: 'FontAwesome Solid', 
    source: 'iconify',
    style: 'bold-solid' 
  },
  v10: { 
    prefix: 'ph', 
    name: 'Phosphor Line', 
    source: 'iconify',
    style: 'elegant-line' 
  },
  v11: { 
    prefix: 'game-icons', 
    name: 'RPG/Game Icons', 
    source: 'iconify',
    style: 'rpg-game',
    category: 'rp' 
  },
  v12: { 
    prefix: 'material-symbols', 
    name: 'Material Design', 
    source: 'iconify',
    style: 'android' 
  },
  v13: { 
    prefix: 'ion', 
    name: 'Ionicons', 
    source: 'iconify',
    style: 'ios' 
  },
  v14: { 
    prefix: 'fluent', 
    name: 'Microsoft Fluent', 
    source: 'iconify',
    style: 'windows' 
  },
  v15: { 
    prefix: 'icon-park-twotone', 
    name: 'Hand Drawn', 
    source: 'iconify',
    style: 'artistic' 
  },
  v16: { 
    prefix: 'solar', 
    name: 'Solar Neon', 
    source: 'iconify',
    style: 'neon-line',
    glow: true 
  },
  v17: { 
    prefix: 'uim', 
    name: 'Unicons Duotone', 
    source: 'iconify',
    style: 'duotone' 
  },
  v18: { 
    prefix: 'carbon', 
    name: 'IBM Carbon', 
    source: 'iconify',
    style: 'abstract' 
  },
  v19: { 
    prefix: 'noto', 
    name: 'Noto Emoji', 
    source: 'iconify',
    style: 'emoji-vector' 
  },
  v20: { 
    prefix: 'pepicons-pencil', 
    name: 'Pepicons Sketch', 
    source: 'iconify',
    style: 'hand-sketched' 
  },
  v21: { 
    prefix: 'zondicons', 
    name: 'Zondicons Heavy', 
    source: 'iconify',
    style: 'solid-chunky' 
  },

  // Expanded Libraries v22-v36
  v22: { 
    prefix: 'arcticons', 
    name: 'Arcticons Anime', 
    source: 'iconify',
    style: 'line-art' 
  },
  v23: { 
    prefix: 'tabler', 
    name: 'Tabler Bold', 
    source: 'iconify',
    style: 'bold-strokes' 
  },
  v24: { 
    prefix: 'cryptocurrency', 
    name: 'Cryptocurrency', 
    source: 'iconify',
    style: 'crypto',
    category: 'darkweb' 
  },
  v25: { 
    prefix: 'medical-icon', 
    name: 'Medical Icons', 
    source: 'iconify',
    style: 'medical',
    category: 'ems' 
  },
  v26: { 
    prefix: 'maki', 
    name: 'Mapbox Maki', 
    source: 'iconify',
    style: 'map-navigation',
    category: 'gps' 
  },
  v27: { 
    prefix: 'meteocons', 
    name: 'Meteocons', 
    source: 'iconify',
    style: 'weather-dynamic' 
  },
  v28: { 
    prefix: 'circle-flags', 
    name: 'Circle Flags', 
    source: 'iconify',
    style: 'flags' 
  },
  v29: { 
    prefix: 'simple-icons', 
    name: 'Simple Icons', 
    source: 'iconify',
    style: 'brands' 
  },
  v30: { 
    prefix: 'entypo', 
    name: 'Entypo', 
    source: 'iconify',
    style: 'corporate' 
  },
  v31: { 
    prefix: 'icon-park-outline', 
    name: 'IconPark Furniture', 
    source: 'iconify',
    style: 'housing' 
  },
  v32: { 
    prefix: 'vscode-icons', 
    name: 'VSCode Icons', 
    source: 'iconify',
    style: 'technical' 
  },
  v33: { 
    prefix: 'twemoji', 
    name: 'Twemoji', 
    source: 'iconify',
    style: 'emoji-flat' 
  },
  v34: { 
    prefix: 'fluent-emoji', 
    name: 'Fluent 3D Emoji', 
    source: 'iconify',
    style: 'emoji-3d' 
  },
  v35: { 
    prefix: 'wi', 
    name: 'Win95 Retro', 
    source: 'iconify',
    style: 'retro-os' 
  },
  v36: { 
    prefix: 'gridicons', 
    name: 'Gridicons', 
    source: 'iconify',
    style: 'minimalist' 
  },

  // Special Modes
  v99: { 
    name: 'Global Search', 
    source: 'global',
    description: '100+ kütüphane arasında arama'
  },
  v98: { 
    name: 'Mixed Collection', 
    source: 'mixed',
    description: 'Rastgele 5 farklı kütüphaneden ikonlar'
  }
};

// ==========================================
// 🎯 SMART ICON MAPPING SYSTEM
// ==========================================

const SMART_MAPPING = {
  phone: {
    default: 'phone',
    'fa6-solid': 'phone',
    'pixelarticons': 'phone',
    'game-icons': 'smartphone',
    'material-symbols': 'call',
    'ion': 'call',
    'fluent': 'call-24-filled',
    'ph': 'device-mobile',
    'lucide': 'smartphone',
    'solar': 'phone-calling-rounded',
    'arcticons': 'phone',
    'tabler': 'device-mobile'
  },
  messages: {
    default: 'messages',
    'fa6-solid': 'comment-dots',
    'pixelarticons': 'chat',
    'game-icons': 'conversation',
    'material-symbols': 'chat',
    'ion': 'chatbubble',
    'fluent': 'chat-24-filled',
    'ph': 'chat-circle-text',
    'lucide': 'message-circle'
  },
  contacts: {
    default: 'contacts',
    'fa6-solid': 'address-book',
    'pixelarticons': 'book-contacts',
    'game-icons': 'backup',
    'material-symbols': 'contacts',
    'ion': 'people',
    'fluent': 'people-24-filled',
    'ph': 'address-book'
  },
  email: {
    default: 'email',
    'fa6-solid': 'envelope',
    'pixelarticons': 'mail',
    'game-icons': 'letter-bomb',
    'material-symbols': 'mail',
    'ion': 'mail',
    'fluent': 'mail-24-filled',
    'ph': 'envelope-simple'
  },
  camera: {
    default: 'camera',
    'fa6-solid': 'camera',
    'pixelarticons': 'camera',
    'game-icons': 'camera',
    'material-symbols': 'photo_camera',
    'ion': 'camera',
    'fluent': 'camera-24-filled',
    'ph': 'camera'
  },
  gallery: {
    default: 'gallery',
    'fa6-solid': 'images',
    'pixelarticons': 'image',
    'game-icons': 'photo',
    'material-symbols': 'photo_library',
    'ion': 'images',
    'fluent': 'image-24-filled',
    'ph': 'images'
  },
  video: {
    default: 'video',
    'fa6-solid': 'video',
    'pixelarticons': 'video',
    'game-icons': 'video-camera',
    'material-symbols': 'videocam',
    'ion': 'videocam',
    'fluent': 'video-24-filled',
    'ph': 'video-camera'
  },
  music: {
    default: 'music',
    'fa6-solid': 'music',
    'pixelarticons': 'music',
    'game-icons': 'musical-notes',
    'material-symbols': 'music_note',
    'ion': 'musical-notes',
    'fluent': 'music-note-2-24-filled',
    'ph': 'music-notes'
  },
  spotify: {
    default: 'spotify',
    'fa6-solid': 'music',
    'pixelarticons': 'music',
    'game-icons': 'musical-notes',
    'simple-icons': 'spotify'
  },
  maps: {
    default: 'maps',
    'fa6-solid': 'map',
    'pixelarticons': 'map',
    'game-icons': 'treasure-map',
    'material-symbols': 'map',
    'ion': 'map',
    'fluent': 'map-24-filled',
    'ph': 'map-trifold',
    'maki': 'map'
  },
  gps: {
    default: 'gps',
    'fa6-solid': 'location-dot',
    'pixelarticons': 'pin',
    'game-icons': 'position',
    'material-symbols': 'my_location',
    'ion': 'navigate',
    'fluent': 'location-24-filled',
    'ph': 'navigation-arrow',
    'maki': 'marker'
  },
  calendar: {
    default: 'calendar',
    'fa6-solid': 'calendar',
    'pixelarticons': 'calendar',
    'game-icons': 'calendar',
    'material-symbols': 'calendar_today',
    'ion': 'calendar',
    'fluent': 'calendar-24-filled',
    'ph': 'calendar-blank'
  },
  clock: {
    default: 'clock',
    'fa6-solid': 'clock',
    'pixelarticons': 'clock',
    'game-icons': 'pocket-watch',
    'material-symbols': 'schedule',
    'ion': 'time',
    'fluent': 'clock-24-filled',
    'ph': 'clock'
  },
  calculator: {
    default: 'calculator',
    'fa6-solid': 'calculator',
    'pixelarticons': 'calculator',
    'game-icons': 'calculator',
    'material-symbols': 'calculate',
    'ion': 'calculator',
    'fluent': 'calculator-24-filled',
    'ph': 'calculator'
  },
  flashlight: {
    default: 'flashlight',
    'fa6-solid': 'flashlight',
    'pixelarticons': 'flashlight',
    'game-icons': 'flashlight',
    'material-symbols': 'flashlight_on',
    'ion': 'flashlight',
    'fluent': 'flashlight-24-filled',
    'ph': 'flashlight'
  },
  weather: {
    default: 'weather',
    'fa6-solid': 'cloud-sun',
    'pixelarticons': 'cloud-sun',
    'game-icons': 'sun-cloud',
    'material-symbols': 'sunny',
    'ion': 'partly-sunny',
    'fluent': 'weather-partly-cloudy-day-24-filled',
    'ph': 'sun',
    'meteocons': 'clear-day'
  },
  settings: {
    default: 'settings',
    'fa6-solid': 'gear',
    'pixelarticons': 'sliders',
    'game-icons': 'cog',
    'material-symbols': 'settings',
    'ion': 'settings',
    'fluent': 'settings-24-filled',
    'ph': 'gear',
    'lucide': 'settings'
  },
  notifications: {
    default: 'notifications',
    'fa6-solid': 'bell',
    'pixelarticons': 'bell',
    'game-icons': 'ringing-bell',
    'material-symbols': 'notifications',
    'ion': 'notifications',
    'fluent': 'alert-24-filled',
    'ph': 'bell'
  },
  games: {
    default: 'games',
    'fa6-solid': 'gamepad',
    'pixelarticons': 'gamepad',
    'game-icons': 'joystick',
    'material-symbols': 'sports_esports',
    'ion': 'game-controller',
    'fluent': 'games-24-filled',
    'ph': 'game-controller'
  },
  casino: {
    default: 'casino',
    'fa6-solid': 'dice',
    'pixelarticons': 'dice',
    'game-icons': 'rolling-dice',
    'material-symbols': 'casino',
    'ion': 'dice',
    'fluent': 'number-circle-7-24-filled',
    'ph': 'dice-five'
  },
  bank: {
    default: 'bank',
    'fa6-solid': 'building-columns',
    'pixelarticons': 'bank',
    'game-icons': 'chest',
    'material-symbols': 'account_balance',
    'ion': 'card',
    'fluent': 'building-bank-24-filled',
    'ph': 'bank',
    'lucide': 'landmark'
  },
  taxi: {
    default: 'taxi',
    'fa6-solid': 'taxi',
    'pixelarticons': 'taxi',
    'game-icons': 'taxi',
    'material-symbols': 'local_taxi',
    'ion': 'car',
    'fluent': 'vehicle-taxi-24-filled',
    'ph': 'taxi',
    'maki': 'taxi'
  },
  home: {
    default: 'home',
    'fa6-solid': 'house',
    'pixelarticons': 'home',
    'game-icons': 'house',
    'material-symbols': 'home',
    'ion': 'home',
    'fluent': 'home-24-filled',
    'ph': 'house',
    'maki': 'home'
  },
  food: {
    default: 'food',
    'fa6-solid': 'utensils',
    'pixelarticons': 'food',
    'game-icons': 'meat',
    'material-symbols': 'restaurant',
    'ion': 'fast-food',
    'fluent': 'food-24-filled',
    'ph': 'fork-knife'
  },
  electrician: {
    default: 'electrician',
    'fa6-solid': 'bolt',
    'pixelarticons': 'lightning',
    'game-icons': 'lightning-arc',
    'material-symbols': 'electric_bolt',
    'ion': 'flash',
    'fluent': 'flash-24-filled',
    'ph': 'lightning'
  },
  mechanic: {
    default: 'mechanic',
    'fa6-solid': 'wrench',
    'pixelarticons': 'tool',
    'game-icons': 'auto-repair',
    'material-symbols': 'build',
    'ion': 'construct',
    'fluent': 'wrench-24-filled',
    'ph': 'wrench',
    'vscode-icons': 'file-type-config'
  },
  market: {
    default: 'market',
    'fa6-solid': 'shop',
    'pixelarticons': 'shop',
    'game-icons': 'shop',
    'material-symbols': 'store',
    'ion': 'basket',
    'fluent': 'building-shop-24-filled',
    'ph': 'storefront'
  },
  shop247: {
    default: 'shop247',
    'fa6-solid': 'clock',
    'pixelarticons': 'clock',
    'game-icons': 'stopwatch',
    'material-symbols': 'schedule',
    'ph': 'clock-afternoon'
  },
  business: {
    default: 'business',
    'fa6-solid': 'briefcase',
    'pixelarticons': 'briefcase',
    'game-icons': 'briefcase',
    'material-symbols': 'work',
    'ion': 'briefcase',
    'fluent': 'briefcase-24-filled',
    'ph': 'briefcase',
    'entypo': 'briefcase'
  },
  browser: {
    default: 'browser',
    'fa6-solid': 'globe',
    'pixelarticons': 'globe',
    'game-icons': 'world',
    'material-symbols': 'language',
    'ion': 'globe',
    'fluent': 'globe-24-filled',
    'ph': 'globe-hemisphere-west'
  },
  hospital: {
    default: 'hospital',
    'fa6-solid': 'hospital',
    'pixelarticons': 'heart-plus',
    'game-icons': 'hospital-cross',
    'material-symbols': 'local_hospital',
    'ion': 'medical',
    'fluent': 'doctor-24-filled',
    'ph': 'first-aid',
    'medical-icon': 'ambulance'
  },
  police: {
    default: 'police',
    'fa6-solid': 'shield-halved',
    'pixelarticons': 'shield',
    'game-icons': 'police-badge',
    'material-symbols': 'local_police',
    'ion': 'shield',
    'fluent': 'shield-24-filled',
    'ph': 'shield-check',
    'lucide': 'shield'
  },
  gang: {
    default: 'gang',
    'fa6-solid': 'users',
    'pixelarticons': 'users',
    'game-icons': 'pistol-gun',
    'material-symbols': 'groups',
    'ion': 'people',
    'fluent': 'people-team-24-filled',
    'ph': 'users-three',
    'lucide': 'swords'
  }
};

// ==========================================
// 🎨 LOCAL ICONS DATASET
// ==========================================

const LOCAL_ICONS = [
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

// ==========================================
// 🔧 STATE MANAGEMENT
// ==========================================

const state = {
  currentVersion: 'local',
  currentSource: 'local',
  currentIcons: [],
  globalResults: [],
  mixedResults: [],
  searchQuery: '',
  isGlobalMode: false,
  isMixedMode: false,
  currentIcon: null,
  viewMode: 'grid',
  page: 1,
  itemsPerPage: 48,
  isLoading: false
};

// ==========================================
// 🚀 INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderLocalIcons();
  setupEventListeners();
  setupVersionButtons();
  setupSearch();
  setupModal();
  setupViewToggle();
  updateStats();
  
  showToast('🌌 Infinite Icon Engine başlatıldı!');
}

// ==========================================
// 📱 RENDER FUNCTIONS
// ==========================================

function renderLocalIcons() {
  state.currentIcons = LOCAL_ICONS.map(icon => ({
    ...icon,
    source: 'local',
    version: 'local'
  }));
  renderIcons(state.currentIcons);
}

function renderIcons(iconsToRender, append = false) {
  const grid = document.getElementById('iconsGrid');
  
  if (!append) {
    grid.innerHTML = '';
    state.page = 1;
  }
  
  if (iconsToRender.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <p>Sonuç bulunamadı</p>
        <p class="no-results-hint">Farklı bir arama terimi deneyin veya Global modu kullanın</p>
      </div>
    `;
    updateStats(0);
    return;
  }
  
  const start = (state.page - 1) * state.itemsPerPage;
  const end = state.page * state.itemsPerPage;
  const paginatedIcons = iconsToRender.slice(start, end);
  
  paginatedIcons.forEach((icon, index) => {
    const card = createIconCard(icon, start + index);
    grid.appendChild(card);
  });
  
  updateStats(iconsToRender.length);
  
  // Show/hide load more button
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  if (iconsToRender.length > end) {
    loadMoreContainer.style.display = 'block';
  } else {
    loadMoreContainer.style.display = 'none';
  }
}

function createIconCard(icon, index) {
  const card = document.createElement('div');
  card.className = `icon-card ${state.viewMode}`;
  card.dataset.name = icon.name;
  card.dataset.category = icon.category;
  card.style.animationDelay = `${(index % 20) * 0.03}s`;
  
  const library = LIBRARY_CONFIG[icon.version] || LIBRARY_CONFIG.local;
  const isIconify = icon.source === 'iconify';
  const isGlobal = icon.source === 'global';
  
  let iconHtml;
  
  if (isIconify || isGlobal) {
    const prefix = library.prefix;
    const iconName = icon.iconName || icon.name;
    const fullName = `${prefix}:${iconName}`;
    
    iconHtml = `
      <span class="iconify-icon ${library.style || ''}" 
            data-icon="${fullName}" 
            data-width="64" 
            data-height="64"
            style="color: currentColor;"></span>
    `;
  } else {
    iconHtml = `
      <img src="icons/${icon.file}" 
           alt="${icon.name}" 
           loading="lazy"
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect fill=%22%23ddd%22 width=%2264%22 height=%2264%22 rx=%2216%22/><text x=%2232%22 y=%2236%22 text-anchor=%22middle%22 font-size=%2224%22>❓</text></svg>'">
    `;
  }
  
  card.innerHTML = `
    <div class="icon-wrapper ${library.style || ''}">
      ${iconHtml}
    </div>
    <div class="icon-name">${icon.tr || icon.name}</div>
    <div class="icon-category">${icon.category}</div>
    ${isIconify || isGlobal ? `<div class="icon-library-badge">${library.prefix}</div>` : ''}
  `;
  
  card.addEventListener('click', () => openModal(icon));
  
  return card;
}

// ==========================================
// 🔘 EVENT HANDLERS
// ==========================================

function setupEventListeners() {
  document.getElementById('loadMoreBtn').addEventListener('click', loadMore);
  document.getElementById('globalSearchBtn').addEventListener('click', performGlobalSearch);
}

function setupVersionButtons() {
  const buttons = document.querySelectorAll('.version-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      // Update active state
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Get version info
      const version = btn.dataset.version;
      const source = btn.dataset.source;
      
      state.currentVersion = version;
      state.currentSource = source;
      state.isGlobalMode = version === 'v99';
      state.isMixedMode = version === 'v98';
      state.searchQuery = '';
      document.getElementById('searchInput').value = '';
      
      // Handle different modes
      if (state.isGlobalMode) {
        enableGlobalMode();
      } else if (state.isMixedMode) {
        await renderMixedCollection();
      } else if (source === 'local') {
        renderLocalIcons();
      } else {
        await renderIconifyLibrary(version);
      }
      
      updateStats();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value.toLowerCase().trim();
    state.searchQuery = query;
    
    debounceTimer = setTimeout(() => {
      if (state.isGlobalMode && query.length > 0) {
        performGlobalSearch();
      } else if (query === '') {
        if (state.isGlobalMode) {
          state.globalResults = [];
          renderIcons([]);
        } else if (state.isMixedMode) {
          renderMixedCollection();
        } else if (state.currentSource === 'local') {
          renderLocalIcons();
        } else {
          renderIconifyLibrary(state.currentVersion);
        }
      } else {
        performLocalSearch(query);
      }
    }, 300);
  });
}

function setupViewToggle() {
  const buttons = document.querySelectorAll('.view-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      state.viewMode = btn.dataset.view;
      const grid = document.getElementById('iconsGrid');
      grid.className = `icons-grid ${state.viewMode}`;
      
      // Re-render current icons
      if (state.isGlobalMode) {
        renderIcons(state.globalResults);
      } else if (state.isMixedMode) {
        renderIcons(state.mixedResults);
      } else {
        renderIcons(state.currentIcons);
      }
    });
  });
}

// ==========================================
// 🔍 SEARCH FUNCTIONS
// ==========================================

function performLocalSearch(query) {
  let iconsToFilter;
  
  if (state.isGlobalMode) {
    iconsToFilter = state.globalResults;
  } else if (state.isMixedMode) {
    iconsToFilter = state.mixedResults;
  } else {
    iconsToFilter = state.currentIcons;
  }
  
  const filtered = iconsToFilter.filter(icon => 
    icon.name.toLowerCase().includes(query) ||
    (icon.tr && icon.tr.toLowerCase().includes(query)) ||
    icon.category.toLowerCase().includes(query)
  );
  
  renderIcons(filtered);
}

async function performGlobalSearch() {
  const query = state.searchQuery || document.getElementById('searchInput').value;
  
  if (!query || query.length < 2) {
    showToast('⚠️ En az 2 karakter girin', 'warning');
    return;
  }
  
  state.isLoading = true;
  showToast('🔍 Global arama yapılıyor...');
  
  try {
    // Iconify Search API
    const response = await fetch(`https://api.iconify.design/search?query=${encodeURIComponent(query)}&limit=100`);
    const data = await response.json();
    
    if (data.icons && data.icons.length > 0) {
      state.globalResults = data.icons.map(icon => {
        const [prefix, name] = icon.split(':');
        return {
          name: name,
          iconName: name,
          category: 'global',
          tr: name,
          source: 'global',
          version: 'v99',
          prefix: prefix
        };
      });
      
      renderIcons(state.globalResults);
      showToast(`✅ ${state.globalResults.length} sonuç bulundu`);
    } else {
      state.globalResults = [];
      renderIcons([]);
      showToast('❌ Sonuç bulunamadı');
    }
  } catch (error) {
    console.error('Global search error:', error);
    showToast('❌ Arama hatası oluştu', 'error');
  } finally {
    state.isLoading = false;
  }
}

function enableGlobalMode() {
  document.getElementById('searchInput').placeholder = '🌐 Tüm kütüphanelerde ara (100+)...';
  state.globalResults = [];
  renderIcons([]);
  showToast('🌍 Global mod aktif! Arama yapın.');
}

// ==========================================
// 🎲 MIXED MODE
// ==========================================

async function renderMixedCollection() {
  showToast('🎲 Karışık koleksiyon oluşturuluyor...');
  
  const mixedIcons = [];
  const libraries = Object.keys(LIBRARY_CONFIG).filter(k => k.startsWith('v') && !['v98', 'v99'].includes(k));
  
  // Select 5 random libraries
  const selectedLibraries = libraries.sort(() => 0.5 - Math.random()).slice(0, 5);
  
  for (const libKey of selectedLibraries) {
    const lib = LIBRARY_CONFIG[libKey];
    if (lib.source !== 'iconify') continue;
    
    // Get 5 random icons from each library
    try {
      const response = await fetch(`https://api.iconify.design/collection?prefix=${lib.prefix}`);
      const data = await response.json();
      
      if (data.icons) {
        const iconNames = Object.keys(data.icons);
        const randomIcons = iconNames.sort(() => 0.5 - Math.random()).slice(0, 5);
        
        randomIcons.forEach(iconName => {
          mixedIcons.push({
            name: iconName,
            iconName: iconName,
            category: 'mixed',
            tr: iconName,
            source: 'iconify',
            version: libKey,
            prefix: lib.prefix
          });
        });
      }
    } catch (error) {
      console.warn(`Failed to load ${lib.prefix}:`, error);
    }
  }
  
  state.mixedResults = mixedIcons;
  renderIcons(mixedIcons);
  showToast(`🎲 ${mixedIcons.length} rastgele ikon yüklendi`);
}

// ==========================================
// 🎨 ICONIFY LIBRARY RENDERER
// ==========================================

async function renderIconifyLibrary(version) {
  const config = LIBRARY_CONFIG[version];
  if (!config || config.source !== 'iconify') return;
  
  state.isLoading = true;
  showToast(`📚 ${config.name} yükleniyor...`);
  
  try {
    // Fetch collection info
    const response = await fetch(`https://api.iconify.design/collection?prefix=${config.prefix}`);
    const data = await response.json();
    
    if (data.icons) {
      // Map icons using smart mapping or generate from collection
      const mappedIcons = [];
      
      // First, try to map our known icons
      Object.keys(SMART_MAPPING).forEach(appName => {
        const mapping = SMART_MAPPING[appName];
        const iconName = mapping[config.prefix] || mapping.default;
        
        // Check if icon exists in collection
        if (data.icons[iconName] || Object.keys(data.icons).includes(iconName)) {
          const localIcon = LOCAL_ICONS.find(i => i.name === appName);
          mappedIcons.push({
            name: appName,
            iconName: iconName,
            category: localIcon ? localIcon.category : 'general',
            tr: localIcon ? localIcon.tr : appName,
            source: 'iconify',
            version: version,
            prefix: config.prefix
          });
        }
      });
      
      // If no mapped icons found, get some popular icons from the collection
      if (mappedIcons.length === 0) {
        const popularIcons = Object.keys(data.icons).slice(0, 36);
        popularIcons.forEach((iconName, idx) => {
          mappedIcons.push({
            name: iconName,
            iconName: iconName,
            category: 'general',
            tr: iconName,
            source: 'iconify',
            version: version,
            prefix: config.prefix
          });
        });
      }
      
      state.currentIcons = mappedIcons;
      renderIcons(mappedIcons);
      
      // Render Iconify icons
      if (window.Iconify) {
        window.Iconify.scan();
      }
      
      showToast(`✅ ${config.name} yüklendi (${mappedIcons.length} ikon)`);
    }
  } catch (error) {
    console.error('Library load error:', error);
    showToast('❌ Kütüphane yüklenemedi', 'error');
  } finally {
    state.isLoading = false;
  }
}

// ==========================================
// 📊 STATS & UTILITIES
// ==========================================

function updateStats(count) {
  const library = LIBRARY_CONFIG[state.currentVersion];
  document.getElementById('currentLibrary').textContent = library ? library.name : 'Bilinmiyor';
  document.getElementById('iconCount').textContent = count !== undefined ? count : state.currentIcons.length;
  document.getElementById('sourceType').textContent = state.isGlobalMode ? 'Global API' : 
                                                       state.isMixedMode ? 'Mixed Sources' :
                                                       state.currentSource === 'local' ? 'Local SVG' : 'Iconify API';
}

function loadMore() {
  state.page++;
  
  let iconsToRender;
  if (state.isGlobalMode) {
    iconsToRender = state.globalResults;
  } else if (state.isMixedMode) {
    iconsToRender = state.mixedResults;
  } else {
    iconsToRender = state.currentIcons;
  }
  
  renderIcons(iconsToRender, true);
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ==========================================
// 🖼️ MODAL FUNCTIONS
// ==========================================

function openModal(icon) {
  state.currentIcon = icon;
  const modal = document.getElementById('modal');
  const iconWrapper = document.getElementById('modalIconWrapper');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalLibrary = document.getElementById('modalLibrary');
  const modalVersion = document.getElementById('modalVersion');
  
  // Render icon
  if (icon.source === 'iconify' || icon.source === 'global') {
    const prefix = icon.prefix || LIBRARY_CONFIG[icon.version]?.prefix;
    const iconName = icon.iconName || icon.name;
    iconWrapper.innerHTML = `
      <span class="iconify-icon large" 
            data-icon="${prefix}:${iconName}" 
            data-width="120" 
            data-height="120"
            style="color: currentColor;"></span>
    `;
    if (window.Iconify) {
      window.Iconify.scan();
    }
  } else {
    iconWrapper.innerHTML = `<img src="icons/${icon.file}" alt="${icon.name}" style="width: 120px; height: 120px;">`;
  }
  
  modalTitle.textContent = icon.tr || icon.name;
  modalCategory.textContent = icon.category;
  modalLibrary.textContent = icon.prefix || 'local';
  modalVersion.textContent = icon.version || 'v1';
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  // Hide code section
  document.getElementById('modalCodeSection').style.display = 'none';
}

function setupModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');
  const copyBtn = document.getElementById('copyBtn');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
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
  copyCodeBtn.addEventListener('click', copyCode);
  downloadBtn.addEventListener('click', downloadIcon);
}

// ==========================================
// 📋 COPY & DOWNLOAD FUNCTIONS
// ==========================================

async function copySVG() {
  if (!state.currentIcon) return;
  
  const btn = document.getElementById('copyBtn');
  const originalText = btn.innerHTML;
  
  try {
    btn.innerHTML = '⏳ Yükleniyor...';
    btn.disabled = true;
    
    let svgText;
    
    if (state.currentIcon.source === 'iconify' || state.currentIcon.source === 'global') {
      // Fetch SVG from Iconify API
      const prefix = state.currentIcon.prefix || LIBRARY_CONFIG[state.currentIcon.version]?.prefix;
      const iconName = state.currentIcon.iconName || state.currentIcon.name;
      const response = await fetch(`https://api.iconify.design/${prefix}/${iconName}.svg`);
      svgText = await response.text();
    } else {
      // Local SVG
      const response = await fetch(`icons/${state.currentIcon.file}`);
      svgText = await response.text();
    }
    
    await navigator.clipboard.writeText(svgText);
    
    btn.innerHTML = '✅ SVG Kopyalandı!';
    btn.style.background = '#98FB98';
    showToast('✅ SVG panoya kopyalandı!');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  } catch (err) {
    console.error('Kopyalama hatası:', err);
    btn.innerHTML = '❌ Hata!';
    btn.style.background = '#FF6B6B';
    showToast('❌ Kopyalama başarısız', 'error');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  }
}

async function copyCode() {
  if (!state.currentIcon) return;
  
  const btn = document.getElementById('copyCodeBtn');
  const originalText = btn.innerHTML;
  
  try {
    btn.innerHTML = '⏳...';
    btn.disabled = true;
    
    let code;
    
    if (state.currentIcon.source === 'iconify' || state.currentIcon.source === 'global') {
      const prefix = state.currentIcon.prefix || LIBRARY_CONFIG[state.currentIcon.version]?.prefix;
      const iconName = state.currentIcon.iconName || state.currentIcon.name;
      code = `icon="${prefix}:${iconName}"`;
    } else {
      code = `src="icons/${state.currentIcon.file}"`;
    }
    
    await navigator.clipboard.writeText(code);
    
    // Show code in modal
    const codeSection = document.getElementById('modalCodeSection');
    const codeBlock = document.getElementById('modalCode');
    codeBlock.textContent = code;
    codeSection.style.display = 'block';
    
    btn.innerHTML = '✅ Kod Kopyalandı!';
    showToast('✅ Kod kopyalandı!');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 2000);
  } catch (err) {
    console.error('Kopyalama hatası:', err);
    btn.innerHTML = '❌ Hata!';
    showToast('❌ Kopyalama başarısız', 'error');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 2000);
  }
}

async function downloadIcon() {
  if (!state.currentIcon) return;
  
  const btn = document.getElementById('downloadBtn');
  const originalText = btn.innerHTML;
  
  try {
    btn.innerHTML = '⏳ İndiriliyor...';
    btn.disabled = true;
    
    let svgText;
    let filename;
    
    if (state.currentIcon.source === 'iconify' || state.currentIcon.source === 'global') {
      const prefix = state.currentIcon.prefix || LIBRARY_CONFIG[state.currentIcon.version]?.prefix;
      const iconName = state.currentIcon.iconName || state.currentIcon.name;
      const response = await fetch(`https://api.iconify.design/${prefix}/${iconName}.svg`);
      svgText = await response.text();
      filename = `${prefix}-${iconName}.svg`;
    } else {
      const response = await fetch(`icons/${state.currentIcon.file}`);
      svgText = await response.text();
      filename = state.currentIcon.file;
    }
    
    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    btn.innerHTML = '✅ İndirildi!';
    btn.style.background = '#98FB98';
    showToast('✅ İkon indirildi!');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  } catch (err) {
    console.error('İndirme hatası:', err);
    btn.innerHTML = '❌ Hata!';
    btn.style.background = '#FF6B6B';
    showToast('❌ İndirme başarısız', 'error');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
  }
}
