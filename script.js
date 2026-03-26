// Launching Sites
function launchSite(url) {
    const wrapper = document.getElementById('iframe-wrapper');
    const frame = document.getElementById('proxy-frame');
    
    let target = url.includes('://') ? url : 'https://www.google.com/search?q=' + encodeURIComponent(url);
    
    frame.src = target;
    wrapper.classList.remove('hidden');
}

// Exit Frame
document.getElementById('exit-btn').onclick = () => {
    document.getElementById('iframe-wrapper').classList.add('hidden');
    document.getElementById('proxy-frame').src = "";
};

// Search Form
document.getElementById('proxy-form').onsubmit = (e) => {
    e.preventDefault();
    launchSite(document.getElementById('url-input').value);
};

// Modal Logic
function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function switchAccountView(view) {
    document.getElementById('login-form').classList.toggle('hidden', view === 'signup');
    document.getElementById('signup-form').classList.toggle('hidden', view === 'login');
}

// Simple Particle Background (Stars)
const particleContainer = document.getElementById('particles-js');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.opacity = Math.random();
    star.animate([
        { opacity: 0.2 }, { opacity: 1 }, { opacity: 0.2 }
    ], { duration: 2000 + Math.random() * 3000, iterations: Infinity });
    particleContainer.appendChild(star);
}
