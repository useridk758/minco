// Launching Proxy/Sites
function launchSite(url) {
    const wrapper = document.getElementById('iframe-wrapper');
    const frame = document.getElementById('proxy-frame');
    frame.src = url;
    wrapper.classList.remove('hidden');
}

function closeFrame() {
    document.getElementById('iframe-wrapper').classList.add('hidden');
    document.getElementById('proxy-frame').src = "";
}

// Modal Handling
function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function switchAuth(dir) {
    document.getElementById('login-section').classList.toggle('hidden', dir === 'up');
    document.getElementById('signup-section').classList.toggle('hidden', dir === 'down');
}

// Premium Logic
function showPremium() {
    document.getElementById('premium-notice').classList.remove('hidden');
}

function closePremium() {
    document.getElementById('premium-notice').classList.add('hidden');
}

// Advanced Star Background
const container = document.getElementById('stars-container');
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    Object.assign(star.style, {
        position: 'absolute',
        width: Math.random() * 3 + 'px',
        height: Math.random() * 3 + 'px',
        backgroundColor: 'white',
        borderRadius: '50%',
        top: Math.random() * 100 + 'vh',
        left: Math.random() * 100 + 'vw',
        opacity: Math.random(),
    });
    
    // Twinkle animation
    star.animate([
        { opacity: 0.2, transform: 'scale(1)' },
        { opacity: 1, transform: 'scale(1.2)' },
        { opacity: 0.2, transform: 'scale(1)' }
    ], {
        duration: 2000 + Math.random() * 3000,
        iterations: Infinity
    });
    
    container.appendChild(star);
}

// Theme Color Setting
document.getElementById('theme-color').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--accent', e.target.value);
});
