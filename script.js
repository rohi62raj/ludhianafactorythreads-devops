/* ============================================
   LUDHIANA FACTORY THREADS — WHOLESALE JS
   ============================================ */
'use strict';

const colorMap = {
  'Black':'#1a1a1a','Navy':'#1e3a5f','Olive':'#6b7c4d','Grey':'#888','White':'#f0f0f0',
  'Maroon':'#800020','Royal Blue':'#2563eb','Burgundy':'#722f37','Khaki':'#c3b091',
  'Dark Green':'#1a4a2e','Charcoal':'#36454f','Beige':'#d4b896','Sky Blue':'#87ceeb',
  'Mustard':'#e1ad01','Rust':'#b7410e','Brown':'#8b4513','Camel':'#c19a6b',
  'Forest Green':'#228b22','Pink':'#ffb6c1','Red':'#dc2626','Light Blue':'#bfdbfe',
  'Off White':'#fafaf5','Dark Blue':'#1e3a8a','Wine':'#722f37','Teal':'#008080',
  'Orange':'#ea580c','Stone':'#a8a08c','Denim Blue':'#1560bd','Light Grey':'#d1d5db',
  'Peach':'#ffcba4','Blue':'#2563eb','Dark Brown':'#5c3317','Cream':'#fffdd0',
  'Light Green':'#90ee90','Pale Green':'#98fb98','Multicolor':'#ff6b6b','Mixed Combo':'#9b59b6',
};

