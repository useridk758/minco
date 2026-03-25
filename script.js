const form = document.getElementById('proxy-form');
const input = document.getElementById('url-input');
const wrapper = document.getElementById('iframe-wrapper');
const frame = document.getElementById('proxy-frame');
const exitBtn = document.getElementById('exit-btn');

// Function to launch a site
function launchSite(url) {
    // Basic validation to ensure URL starts with http
    let targetUrl = url;
    if (!url.startsWith('http')) {
        targetUrl = 'https://' + url;
    }
    
    frame.src = targetUrl;
    wrapper.classList.remove('hidden');
}

// Handle Search Bar Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    launchSite(input.value);
});

// Handle Exit Button
exitBtn.addEventListener('click', () => {
    wrapper.classList.add('hidden');
    frame.src = ""; // Stop the site from running in background
});
