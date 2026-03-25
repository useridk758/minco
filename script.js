const form = document.getElementById('proxy-form');
const input = document.getElementById('url-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = input.value;
    console.log(`Minco is preparing to route: ${url}`);
    alert(`Minco setup complete! Future routing for ${url} goes here.`);
});