const WA = '919877626809';
function waLink(msg){ return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`; }

// ---- YOUR REAL PRODUCTS ----
const products = [
  // WINTER
  { id:1, code:'SW-001', name:'Men Full Sleeve Solid Sweatshirt', category:'Sweatshirts', season:'winter', price:359, dozenPrice:3878, sizes:['S','M','L','XL','XXL'], colors:['Black','Navy','Olive','Grey','White'], image:'https://i.ibb.co/zh2cGRXn/Men-Full-Sleeve-Solid-Sweatshirt.png', badge:'SEASONAL', stock:'in-stock', description:'Premium full sleeve solid sweatshirt. Soft fleece inside, durable outer. Available in 5 solid colors. Perfect for Patna winters.', rating:4.5, reviews:89 },
  { id:2, code:'LJ-002', name:'Men Solid Leather Jacket', category:'Jackets', season:'winter', price:549, dozenPrice:5630, sizes:['S','M','L','XL','XXL'], colors:['Grey','Dark Brown','Cream','Black','Light Green'], image:'https://i.ibb.co/Y7hYG8f8/Leather-Jacket.png', badge:'BESTSELLER', stock:'in-stock', description:'Stylish faux leather jacket with zip closure. Smooth finish, premium quality. Best-selling winter item with great retailer margins.', rating:4.7, reviews:134 },
  { id:3, code:'SS-003', name:'Men Full Sleeve Striped Sweatshirt', category:'Sweatshirts', season:'winter', price:259, dozenPrice:2797, sizes:['S','M','L','XL','XXL'], colors:['Grey','Dark Brown','Cream','Black','Light Green'], image:'https://i.ibb.co/rRF1LtGZ/Screenshot-2026-03-15-131822.png', badge:'SEASONAL', stock:'in-stock', description:'Trendy striped full sleeve sweatshirt. Soft cotton-blend, ribbed cuffs. Casual winter wear at unbeatable wholesale price.', rating:4.3, reviews:67 },
  { id:4, code:'HD-004', name:'Men Pullover Hoodie', category:'Hoodies', season:'winter', price:399, dozenPrice:4788, sizes:['S','M','L','XL','XXL'], colors:['Black','Blue','White','Brown','Pale Green'], image:'https://i.ibb.co/vxv34DjL/Hoody.png', badge:'BESTSELLER', stock:'in-stock', description:'Classic pullover hoodie with kangaroo pocket. Heavy 280GSM fleece, double-stitched seams. Top-selling winter item across Patna retailers.', rating:4.8, reviews:198 },
  { id:5, code:'TS-005', name:'Men Winter Tracksuit Combo', category:'Tracksuits', season:'winter', price:579, dozenPrice:6253, sizes:['S','M','L','XL','XXL'], colors:['Black','Blue','White','Brown','Pale Green'], image:'https://i.ibb.co/Z16njRZ5/Track-Suit-Combo.png', badge:'BESTSELLER', stock:'in-stock', description:'Complete winter tracksuit — jacket + pants. Fleece-lined, elastic waistband, side pockets. High-demand combo at excellent wholesale price.', rating:4.7, reviews:156 },
  // SUMMER
  { id:6, code:'CT-006', name:'Men Solid Cotton Blend T-Shirt', category:'T-Shirts', season:'summer', price:149, dozenPrice:1609, sizes:['S','M','L','XL','XXL'], colors:['Black','Blue','White','Brown'], image:'https://i.ibb.co/mrQ9fxp1/Collar-Black-Tshirt.png', badge:'SEASONAL', stock:'in-stock', description:'Lightweight solid cotton blend t-shirt. Soft feel, holds color after washes. Daily wear essential. Lowest price, highest volume seller.', rating:4.4, reviews:312 },
  { id:7, code:'CS-007', name:'Men Checkered Spread Collar Casual Shirt', category:'Shirts', season:'summer', price:399, dozenPrice:4309, sizes:['S','M','L','XL','XXL'], colors:['Multicolor'], image:'https://i.ibb.co/7Nyh1DVZ/Multicolor-Shirts.png', badge:'SEASONAL', stock:'in-stock', description:'Regular fit checkered casual shirt with spread collar. Vibrant multicolor prints. Excellent summer retail stock.', rating:4.4, reviews:98 },
  { id:8, code:'RT-008', name:'Men Round Neck Cotton T-Shirts', category:'T-Shirts', season:'summer', price:199, dozenPrice:2149, sizes:['S','M','L','XL','XXL'], colors:['Black','Blue','White','Brown','Pale Green'], image:'https://i.ibb.co/fRrV20m/Round-Nec-Tshirt.png', badge:'NEW', stock:'in-stock', description:'100% cotton round neck t-shirt. Pre-shrunk, tagless. Must-stock basic for every retailer. Available in 5 solid colors.', rating:4.5, reviews:245 },
  { id:9, code:'PLT-009', name:'Men Polo Collar T-Shirts', category:'T-Shirts', season:'summer', price:299, dozenPrice:3229, sizes:['S','M','L','XL','XXL'], colors:['Black','Blue','White','Brown','Pale Green'], image:'https://i.ibb.co/pvMR9K67/Collar-Tshirts-2-color.png', badge:'NEW', stock:'in-stock', description:'Classic polo collar t-shirt in pique cotton. Two-button placket, ribbed collar. Smart casual look. High demand among young buyers.', rating:4.6, reviews:178 },
  { id:10, code:'WCS-010', name:'White Collar Shirt With Border', category:'Shirts', season:'summer', price:299, dozenPrice:3229, sizes:['S','M','L','XL','XXL'], colors:['Black','Blue','White','Brown','Pale Green'], image:'https://i.ibb.co/HLq4kkYQ/White-Tshirts.png', badge:'SEASONAL', stock:'in-stock', description:'Crisp collar shirt with decorative border detail. Smart casual style. Perfect for festive season and daily wear.', rating:4.3, reviews:76 },
  // ALL-SEASON
  { id:11, code:'RCT-011', name:'Men Regular Fit Cotton Trouser', category:'Trousers', season:'all-season', price:255, dozenPrice:2754, sizes:['28','30','32','34','36','38'], colors:['Black','Navy','Olive','Grey','White'], image:'https://i.ibb.co/CpC7C7QR/Regular-Fit-Cotton-Trouser-Men.png', badge:'LIMITED', stock:'in-stock', description:'Regular fit cotton trouser with elastic + drawstring waistband. Lightweight, breathable. Year-round seller, 5 colors.', rating:4.3, reviews:112 },
  { id:12, code:'SCT-012', name:'Men Straight Fit Plain Cotton Trouser', category:'Trousers', season:'all-season', price:330, dozenPrice:3564, sizes:['28','30','32','34','36','38'], colors:['Black','Navy','Olive','Grey','White'], image:'https://i.ibb.co/67RrdWMQ/Straight-Fit-Plain-Cotton-Trouser.png', badge:'LIMITED', stock:'in-stock', description:'Straight fit plain cotton trouser. Clean design with side and back pockets. Comfortable all-season daily wear.', rating:4.4, reviews:89 },
  { id:13, code:'RMJ-013', name:'Men Relaxed Fit Mid Rise Jeans', category:'Jeans', season:'all-season', price:399, dozenPrice:4309, sizes:['28','30','32','34','36','38'], colors:['Black','Navy','Olive','Grey','White'], image:'https://i.ibb.co/xtr98hbb/Men-Relaxed-Fit-Mid-Rise-Jeans.png', badge:'BESTSELLER', stock:'limited', description:'Relaxed fit mid-rise jeans, stretchable denim for all-day comfort. Fast-moving item — order early to avoid stockout.', rating:4.6, reviews:203 },
  { id:14, code:'BJ-014', name:'Men Relaxed Fit Mid Rise Blue Jeans', category:'Jeans', season:'all-season', price:329, dozenPrice:3553, sizes:['28','30','32','34'], colors:['Blue'], image:'https://i.ibb.co/fV15Hn7h/Blue-Jeans.png', badge:'BESTSELLER', stock:'in-stock', description:'Classic mid-rise relaxed fit blue denim. Clean wash, durable stitching. Evergreen style that sells all year in Patna market.', rating:4.5, reviews:167 },
  { id:15, code:'TSJ-015', name:'Trendy Sky Blue Jeans', category:'Jeans', season:'all-season', price:399, dozenPrice:4309, sizes:['28','30','32','34','36'], colors:['Blue'], image:'https://i.ibb.co/fYFVMd3T/Light-Blue.png', badge:'NEW', stock:'in-stock', description:'Trendy light sky-blue wash denim. Modern slim-fit silhouette, popular among youth. New arrival, already selling fast.', rating:4.5, reviews:94 },
  { id:16, code:'JSC-016', name:'Jeans & Shirt Combo Set', category:'Combos', season:'all-season', price:549, dozenPrice:5930, sizes:['S','M','L','XL','XXL'], colors:['Mixed Combo'], image:'https://i.ibb.co/V0Dbg8k9/Jeans-shitrts-combo.png', badge:'BESTSELLER', stock:'in-stock', description:'Complete jeans + shirt combo set. Value-for-money bundle. Assorted color combos. High-margin product for retailers.', rating:4.7, reviews:221 },
  { id:17, code:'CPC-017', name:'Check Printed Shirt & Jeans Combo', category:'Combos', season:'all-season', price:549, dozenPrice:5930, sizes:['S','M','L','XL','XXL'], colors:['Mixed Combo'], image:'https://i.ibb.co/TqNKRMvn/Screenshot-2026-03-15-135206.png', badge:'NEW', stock:'in-stock', description:'Trendy check printed shirt paired with matching jeans. Ready-to-wear combo. Excellent gifting product. Mixed assorted combos.', rating:4.5, reviews:143 },
];

// ---- STATE ----
let cart = JSON.parse(localStorage.getItem('lft_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('lft_wishlist')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('lft_recent')) || [];
let displayedCount = 17;
let filteredProducts = [...products];
let activeSeasonFilter = 'all';
let activeSizeFilters = [];
let couponApplied = false;
let lang = 'en';
const translations = {
  en:{ orderBtn:'Place Order via WhatsApp' },
  hi:{ orderBtn:'WhatsApp पर ऑर्डर करें' }
};

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initAOS(); initSwipers(); renderFeatured(); initCategoryFilters();
  initCalcDropdown(); setTimeout(() => renderProducts(), 600);
  updateCartUI(); updateWishlistCount(); renderRecentlyViewed();
  initScrollEvents(); restoreTheme(); updateAllWaLinks(); initAuthUI();
});

function updateAllWaLinks() {
  document.querySelectorAll('a[href*="91XXXXXXXXXX"]').forEach(a => {
    a.href = a.href.replace(/91XXXXXXXXXX/g, WA);
  });
}
function initAOS() { if(window.AOS) AOS.init({duration:700,once:true,offset:60}); }

function initSwipers() {
  new Swiper('.hero-swiper',{loop:true,autoplay:{delay:5000,disableOnInteraction:false},pagination:{el:'.swiper-pagination',clickable:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},effect:'fade',speed:900});
  new Swiper('.featured-swiper',{slidesPerView:'auto',spaceBetween:16,freeMode:true,breakpoints:{480:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1200:{slidesPerView:5}}});
  new Swiper('.testimonials-swiper',{loop:true,autoplay:{delay:4000},spaceBetween:20,pagination:{el:'.testimonial-pagination',clickable:true},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}}});
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if(!grid) return;
  grid.innerHTML = products.filter(p=>p.badge==='BESTSELLER').map(p=>`<div class="swiper-slide">${productCardHTML(p)}</div>`).join('');
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  const toShow = filteredProducts.slice(0, displayedCount);
  const el = document.getElementById('resultCount');
  if(el) el.textContent = `Showing ${toShow.length} of ${filteredProducts.length} products`;
  if(!filteredProducts.length){
    grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:56px 24px;color:var(--text-secondary)"><i class="fas fa-box-open" style="font-size:52px;display:block;margin-bottom:18px;opacity:.25"></i><p style="font-size:17px;font-weight:600;margin-bottom:6px">No products found</p><p style="font-size:13px">Try adjusting your filters or <button onclick="clearAllFilters()" style="color:var(--gold);font-weight:700;background:none;border:none;cursor:pointer">clear all</button></p></div>`;
    document.getElementById('loadMoreBtn').classList.add('hidden'); return;
  }
  toShow.forEach(p=>{ const w=document.createElement('div'); w.innerHTML=productCardHTML(p); grid.appendChild(w.firstChild); });
  const lb=document.getElementById('loadMoreBtn');
  if(lb){ if(displayedCount>=filteredProducts.length) lb.classList.add('hidden'); else lb.classList.remove('hidden'); }
  initCalcDropdown();
}

