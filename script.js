// 1. Dual-Part Custom Mouse
const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    // Delayed outline for smooth effect
    outline.animate({
        left: (e.clientX - 15) + 'px',
        top: (e.clientY - 15) + 'px'
    }, { duration: 150, fill: "forwards" });
});

// 2. Fullscreen Launch Logic
function launchSite(url) {
    const wrapper = document.getElementById('iframe-wrapper');
    const frame = document.getElementById('proxy-frame');
    const addr = document.getElementById('browser-address-bar');
    
    let target = url.includes('://') ? url : 'https://' + url;
    frame.src = target;
    addr.value = target;
    wrapper.classList.remove('hidden');
    notify("System routing: " + url);
}

function closeFrame() {
    document.getElementById('iframe-wrapper').classList.add('hidden');
    document.getElementById('proxy-frame').src = "";
}

function refreshFrame() { document.getElementById('proxy-frame').contentWindow.location.reload(); }

// 3. Functional Settings
document.getElementById('accent-picker').oninput = (e) => {
    document.documentElement.style.setProperty('--accent', e.target.value);
};

document.getElementById('star-slider').onchange = (e) => {
    generateStars(e.target.value);
    notify("Particles updated to " + e.target.value);
};

// 4. Notifications
function notify(msg) {
    const container = document.getElementById('notification-container');
    const n = document.createElement('div');
    n.style.cssText = "background:rgba(0,0,0,0.8); border-left:3px solid var(--accent); padding:10px 20px; margin-top:10px; border-radius:5px; font-size:14px; animation: slide 0.3s ease;";
    n.innerText = msg;
    container.appendChild(n);
    setTimeout(() => n.remove(), 3000);
}

// 5. Auth & UI Toggles
function handleRegister() {
    const u = document.getElementById('reg-user').value;
    const p = document.getElementById('reg-pass').value;
    if(u && p) {
        localStorage.setItem(`minco_user_${u}`, p);
        notify("Account registered: " + u);
        switchAuth('down');
    }
}

function handleLogin() {
    const u = document.getElementById('login-user').value;
    const p = document.getElementById('login-pass').value;
    if(localStorage.getItem(`minco_user_${u}`) === p && u !== "") {
        notify("Welcome to Minco, " + u);
        toggleModal('account-modal');
    } else {
        notify("Access Denied.");
    }
}

function toggleModal(id) { document.getElementById(id).classList.toggle('hidden'); }
function switchAuth(dir) {
    document.getElementById('login-section').classList.toggle('hidden', dir === 'up');
    document.getElementById('signup-section').classList.toggle('hidden', dir === 'down');
}

function showPremium() { document.getElementById('premium-notice').classList.remove('hidden'); }
function closePremium() { document.getElementById('premium-notice').classList.add('hidden'); }

// 6. Stars Engine
function generateStars(count) {
    const sBox = document.getElementById('stars-container');
    sBox.innerHTML = '';
    for(let i=0; i<count; i++) {
        let s = document.createElement('div');
        s.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:${Math.random()*100}vh; width:2px; height:2px; background:white; opacity:${Math.random()}; pointer-events:none;`;
        sBox.appendChild(s);
    }
}
generateStars(100);

document.getElementById('proxy-form').onsubmit = (e) => {
    e.preventDefault();
    launchSite(document.getElementById('url-input').value);
};
