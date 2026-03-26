// 1. Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. System Notifications
function notify(msg) {
    const container = document.getElementById('notification-container');
    const n = document.createElement('div');
    n.className = 'notif';
    n.innerText = msg;
    container.appendChild(n);
    setTimeout(() => n.remove(), 4000);
}

// 3. Browser Navigation
function launchSite(url) {
    const wrapper = document.getElementById('iframe-wrapper');
    const frame = document.getElementById('proxy-frame');
    const addr = document.getElementById('browser-address-bar');
    
    let target = url.includes('://') ? url : 'https://' + url;
    frame.src = target;
    addr.value = target;
    wrapper.classList.remove('hidden');
    notify("Navigating to " + url);
}

function navigateBrowser() {
    launchSite(document.getElementById('browser-address-bar').value);
}

function refreshFrame() {
    document.getElementById('proxy-frame').contentWindow.location.reload();
}

function closeFrame() {
    document.getElementById('iframe-wrapper').classList.add('hidden');
    document.getElementById('proxy-frame').src = "";
}

// 4. Auth Logic (Local Storage Simulation)
function handleRegister() {
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;
    if(user && pass) {
        localStorage.setItem(`user_${user}`, pass);
        notify("Account created for " + user);
        switchAuth('down');
    } else {
        notify("Please fill all fields!");
    }
}

function handleLogin() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    const savedPass = localStorage.getItem(`user_${user}`);
    
    if(savedPass === pass && user !== "") {
        notify("Welcome back, " + user + "!");
        toggleModal('account-modal');
    } else {
        notify("Invalid credentials.");
    }
}

// 5. General UI
function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function switchAuth(dir) {
    document.getElementById('login-section').classList.toggle('hidden', dir === 'up');
    document.getElementById('signup-section').classList.toggle('hidden', dir === 'down');
}

function showPremium() {
    document.getElementById('premium-notice').classList.remove('hidden');
}

function closePremium() {
    document.getElementById('premium-notice').classList.add('hidden');
}

// Search Form
document.getElementById('proxy-form').onsubmit = (e) => {
    e.preventDefault();
    launchSite(document.getElementById('url-input').value);
};

// Background Stars (Persistent)
const starBox = document.getElementById('stars-container');
for(let i=0; i<100; i++) {
    let s = document.createElement('div');
    s.style.position = 'fixed';
    s.style.left = Math.random()*100+'vw';
    s.style.top = Math.random()*100+'vh';
    s.style.width = '2px'; s.style.height = '2px';
    s.style.background = 'white';
    s.style.opacity = Math.random();
    starBox.appendChild(s);
}