function productCardHTML(p){
  const isW = wishlist.includes(p.id);
  const stCls = p.stock==='in-stock'?'stock-in':p.stock==='limited'?'stock-limited':'stock-out';
  const stLbl = p.stock==='in-stock'?'● In Stock':p.stock==='limited'?'● Limited':'● Out of Stock';
  const seaLbl = p.season==='winter'?'❄️ Winter':p.season==='summer'?'☀️ Summer':'🔁 All-Season';
  const bMap={'BESTSELLER':'badge-bestseller','NEW':'badge-new','LIMITED':'badge-limited','SEASONAL':'badge-seasonal'};
  const badgeHTML = p.badge&&bMap[p.badge]?`<span class="badge-item ${bMap[p.badge]}">${p.badge}</span>`:'';
  const colorsHTML = p.colors.slice(0,5).map((c,i)=>`<span class="color-swatch ${i===0?'active':''}" style="background:${colorMap[c]||'#888'}" title="${c}" onclick="selectColor(this,${p.id},'${c}')"></span>`).join('');
  const sizesHTML = p.sizes.map((s,i)=>`<span class="size-dot ${i===0?'active':''}" onclick="selectSize(this,${p.id},'${s}')">${s}</span>`).join('');
  const enquireMsg=`Hi, I want to enquire about:\n*${p.name}* (${p.code})\nPrice: ₹${p.price}/pc\nPlease share details.`;
  return `<div class="product-card" data-id="${p.id}">
    <div class="product-image-wrapper">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=60'"/>
      <div class="product-badges">${badgeHTML}</div>
      <span class="season-tag-badge">${seaLbl}</span>
      <span class="stock-badge ${stCls}">${stLbl}</span>
      <div class="card-actions">
        <button class="card-action-btn ${isW?'wishlisted':''}" onclick="toggleWishlist(${p.id})" title="Wishlist"><i class="fa${isW?'s':'r'} fa-heart"></i></button>
      </div>
      <div class="quick-view-overlay" onclick="openQuickView(${p.id})"><i class="fas fa-eye"></i> Quick View</div>
    </div>
    <div class="product-body">
      <div class="product-code">${p.code}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-category">${p.category}</div>
      <div class="product-pricing">
        <span class="price-main">₹${p.price.toLocaleString()}</span>
        <span class="price-dozen">₹${p.dozenPrice.toLocaleString()}/dz</span>
      </div>
      <div class="product-sizes" id="sizes-${p.id}">${sizesHTML}</div>
      <div class="product-colors">${colorsHTML}</div>
      <span class="moq-badge"><i class="fas fa-box"></i> Min. Order: 12 Pcs</span>
    </div>
    <div class="product-footer">
      <button class="btn-add-cart" onclick="addToCart(${p.id})"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
      <button class="btn-demo" onclick="requestDemo(${p.id})" title="Request Demo Piece"><i class="fas fa-hand-holding-box"></i></button>
      <a class="btn-enquire" href="${waLink(enquireMsg)}" target="_blank" title="Enquire on WhatsApp"><i class="fab fa-whatsapp"></i></a>
    </div>
  </div>`;
}

function openQuickView(id){
  const p=products.find(x=>x.id===id); if(!p) return;
  addToRecentlyViewed(id);
  const colorsHTML=p.colors.map((c,i)=>`<span class="modal-color-swatch ${i===0?'active':''}" style="background:${colorMap[c]||'#888'}" title="${c}" onclick="selectModalColor(this,'${c}')" data-color="${c}"></span>`).join('');
  const sizesHTML=p.sizes.map((s,i)=>`<button class="modal-size-btn ${i===0?'active':''}" onclick="selectModalSize(this)" data-size="${s}">${s}</button>`).join('');
  const stars='★'.repeat(Math.floor(p.rating))+(p.rating%1>=0.5?'½':'');
  const demoMsg=`🎁 *DEMO PIECE REQUEST*\n*Ludhiana FactoryThreads*\n━━━━━━━━━━━━━━━━━━━━\n📦 ${p.name}\n🔖 Code: ${p.code}\n💰 ₹${p.price}/pc\n━━━━━━━━━━━━━━━━━━━━\nI want 1 demo piece delivered in Patna.\n📍 My Address: `;
  document.getElementById('modalContent').innerHTML=`
    <div class="modal-img"><img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400'"/></div>
    <div class="modal-info">
      <div class="product-code">${p.code}</div>
      <div class="product-name" style="font-size:20px;font-weight:700;line-height:1.3">${p.name}</div>
      <div class="modal-rating"><span class="stars">${stars}</span><span class="review-count">(${p.reviews} reviews)</span></div>
      <div class="product-pricing"><span class="price-main">₹${p.price.toLocaleString()}</span><span class="price-dozen">₹${p.dozenPrice.toLocaleString()}/dozen</span></div>
      <p class="modal-desc">${p.description}</p>
      <div><div class="modal-label">Select Size</div><div class="modal-sizes">${sizesHTML}</div></div>
      <div><div class="modal-label">Select Color</div><div class="modal-colors-wrapper">${colorsHTML}</div></div>
      <div class="modal-qty-row">
        <div class="modal-qty-control">
          <button class="modal-qty-btn" onclick="changeModalQty(-12)">−</button>
          <span class="modal-qty-val" id="modal-qty">12</span>
          <button class="modal-qty-btn" onclick="changeModalQty(12)">+</button>
        </div>
        <button class="modal-add-btn" onclick="addToCartFromModal(${p.id})"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
      </div>
      <a href="${waLink(demoMsg)}" target="_blank" class="btn-demo-modal"><i class="fas fa-hand-holding-box"></i> Request Demo Piece — 24 hrs Patna Delivery</a>
      <span class="moq-badge"><i class="fas fa-box"></i> Min. Order: 12 Pcs</span>
    </div>`;
  document.getElementById('quickViewModal').classList.add('active');
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('quickViewModal').classList.remove('active');
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow='';
}

// ---- FIREBASE AUTH ----
let auth = null;
let authReady = false;
let currentAuthUser = null;
const ADMIN_EMAILS = ['admin@ludhianafactorythreads.in'];

function initAuthUI(){
  const openBtn = document.getElementById('authOpenBtn');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const forgotForm = document.getElementById('forgotForm');

  if(openBtn) openBtn.addEventListener('click', openAuthModal);
  if(loginForm) loginForm.addEventListener('submit', handleLoginSubmit);
  if(signupForm) signupForm.addEventListener('submit', handleSignupSubmit);
  if(forgotForm) forgotForm.addEventListener('submit', handleForgotSubmit);

  initFirebaseAuth();
  updateAuthNav();
}

function initFirebaseAuth(){
  if(!window.firebase || typeof firebaseConfig === 'undefined'){
    setAuthStatus('Firebase SDK/config not loaded. Check internet and firebase-config.js.', 'error');
    return;
  }

  try {
    if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    auth.onAuthStateChanged(user => {
      authReady = true;
      currentAuthUser = user;
      updateAuthNav();
      if(user) setAuthStatus(`Signed in as ${user.email}`, 'success');
    });
  } catch (error) {
    setAuthStatus(getAuthErrorMessage(error), 'error');
  }
}

function openAuthModal(){
  const modal = document.getElementById('authModal');
  const overlay = document.getElementById('authOverlay');
  if(!modal || !overlay) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  updateAuthNav();
}

function closeAuthModal(){
  const modal = document.getElementById('authModal');
  const overlay = document.getElementById('authOverlay');
  if(!modal || !overlay) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  clearAuthStatus();
}

function switchAuthMode(mode){
  const forms = ['loginForm','signupForm','forgotForm'];
  forms.forEach(id => document.getElementById(id)?.classList.remove('active'));
  document.getElementById(`${mode}Form`)?.classList.add('active');
  document.getElementById('loginTab')?.classList.toggle('active', mode === 'login');
  document.getElementById('signupTab')?.classList.toggle('active', mode === 'signup');
  clearAuthStatus();
}

function showForgotPassword(){
  document.getElementById('loginForm')?.classList.remove('active');
  document.getElementById('signupForm')?.classList.remove('active');
  document.getElementById('forgotForm')?.classList.add('active');
  document.getElementById('loginTab')?.classList.remove('active');
  document.getElementById('signupTab')?.classList.remove('active');
  clearAuthStatus();
}

function togglePassword(inputId, btn){
  const input = document.getElementById(inputId);
  if(!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.innerHTML = input.type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
}

function handleLoginSubmit(event){
  event.preventDefault();
  if(!auth) return setAuthStatus('Firebase Authentication is not ready. Check SDK and config loading.', 'error');
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if(!email || !password) return setAuthStatus('Enter email and password.', 'error');
  setAuthStatus('Signing in...', 'success');
  auth.signInWithEmailAndPassword(email, password)
    .then(() => showToast('Login successful'))
    .catch(error => setAuthStatus(getAuthErrorMessage(error), 'error'));
}

function handleSignupSubmit(event){
  event.preventDefault();
  if(!auth) return setAuthStatus('Firebase Authentication is not ready. Check SDK and config loading.', 'error');
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  if(!name || !email || password.length < 6) return setAuthStatus('Use a name, valid email, and password with at least 6 characters.', 'error');
  setAuthStatus('Creating account...', 'success');
  auth.createUserWithEmailAndPassword(email, password)
    .then(credential => credential.user.updateProfile({ displayName: name }))
    .then(() => {
      updateAuthNav();
      showToast('Account created');
      setAuthStatus('Account created successfully.', 'success');
    })
    .catch(error => setAuthStatus(getAuthErrorMessage(error), 'error'));
}

function handleForgotSubmit(event){
  event.preventDefault();
  if(!auth) return setAuthStatus('Firebase Authentication is not ready. Check SDK and config loading.', 'error');
  const email = document.getElementById('forgotEmail').value.trim();
  if(!email) return setAuthStatus('Enter your registered email.', 'error');
  setAuthStatus('Sending reset link...', 'success');
  auth.sendPasswordResetEmail(email)
    .then(() => setAuthStatus('Password reset link sent. Check your email inbox.', 'success'))
    .catch(error => setAuthStatus(getAuthErrorMessage(error), 'error'));
}

function logoutUser(){
  if(!auth) return setAuthStatus('Firebase Authentication is not ready.', 'error');
  auth.signOut()
    .then(() => {
      currentAuthUser = null;
      updateAuthNav();
      setAuthStatus('Logged out successfully.', 'success');
      showToast('Logged out');
    })
    .catch(error => setAuthStatus(getAuthErrorMessage(error), 'error'));
}

function openAdminPanel(){
  if(!currentAuthUser) return setAuthStatus('Please login before opening admin tools.', 'error');
  if(!ADMIN_EMAILS.includes(currentAuthUser.email.toLowerCase())) return setAuthStatus('Access denied. This account is not registered as an admin.', 'error');
  setAuthStatus('Admin access verified for this account.', 'success');
  const adminModal = document.getElementById('adminModal');
  const adminOverlay = document.getElementById('adminOverlay');
  if(adminModal && adminOverlay){
    adminModal.classList.add('active');
    adminOverlay.classList.add('active');
    adminModal.setAttribute('aria-hidden','false');
  }
}

function closeAdminPanel(){
  const adminModal = document.getElementById('adminModal');
  const adminOverlay = document.getElementById('adminOverlay');
  if(!adminModal || !adminOverlay) return;
  adminModal.classList.remove('active');
  adminOverlay.classList.remove('active');
  adminModal.setAttribute('aria-hidden','true');
}

function updateAuthNav(){
  const label = document.getElementById('authNavLabel');
  const btn = document.getElementById('authOpenBtn');
  const profile = document.getElementById('authProfile');
  const emailEl = document.getElementById('authUserEmail');
  if(label) label.textContent = currentAuthUser ? 'Account' : 'Login';
  if(btn) btn.classList.toggle('signed-in', !!currentAuthUser);
  if(profile) profile.classList.toggle('active', !!currentAuthUser);
  if(emailEl && currentAuthUser) emailEl.textContent = currentAuthUser.email;
}

function setAuthStatus(message, type='success'){
  const status = document.getElementById('authStatus');
  if(!status) return;
  status.textContent = message;
  status.className = `auth-status ${type}`;
}

function clearAuthStatus(){
  const status = document.getElementById('authStatus');
  if(!status) return;
  status.textContent = '';
  status.className = 'auth-status';
}

function getAuthErrorMessage(error){
  const messages = {
    'auth/email-already-in-use': 'This email is already registered. Try login instead.',
    'auth/invalid-email': 'Enter a valid email address.',
    'auth/operation-not-allowed': 'Email/Password sign-in is not enabled in Firebase.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-login-credentials': 'Invalid email or password.',
    'auth/network-request-failed': 'Network error. Check internet connection and retry.'
  };
  return messages[error.code] || error.message || 'Authentication failed. Please try again.';
}

function requestDemo(id){
  const p=products.find(x=>x.id===id); if(!p) return;
  const msg=`🎁 *DEMO PIECE REQUEST*\n*Ludhiana FactoryThreads*\n━━━━━━━━━━━━━━━━━━━━\n📦 Product: ${p.name}\n🔖 Code: ${p.code}\n📂 Category: ${p.category}\n💰 Price: ₹${p.price}/pc\n━━━━━━━━━━━━━━━━━━━━\nI want 1 demo piece delivered in Patna.\n📍 My Address: (share your address)\n━━━━━━━━━━━━━━━━━━━━\nludhianafactorythreads.in`;
  window.open(waLink(msg),'_blank');
  showToast(`📦 Demo request for: ${p.name}`);
}

function selectModalSize(btn){ document.querySelectorAll('.modal-size-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
function selectModalColor(el){ document.querySelectorAll('.modal-color-swatch').forEach(s=>s.classList.remove('active')); el.classList.add('active'); }
let modalQty=12;
function changeModalQty(d){ modalQty=Math.max(12,modalQty+d); const e=document.getElementById('modal-qty'); if(e) e.textContent=modalQty; }
function addToCartFromModal(id){
  const sb=document.querySelector('.modal-size-btn.active');
  const ce=document.querySelector('.modal-color-swatch.active');
  const p=products.find(x=>x.id===id);
  addToCart(id, sb?sb.dataset.size:p?.sizes[0]||'M', ce?ce.dataset.color:p?.colors[0]||'', modalQty);
  closeModal();
}

function selectSize(el,pid){ const c=document.getElementById(`sizes-${pid}`); if(c) c.querySelectorAll('.size-dot').forEach(d=>d.classList.remove('active')); el.classList.add('active'); }
function selectColor(el,pid){ const c=el.closest('.product-card'); if(c) c.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active')); el.classList.add('active'); }

function addToCart(productId, selectedSize, selectedColor, qty=12){
  const p=products.find(x=>x.id===productId); if(!p) return;
  if(!selectedSize){ const s=document.querySelector(`#sizes-${productId} .size-dot.active`); selectedSize=s?s.textContent:p.sizes[0]||'M'; }
  if(!selectedColor){ const c=document.querySelector(`[data-id="${productId}"] .color-swatch.active`); selectedColor=c?(c.title||p.colors[0]):p.colors[0]; }
  const ei=cart.findIndex(i=>i.id===productId&&i.size===selectedSize&&i.color===selectedColor);
  if(ei>-1) cart[ei].qty+=qty; else cart.push({id:productId,size:selectedSize,color:selectedColor,qty});
  saveCart(); updateCartUI(); showToast(`✅ Added: ${p.name}`); addToRecentlyViewed(productId);
}
function removeFromCart(idx){ cart.splice(idx,1); saveCart(); updateCartUI(); renderCartItems(); }
function updateCartQty(idx,d){ cart[idx].qty=Math.max(12,cart[idx].qty+d); saveCart(); renderCartItems(); updateCartUI(); }
function clearCart(){ cart=[]; couponApplied=false; saveCart(); updateCartUI(); renderCartItems(); }
function saveCart(){ localStorage.setItem('lft_cart',JSON.stringify(cart)); }

function updateCartUI(){
  const c=cart.reduce((s,i)=>s+i.qty,0);
  const e=document.getElementById('cartCount'); if(e) e.textContent=c;
  renderCartItems();
}

function renderCartItems(){
  const itemsEl=document.getElementById('cartItems');
  const footerEl=document.getElementById('cartFooter');
  if(!itemsEl) return;
  if(!cart.length){
    itemsEl.innerHTML=`<div class="empty-cart"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p><small>Add products — MOQ 12 pcs minimum</small></div>`;
    if(footerEl) footerEl.style.display='none'; return;
  }
  if(footerEl) footerEl.style.display='block';
  let subtotal=0, totalQty=0;
  itemsEl.innerHTML=cart.map((item,idx)=>{
    const p=products.find(x=>x.id===item.id); if(!p) return '';
    const t=p.price*item.qty; subtotal+=t; totalQty+=item.qty;
    return `<div class="cart-item">
      <img class="cart-item-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100'"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-code">${p.code}</div>
        <div class="cart-item-meta">Size: ${item.size} | Color: ${item.color}</div>
        <div class="cart-item-price">₹${t.toLocaleString()}</div>
        <div class="cart-qty-control">
          <button class="qty-btn" onclick="updateCartQty(${idx},-12)">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${idx},12)">+</button>
          <button class="remove-item" onclick="removeFromCart(${idx})"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>`;
  }).join('');
  const disc=couponApplied?Math.round(subtotal*.1):0;
  const grand=subtotal-disc;
  document.getElementById('summaryItems').textContent=totalQty+' pcs';
  document.getElementById('summarySubtotal').textContent='₹'+subtotal.toLocaleString();
  document.getElementById('summaryTotal').textContent='₹'+grand.toLocaleString();
  const dr=document.getElementById('discountRow');
  if(dr){ dr.style.display=couponApplied?'flex':'none'; document.getElementById('summaryDiscount').textContent='-₹'+disc.toLocaleString(); }
}

function openCart(){ document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('active'); document.body.style.overflow=''; }

function applyCoupon(){
  const code=document.getElementById('couponInput').value.trim().toUpperCase();
  if(code==='BULK10'){ couponApplied=true; showToast('🎉 BULK10 applied — 10% off!'); renderCartItems(); }
  else showToast('❌ Invalid code. Try BULK10','error');
}

function placeOrderWhatsApp(){
  if(!cart.length){ showToast('Cart is empty!','error'); return; }
  let msg=`🛍️ *NEW WHOLESALE ORDER*\n*Ludhiana FactoryThreads*\n━━━━━━━━━━━━━━━━━━━━\n`;
  let tQty=0, grand=0;
  cart.forEach(item=>{
    const p=products.find(x=>x.id===item.id); if(!p) return;
    const t=p.price*item.qty; tQty+=item.qty; grand+=t;
    msg+=`\n📦 *${p.name}*\n🔖 Code: ${p.code}\n📐 Size: ${item.size}\n🎨 Color: ${item.color}\n🔢 Qty: ${item.qty} pcs\n💰 Amount: ₹${t.toLocaleString()}\n━━━━━━━━━━━━━━━━━━━━`;
  });
  if(couponApplied){ const d=Math.round(grand*.1); grand-=d; msg+=`\n🏷️ Discount (BULK10): -₹${d.toLocaleString()}`; }
  msg+=`\n\n🛍️ Total: ${tQty} pcs\n💵 Grand Total: ₹${grand.toLocaleString()}\n📍 Delivery: Patna, Bihar\n📅 Date: ${new Date().toLocaleDateString('en-IN')}\n━━━━━━━━━━━━━━━━━━━━\nludhianafactorythreads.in`;
  window.open(waLink(msg),'_blank');
}

function toggleWishlist(id){
  const idx=wishlist.indexOf(id);
  if(idx>-1){ wishlist.splice(idx,1); showToast('Removed from wishlist'); }
  else{ wishlist.push(id); const p=products.find(x=>x.id===id); showToast(`❤️ Saved: ${p?p.name:''}`); }
  localStorage.setItem('lft_wishlist',JSON.stringify(wishlist));
  updateWishlistCount();
  const card=document.querySelector(`[data-id="${id}"]`);
  if(card){ const btn=card.querySelector('.card-action-btn'); if(btn){ const inW=wishlist.includes(id); btn.classList.toggle('wishlisted',inW); btn.innerHTML=`<i class="fa${inW?'s':'r'} fa-heart"></i>`; } }
}
function updateWishlistCount(){ const e=document.getElementById('wishlistCount'); if(e) e.textContent=wishlist.length; }

function addToRecentlyViewed(id){
  recentlyViewed=recentlyViewed.filter(x=>x!==id); recentlyViewed.unshift(id);
  if(recentlyViewed.length>6) recentlyViewed=recentlyViewed.slice(0,6);
  localStorage.setItem('lft_recent',JSON.stringify(recentlyViewed)); renderRecentlyViewed();
}
function renderRecentlyViewed(){
  if(!recentlyViewed.length) return;
  const section=document.getElementById('recentlyViewed');
  const grid=document.getElementById('recentlyGrid');
  if(!section||!grid) return;
  section.style.display='block';
  grid.innerHTML=recentlyViewed.map(id=>products.find(p=>p.id===id)).filter(Boolean).map(p=>`<div class="swiper-slide" style="width:240px">${productCardHTML(p)}</div>`).join('');
  if(!window.recentSwiper) window.recentSwiper=new Swiper('.recently-swiper',{slidesPerView:'auto',spaceBetween:16,freeMode:true});
  else window.recentSwiper.update();
}

function initCategoryFilters(){
  const cats=[...new Set(products.map(p=>p.category))].sort();
  const c=document.getElementById('categoryFilters'); if(!c) return;
  c.innerHTML=cats.map(cat=>`<label class="filter-checkbox"><input type="checkbox" name="category" value="${cat}" onchange="applyFilters()"> ${cat}</label>`).join('');
}

function applyFilters(){
  let r=[...products];
  if(activeSeasonFilter!=='all') r=r.filter(p=>p.season===activeSeasonFilter);
  const sCBs=[...document.querySelectorAll('input[name="season"]:checked')].map(e=>e.value);
  if(sCBs.length) r=r.filter(p=>sCBs.includes(p.season));
  const cCBs=[...document.querySelectorAll('input[name="category"]:checked')].map(e=>e.value);
  if(cCBs.length) r=r.filter(p=>cCBs.includes(p.category));
  if(activeSizeFilters.length) r=r.filter(p=>activeSizeFilters.some(s=>p.sizes.includes(s)));
  const mn=parseInt(document.getElementById('priceMin').value);
  const mx=parseInt(document.getElementById('priceMax').value);
  r=r.filter(p=>p.price>=mn&&p.price<=mx);
  const sort=document.getElementById('sortSelect').value;
  if(sort==='price-asc') r.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc') r.sort((a,b)=>b.price-a.price);
  else if(sort==='newest') r.sort((a,b)=>b.id-a.id);
  else if(sort==='popularity') r.sort((a,b)=>b.reviews-a.reviews);
  filteredProducts=r; displayedCount=17; renderProducts();
}

function filterBySeason(season){
  activeSeasonFilter=season;
  document.querySelectorAll('.season-tab').forEach(t=>t.classList.toggle('active',t.dataset.season===season));
  applyFilters(); document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
}
function toggleSizeFilter(btn,size){
  btn.classList.toggle('active');
  const i=activeSizeFilters.indexOf(size);
  if(i>-1) activeSizeFilters.splice(i,1); else activeSizeFilters.push(size);
  applyFilters();
}
function updatePriceRange(){
  document.getElementById('priceMinLabel').textContent=document.getElementById('priceMin').value;
  document.getElementById('priceMaxLabel').textContent=document.getElementById('priceMax').value;
  applyFilters();
}
function clearAllFilters(){
  activeSeasonFilter='all'; activeSizeFilters=[];
  document.querySelectorAll('.season-tab').forEach(t=>t.classList.toggle('active',t.dataset.season==='all'));
  document.querySelectorAll('input[name="season"],input[name="category"]').forEach(c=>c.checked=false);
  document.querySelectorAll('.size-filter-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('priceMin').value=100; document.getElementById('priceMax').value=5000;
  document.getElementById('priceMinLabel').textContent='100'; document.getElementById('priceMaxLabel').textContent='5000';
  document.getElementById('sortSelect').value='default';
  filteredProducts=[...products]; displayedCount=17; renderProducts();
}
function loadMoreProducts(){ displayedCount+=17; renderProducts(); }

document.getElementById('searchToggle').addEventListener('click',()=>{ document.getElementById('searchBarWrapper').classList.toggle('active'); if(document.getElementById('searchBarWrapper').classList.contains('active')) setTimeout(()=>document.getElementById('searchInput').focus(),100); });
document.getElementById('closeSearch').addEventListener('click',()=>{ document.getElementById('searchBarWrapper').classList.remove('active'); document.getElementById('searchSuggestions').classList.remove('active'); });
document.getElementById('searchInput').addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  const sg=document.getElementById('searchSuggestions');
  if(!q){ sg.classList.remove('active'); return; }
  const m=products.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)||p.code.toLowerCase().includes(q)).slice(0,6);
  if(!m.length){ sg.classList.remove('active'); return; }
  sg.innerHTML=m.map(p=>`<div class="suggestion-item" onclick="openQuickView(${p.id})"><img class="suggestion-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=60'"/><div class="suggestion-info"><strong>${p.name}</strong><span>₹${p.price}/pc | ${p.code}</span></div></div>`).join('');
  sg.classList.add('active');
});

function initCalcDropdown(){
  const sel=document.getElementById('calcProduct'); if(!sel||sel.options.length>1) return;
  products.forEach(p=>{ const o=document.createElement('option'); o.value=p.id; o.textContent=`${p.code} — ${p.name.substring(0,32)}`; sel.appendChild(o); });
}
function calcUpdate(){
  const id=parseInt(document.getElementById('calcProduct').value);
  const qty=parseInt(document.getElementById('calcQty').value)||12;
  const re=document.getElementById('calcResult'); if(!id||!re) return;
  const p=products.find(x=>x.id===id); if(!p) return;
  const total=p.price*qty;
  const dozens=Math.floor(qty/12);
  const savings=dozens>0?(p.price*12-p.dozenPrice)*dozens:0;
  re.innerHTML=`Total: <strong>₹${total.toLocaleString()}</strong><br/>${qty} pcs × ₹${p.price}/pc<br/>${savings>0?`<span style="color:#4ade80">Save ₹${savings.toLocaleString()} vs MRP</span>`:''}`;
}

document.getElementById('cartBtn').addEventListener('click',openCart);

function restoreTheme(){
  const s=localStorage.getItem('lft_theme')||'dark';
  document.documentElement.setAttribute('data-theme',s);
  const b=document.getElementById('themeToggle');
  if(b) b.innerHTML=s==='dark'?'<i class="fas fa-moon"></i>':'<i class="fas fa-sun"></i>';
}
document.getElementById('themeToggle').addEventListener('click',()=>{
  const c=document.documentElement.getAttribute('data-theme');
  const n=c==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',n);
  localStorage.setItem('lft_theme',n);
  document.getElementById('themeToggle').innerHTML=n==='dark'?'<i class="fas fa-moon"></i>':'<i class="fas fa-sun"></i>';
});

document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));

function initScrollEvents(){
  let t=false;
  window.addEventListener('scroll',()=>{
    if(!t){ requestAnimationFrame(()=>{
      const st=window.scrollY;
      const dh=document.documentElement.scrollHeight-window.innerHeight;
      const prog=(st/dh)*100;
      const pe=document.getElementById('scrollProgress'); if(pe) pe.style.width=prog+'%';
      const nb=document.getElementById('navbar'); if(nb) nb.classList.toggle('scrolled',st>60);
      const bt=document.getElementById('backToTop'); if(bt) bt.classList.toggle('visible',st>400);
      const sb=document.getElementById('stickyWaBanner'); if(sb&&!sb.dataset.closed) sb.classList.toggle('visible',prog>50);
      document.querySelectorAll('.counter').forEach(el=>{ const r=el.getBoundingClientRect(); if(r.top<window.innerHeight&&!el.dataset.done){ el.dataset.done='1'; animateCounter(el); } });
      t=false;
    }); t=true; }
  });
}
function animateCounter(el){
  const target=parseInt(el.dataset.target); let current=0;
  const timer=setInterval(()=>{ current+=target/120; if(current>=target){ current=target; clearInterval(timer); } el.textContent=Math.floor(current).toLocaleString(); },16);
}

function showToast(msg,type='success'){
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div'); t.className='toast';
  t.innerHTML=`<span class="toast-icon">${type==='error'?'❌':'✅'}</span> ${msg}`;
  c.appendChild(t); setTimeout(()=>t.classList.add('show'),50);
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),400); },3000);
}

function toggleMobileFilter(){ document.getElementById('filterSidebar').classList.toggle('open'); }
function downloadCatalogue(){ window.print(); }
function trackOrder(){ const v=document.getElementById('trackInput').value.trim(); if(!v){ showToast('Enter order ID','error'); return; } window.open(waLink(`Hi, track my order: ${v}`),'_blank'); }
function subscribeNewsletter(){ const e=document.getElementById('newsletterEmail').value.trim(); if(!e||!e.includes('@')){ showToast('Enter valid email','error'); return; } showToast('🎉 Subscribed! Wholesale deals incoming.'); document.getElementById('newsletterEmail').value=''; }
function toggleLang(l){ lang=l; document.getElementById('btnEn').classList.toggle('active',l==='en'); document.getElementById('btnHi').classList.toggle('active',l==='hi'); document.querySelectorAll('.btn-whatsapp-order').forEach(b=>{ b.innerHTML=`<i class="fab fa-whatsapp"></i> ${translations[l].orderBtn}`; }); }

document.addEventListener('click',e=>{
  const sw=document.getElementById('searchBarWrapper'),st=document.getElementById('searchToggle'),sg=document.getElementById('searchSuggestions');
  if(sw&&!sw.contains(e.target)&&st&&!st.contains(e.target)&&sg) sg.classList.remove('active');
  const nl=document.getElementById('navLinks'),hb=document.getElementById('hamburger');
  if(nl&&hb&&!nl.contains(e.target)&&!hb.contains(e.target)) nl.classList.remove('open');
});
document.getElementById('wishlistBtn').addEventListener('click',()=>{ if(!wishlist.length){ showToast('Wishlist empty — tap ♡ on any product','error'); return; } showToast(`❤️ ${wishlist.length} product(s) in wishlist`); });
